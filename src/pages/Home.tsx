import { motion } from "framer-motion";
import { siteConfig } from "../config/site";
import { Button } from "../components/ui/Button";

import { useNavigate } from "react-router-dom";

// Image imports - using absolute paths relative to src or managing via raw string if needed, 
// using string paths directly which Vite resolves if in assets
import heroImage from "../assets/images/gallery/AI pic.JPG";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <div className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Placeholder for background video if desired, but using gradients for now for performance/elegance */}
                    <div className="absolute inset-0 bg-gradient-to-b from-pearl/80 via-pearl/60 to-pearl z-10" />
                    {/* You could put a looping video here if you want: */}
                    {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
                         <source src="/assets/videos/First video of us.MP4" type="video/mp4" />
                     </video> */}
                </div>

                {/* Animated Background Blobs */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-blush/30 rounded-full blur-[100px] animate-float" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-rose/20 rounded-full blur-[120px] animate-float-delayed" />
                    <div className="absolute top-[40%] left-[60%] w-[30vh] h-[30vh] bg-beige/40 rounded-full blur-[80px]" />
                </div>

                {/* Content */}
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-12 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto mb-8"
                    >
                        <img src={heroImage} alt="Anselo & Tarita" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg md:text-xl font-body uppercase tracking-[0.3em] text-charcoal/60"
                        >
                            The Love of a Lifetime
                        </motion.h2>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-charcoal leading-tight tracking-tight">
                            <span className="block">{siteConfig.title.split(" & ")[0]}</span>
                            <span className="block text-4xl md:text-6xl italic font-serif my-2 text-charcoal/40">&</span>
                            <span className="block">{siteConfig.title.split(" & ")[1]}</span>
                        </h1>

                        <p className="text-lg md:text-2xl font-body text-charcoal/70 max-w-lg mx-auto italic font-light">
                            February 19
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="pt-4"
                    >
                        <Button onClick={() => navigate('/timeline')}>
                            Begin Our Journey
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="py-24 px-6 relative z-10 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <QuickLinkCard
                        title="Our Story"
                        icon="📖"
                        desc="Walk through our beautiful journey together."
                        onClick={() => navigate('/timeline')}
                    />
                    <QuickLinkCard
                        title="Gallery"
                        icon="📸"
                        desc="Captured moments of our love."
                        onClick={() => navigate('/gallery')}
                    />
                    <QuickLinkCard
                        title="Reasons"
                        icon="❤️"
                        desc="Why I love you more each day."
                        onClick={() => navigate('/reasons')}
                    />
                    <QuickLinkCard
                        title="Bucket List"
                        icon="✨"
                        desc="Dreams we're chasing together."
                        onClick={() => navigate('/bucket-list')}
                    />
                </div>
            </div>
        </div>
    );
}

const QuickLinkCard = ({ title, icon, desc, onClick }: { title: string, icon: string, desc: string, onClick: () => void }) => (
    <motion.div
        whileHover={{ y: -5 }}
        onClick={onClick}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-charcoal/5 group text-center"
    >
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-heading mb-2">{title}</h3>
        <p className="text-sm text-charcoal/60 leading-relaxed">{desc}</p>
    </motion.div>
);
