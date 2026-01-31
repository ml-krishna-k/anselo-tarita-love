import { useEffect, useRef } from "react";
import { Howl } from "howler";
import { useMusicStore } from "../../store/useMusicStore";
import { useLocation } from "react-router-dom";

const TRACKS = {
    intro: "/music/intro-theme.mp3",
    college: "/music/college-days.mp3",
    separation: "/music/separation.mp3",
    "second-chance": "/music/second-chance.mp3",
    proposal: "/music/proposal.mp3",
    birthday: "/music/birthday.mp3",
};

export const MusicController = () => {
    const { isPlaying, isMuted, volume, currentTrack, playTrack, setIsPlaying } = useMusicStore();
    const soundRef = useRef<Howl | null>(null);
    const location = useLocation();

    // Auto-route mapping
    useEffect(() => {
        let targetTrack: keyof typeof TRACKS = "intro";

        if (location.pathname === "/") targetTrack = "intro";
        if (location.pathname === "/gallery") targetTrack = "college";
        if (location.pathname === "/birthday") targetTrack = "birthday";

        // Timeline logic is handled in TimelineContainer usually, but we can set default here
        if (location.pathname === "/timeline") targetTrack = "second-chance";
        if (location.pathname === "/reasons") targetTrack = "proposal";
        if (location.pathname === "/bucket-list") targetTrack = "college";

        if (currentTrack !== targetTrack) {
            playTrack(targetTrack);
        }
    }, [location.pathname, playTrack, currentTrack]);

    // Handle Audio Playback
    useEffect(() => {
        if (!currentTrack) return;

        // Stop previous track if exists
        if (soundRef.current) {
            soundRef.current.fade(volume, 0, 1000);
            setTimeout(() => {
                soundRef.current?.unload();
            }, 1000);
        }

        // Initialize new track
        const sound = new Howl({
            src: [TRACKS[currentTrack]],
            html5: true, // Force HTML5 Audio to stream huge files
            loop: true,
            volume: 0,
            autoplay: isPlaying,
            onplay: () => {
                setIsPlaying(true);
                sound.fade(0, volume, 2000);
            }
        });

        soundRef.current = sound;

        if (isPlaying && !isMuted) {
            sound.play();
        }

        return () => {
            sound.unload();
        };
    }, [currentTrack]);

    // Handle Volume / Mute / Play changes
    useEffect(() => {
        if (soundRef.current) {
            soundRef.current.volume(isMuted ? 0 : volume);
            if (isPlaying && !soundRef.current.playing()) {
                soundRef.current.play();
            } else if (!isPlaying && soundRef.current.playing()) {
                soundRef.current.pause();
            }
        }
    }, [volume, isMuted, isPlaying]);

    return null; // Logic only renderer
};
