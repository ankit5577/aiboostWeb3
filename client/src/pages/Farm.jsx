import React from "react";
import { motion } from "framer-motion";
// import soon;

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
    <div className="flex-1 bg-main bg-cover bg-fixed">
      <motion.div
        className="will-change-scroll h-[40rem] bg-soon bg-center bg-no-repeat"
        variants={card}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}

export default Farm;
