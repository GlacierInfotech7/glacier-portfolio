"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export function MotionReveal({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay, ease: [0.2, 0.6, 0.2, 1] }} {...props}>{children}</motion.div>;
}
