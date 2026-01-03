import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  blur?: boolean;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  blur = true,
  className = ""
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: blur ? "blur(10px)" : "blur(0px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRevealStagger = ({
  children,
  staggerDelay = 0.1,
  blur = true,
  className = ""
}: {
  children: ReactNode[],
  staggerDelay?: number,
  blur?: boolean,
  className?: string
}) => {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          delay={index * staggerDelay}
          blur={blur}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
};
