"use client";

import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    },
};

const Transition = ({ children }) => {
  return (
        <div>
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[9999] bg-[#2e2257]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[9998] bg-[#3b2d71]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[9997] bg-[#4b3792]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            />
            { children }
        </div>
  );
};

export default Transition;