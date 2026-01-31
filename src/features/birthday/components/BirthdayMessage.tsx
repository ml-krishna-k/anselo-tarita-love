import { motion } from "framer-motion";
import collage1 from "../../../assets/images/gallery/photocollage 1.JPG";
import collage2 from "../../../assets/images/gallery/photocollage2.JPG";
import collage3 from "../../../assets/images/gallery/photocollage3.JPG";

export const BirthdayMessage = () => {
    const messages = [
        "To the love of my life,",
        "You are my <span class='text-rose font-bold drop-shadow-sm'>Babygirl</span>,",
        "My <span class='text-rose font-bold drop-shadow-sm'>Rockstar Barbie</span>,",
        "And the most beautiful soul inside and out.",
        "Every moment with you is a celebration.",
        "I love you forever ♾️"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1.5,
                delayChildren: 2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 pb-24 relative z-10 flex flex-col items-center gap-12">

            {/* Collage Section 1 */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            >
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    <img src={collage1} alt="Collage 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl md:-translate-y-8 z-10 hover:scale-105 transition-transform duration-500">
                    <img src={collage2} alt="Collage 2" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                    <img src={collage3} alt="Collage 3" className="w-full h-full object-cover" />
                </div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_40px_rgba(0,0,0,0.2)] max-w-3xl w-full"
            >
                {messages.map((line, index) => (
                    <motion.p
                        key={index}
                        variants={itemVariants}
                        className="text-xl md:text-3xl font-body text-white/90 leading-relaxed mb-6 last:mb-0 last:text-4xl last:font-heading last:mt-8"
                        dangerouslySetInnerHTML={{ __html: line }}
                    />
                ))}
            </motion.div>
        </div>
    );
};
