import { useEffect, useRef } from "react";
import { useMusicStore } from "../../store/useMusicStore";
import bgMusic from "../../assets/Music/audio.mp4";

export const MusicController = () => {
    const { isPlaying, isMuted, volume, setIsPlaying } = useMusicStore();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize Audio
    useEffect(() => {
        const audio = new Audio(bgMusic);
        audio.loop = true;
        audio.volume = isMuted ? 0 : volume;
        audioRef.current = audio;

        // Attempt playback if state says playing
        if (isPlaying) {
            audio.play().catch(() => {
                // Autoplay blocked
                setIsPlaying(false);
            });
        }

        return () => {
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

        if (isPlaying && audio.paused) {
            audio.play().catch(e => {
                console.warn("Autoplay blocked or playback failed:", e);
                setIsPlaying(false);
            });
        } else if (!isPlaying && !audio.paused) {
            audio.pause();
        }
    }, [isPlaying, isMuted, volume, setIsPlaying]);

    return null;
};
