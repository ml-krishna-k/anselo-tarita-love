import { motion } from "framer-motion";
import { useState } from "react";

interface GuestMessage {
    id: string;
    author: "Anselo" | "Tarita";
    text: string;
    date: string;
}

// Mock initial data - simply local state for now
const INITIAL_MESSAGES: GuestMessage[] = [
    { id: "1", author: "Anselo", text: "I love you more than words can say. Welcome to our digital home.", date: "2026-02-14" }
];

export default function GuestbookPage() {
    const [messages, setMessages] = useState<GuestMessage[]>(() => {
        const saved = localStorage.getItem("guestbook_messages");
        return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    });
    const [newMessage, setNewMessage] = useState("");
    const [author, setAuthor] = useState<"Anselo" | "Tarita">("Tarita");

    const saveMessages = (msgs: GuestMessage[]) => {
        setMessages(msgs);
        localStorage.setItem("guestbook_messages", JSON.stringify(msgs));
    };

    const handlePost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const msg: GuestMessage = {
            id: Date.now().toString(),
            author,
            text: newMessage,
            date: new Date().toISOString().split('T')[0]
        };

        saveMessages([msg, ...messages]);
        setNewMessage("");
    };

    return (
        <div className="min-h-screen pt-24 px-4 pb-20 max-w-2xl mx-auto">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-heading text-charcoal mb-4">Love Notes</h1>
                <p className="text-charcoal/60 uppercase tracking-widest text-xs">Our Private Guestbook</p>
            </header>

            <form onSubmit={handlePost} className="mb-12 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white shadow-sm">
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Write a love note..."
                    className="w-full bg-transparent border-b border-charcoal/10 focus:border-rose outline-none p-2 min-h-[80px] text-charcoal/80 font-body mb-4 resize-none"
                />
                <div className="flex justify-between items-center">
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value as any)}
                        className="bg-transparent text-xs uppercase tracking-wider text-charcoal/60 outline-none cursor-pointer"
                    >
                        <option value="Tarita">Tarita</option>
                        <option value="Anselo">Anselo</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-rose text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-rose/90 transition-all shadow-md shadow-rose/20"
                    >
                        Post Note
                    </button>
                </div>
            </form>

            <div className="space-y-6">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
                    >
                        <div className={`absolute top-0 left-0 w-1 h-full ${msg.author === "Anselo" ? "bg-charcoal" : "bg-rose"}`} />
                        <p className="text-charcoal/80 font-body mb-4 whitespace-pre-wrap">{msg.text}</p>
                        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-charcoal/40">
                            <span className="font-bold text-charcoal/60">{msg.author}</span>
                            <span>{msg.date}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
