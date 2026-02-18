import { useEffect, useRef } from "react";
import { useMusicStore } from "../../store/useMusicStore";

import bgMusic from "../../audio.mp4";

export const MusicController = () => {
    const { isPlaying, isMuted, volume, setIsPlaying } = useMusicStore();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize Audio
    useEffect(() => {
        console.log("Audio source path:", bgMusic);
        const audio = new Audio(bgMusic);
        audio.loop = true;
        audio.volume = isMuted ? 0 : volume;
        audioRef.current = audio;

        // Add event listeners for debugging
        const handleError = (e: Event) => {
            console.error("Audio playback error:", e);
        };

        const handleCanPlay = () => {
            console.log("Audio is ready to play");
        };

        audio.addEventListener('error', handleError);
        audio.addEventListener('canplaythrough', handleCanPlay);

        // Attempt playback if state says playing
        if (isPlaying) {
            audio.play().catch((error) => {
                console.warn("Autoplay blocked:", error);
                setIsPlaying(false);
            });
        }

        return () => {
            audio.removeEventListener('error', handleError);
            audio.removeEventListener('canplaythrough', handleCanPlay);
            audio.pause();
            audio.src = "";
            audioRef.current = null;
        };
    }, []);

    // Handle State Changes
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = isMuted ? 0 : volume;

        if (isPlaying) {
            if (audio.paused) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => {
                        console.warn("Playback failed:", e);
                        setIsPlaying(false);
                    });
                }
            }
        } else {
            if (!audio.paused) {
                audio.pause();
            }
        }
    }, [isPlaying, isMuted, volume, setIsPlaying]);

    return null;
};
