import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLockStore } from "../../store/useLockStore";

const SECRET_PIN = "Babygirl"; // In a real app, hash this or use env vars. For sentimental offline use, string is fine.

export const LockGate = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const unlock = useLockStore((state) => state.unlock);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.toLowerCase() === SECRET_PIN.toLowerCase()) {
            unlock();
            navigate("/"); // Go home on unlock
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
            setInput("");
        }
    };

    return (
        <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-[#1a0505] to-[#2d0a0a]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-80" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-sm text-center shadow-2xl"
            >
                <div className="mb-6">
                    <span className="text-4xl">🔒</span>
                </div>

                <h2 className="text-2xl font-heading text-white mb-2">Our Private World</h2>
                <p className="text-white/60 text-sm mb-8 font-body">Enter the secret word to enter.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="password"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Secret Word..."
                        className={`w-full bg-white/10 border ${error ? 'border-red-500 animate-shake' : 'border-white/20'} rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-rose transition-all text-center tracking-widest`}
                        autoFocus
                    />

                    <button
                        type="submit"
                        className="w-full bg-rose text-white font-bold py-3 rounded-xl hover:bg-rose/90 transition-colors shadow-lg shadow-rose/20 uppercase tracking-wider text-sm"
                    >
                        Unlock Heart
                    </button>
                </form>
            </motion.div>
        </div>
    );
};
