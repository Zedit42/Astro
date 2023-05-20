import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const BookButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => setIsHovered(!isHovered);

  const hoverStyles = {
    scale: 1.05,
    rotate: -5,
    transition: { duration: 0.2 },
  };



  return (
    <motion.button
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      whileHover={hoverStyles}
      whileTap={{ scale: 0.9 }}
      className="bg-white hover:bg-black text-black font-bold py-2 px-4 hover:text-white  rounded"
    >
      <div className="relative">

        <div className="relative text-3xl font-thin z-10">{isHovered ? "SHOOT SOME DAMN MONSTER" : "PLAY THE GAME"}</div>
      </div>
    </motion.button>
  );
};

export default BookButton;
