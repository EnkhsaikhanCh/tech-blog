"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Use useEffect to manage the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 rounded-full bg-gray-800 p-2 text-white shadow-lg transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          aria-label="Back to top"
          tabIndex={0}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
