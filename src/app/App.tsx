import { Outlet, Link } from "react-router-dom";
import { MusicToggle } from "../components/ui/MusicToggle";
import { MusicController } from "../features/music/MusicController";

export default function App() {
    return (
        <div className="min-h-screen bg-pearl text-charcoal font-body selection:bg-rose selection:text-white flex flex-col relative">
            <div className="bg-noise" />
            <MusicController />
            <MusicToggle />
            <nav className="p-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 text-xs md:text-sm uppercase tracking-[0.2em] text-charcoal/60 font-medium relative z-10">
                <Link to="/" className="hover:text-charcoal hover:scale-105 transition-all duration-300">Home</Link>
                <Link to="/timeline" className="hover:text-charcoal hover:scale-105 transition-all duration-300">Timeline</Link>
                <Link to="/gallery" className="hover:text-charcoal hover:scale-105 transition-all duration-300">Gallery</Link>
                <Link to="/reasons" className="hover:text-charcoal hover:scale-105 transition-all duration-300">Reasons</Link>
                <Link to="/bucket-list" className="hover:text-charcoal hover:scale-105 transition-all duration-300">Bucket List</Link>
                <Link to="/birthday" className="hover:text-charcoal hover:scale-105 transition-all duration-300">Birthday</Link>
                <Link to="/guestbook" className="hover:text-charcoal hover:scale-105 transition-all duration-300">Notes</Link>
            </nav>

            <main className="flex-grow w-full max-w-7xl mx-auto">
                <Outlet />
            </main>

            <footer className="p-6 text-center text-charcoal/30 text-xs uppercase tracking-widest">
                © 2024 Anselo & Tarita
            </footer>
        </div>
    );
}
