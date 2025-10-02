"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  fontSize?: string;
}

<<<<<<< HEAD
export default function RotatingText({
  texts,
  fontSize = "1.75rem",
}: RotatingTextProps) {
=======
export default function RotatingText({ texts, fontSize = "1.75rem" }: RotatingTextProps) {
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

<<<<<<< HEAD
  const currentText = texts[index].split(" ");

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex flex-wrap justify-left sm:justify-start text-center sm:text-left"
=======
  const currentText = texts[index].split("");

  return (
    <div className="relative flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex"
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
<<<<<<< HEAD
          {currentText.map((word, i) => (
            <motion.span
              key={i}
              className="text-red-500 font-bold sm:font-normal inline-block mr-2"
              style={{ fontSize }}
=======
          {currentText.map((char, i) => (
            <motion.span
              key={i}
              className="text-red-500 font-bold"
              style={{ fontSize, display: "inline-block" }}
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
<<<<<<< HEAD
                delay: i * 0.1,
              }}
            >
              {word}
=======
                delay: i * 0.05, // stagger effect
              }}
            >
              {char === " " ? "\u00A0" : char}
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
