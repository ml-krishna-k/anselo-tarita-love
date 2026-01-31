import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "primary", children, ...props }, ref) => {

        const variants = {
            primary: "bg-rose text-white hover:bg-blush shadow-md",
            secondary: "bg-white text-charcoal hover:bg-pearl shadow-sm",
            outline: "border-2 border-charcoal/20 text-charcoal hover:bg-charcoal/5",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
