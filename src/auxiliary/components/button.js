"use client";
import { motion } from "framer-motion";

export default function Button({ text, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-design-white p-[12px] rounded-[8px] bg-design-grey-700 w-full text-preset2-bold hover:text-design-grey-700"
      whileHover={{
        backgroundColor: "#c4f82a",
        scale: 1.05,
        transition: { type: "spring", mass: 1, stiffness: 80, damping: 20 },
      }}
    >
      <button className="w-full h-full flex justify-center items-center cursor-pointer">
        {text}
      </button>
    </motion.a>
  );
}
