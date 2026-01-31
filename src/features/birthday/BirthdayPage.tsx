import { BirthdayHero } from "./components/BirthdayHero";
import { BirthdayMessage } from "./components/BirthdayMessage";
import { ConfettiLayer } from "./components/ConfettiLayer";


export default function BirthdayPage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
            {/* Cinematic Background Layer */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-[#1a0505] to-[#2d0a0a]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-80" />

                {/* Animated Particles/Stars could go here */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30" />
            </div>

            <ConfettiLayer />

            <main className="relative z-10 pt-20">
                <BirthdayHero />
                <BirthdayMessage />
            </main>
        </div>
    );
}
