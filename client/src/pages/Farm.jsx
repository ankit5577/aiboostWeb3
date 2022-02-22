import React from "react";
import { motion } from "framer-motion";

function Farm() {
  const card = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        delay: 0.1,
      },
    },
  };

  return (
    <div className="flex-1 bg-main">
      <motion.div
        className="flex justify-center pt-10 text-gray-200 text-2xl font-bold"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        Under Construction 🛠️
      </motion.div>
    </div>
  );
}

export default Farm;
