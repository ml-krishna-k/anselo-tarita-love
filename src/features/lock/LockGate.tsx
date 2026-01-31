import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLockStore } from "../../store/useLockStore";

const SECRET_PIN = "anstar"; // In a real app, hash this or use env vars. For sentimental offline use, string is fine.

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
        <div className="min-h-screen bg-love-pink flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-rose/20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="z-10 bg-white/40 backdrop-blur-xl border border-white/40 p-8 rounded-3xl w-full max-w-sm text-center shadow-xl"
            >
                <div className="mb-6">
                    <span className="text-4xl">🔒</span>
                </div>

                <h2 className="text-2xl font-heading text-charcoal mb-2">Our Private World</h2>
                <p className="text-charcoal/60 text-sm mb-8 font-body">Enter the secret word to enter.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="password"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Secret Word..."
                        className={`w-full bg-white/50 border ${error ? 'border-red-500 animate-shake' : 'border-white/60'} rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-charcoal/30 transition-all text-center tracking-widest`}
                        autoFocus
                    />

                    <button
                        type="submit"
                        className="w-full bg-charcoal text-white font-bold py-3 rounded-xl hover:bg-charcoal/90 transition-colors shadow-lg shadow-charcoal/10 uppercase tracking-wider text-sm"
                    >
                        Unlock Heart
                    </button>
                </form>
            </motion.div>
        </div>
    );
};
