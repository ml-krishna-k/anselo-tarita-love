import { create } from "zustand";
import { persist } from "zustand/middleware";

type TrackMood = "intro" | "college" | "separation" | "second-chance" | "proposal" | "birthday";

interface MusicState {
    isPlaying: boolean;
    isMuted: boolean;
    volume: number;
    currentTrack: TrackMood | null;
    setIsPlaying: (playing: boolean) => void;
    toggleMute: () => void;
    setVolume: (volume: number) => void;
    playTrack: (track: TrackMood) => void;
}

export const useMusicStore = create<MusicState>()(
    persist(
        (set) => ({
            isPlaying: false, // Default to false due to autoplay policies
            isMuted: false,
            volume: 0.5,
            currentTrack: "intro",
            setIsPlaying: (playing) => set({ isPlaying: playing }),
            toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
            setVolume: (volume) => set({ volume }),
            playTrack: (track) => set({ currentTrack: track }),
        }),
        {
            name: "music-storage",
            partialize: (state) => ({ volume: state.volume, isMuted: state.isMuted }), // Only persist volume/mute
        }
    )
);
