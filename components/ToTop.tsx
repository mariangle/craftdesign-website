"use client"

import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const ToTop = () => {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowToTop(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 bg-primary hover:bg-blue-800 text-white rounded-full p-2 cursor-pointer shadow-md transition ${
        showToTop ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FiChevronUp size={24} />
    </div>
  );
};

export default ToTop;
