import { TimelineContainer } from "./components/TimelineContainer";
import { timelineData } from "../../data/timeline";
import { siteConfig } from "../../config/site";
import { motion } from "framer-motion";

export default function TimelinePage() {
    return (
        <div className="min-h-screen pb-20">
            <header className="py-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-heading text-charcoal mb-4">Our Journey</h1>
                    <p className="text-lg font-body text-charcoal/60 uppercase tracking-widest">
                        {siteConfig.startDate} — {siteConfig.endDate}
                    </p>
                </motion.div>
            </header>

            <TimelineContainer events={timelineData} />
        </div>
    );
}
