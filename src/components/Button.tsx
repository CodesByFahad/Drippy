"use client";

import clsx from "clsx";
import { MouseEvent } from "react";

type Props = {
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonText, className }: Props) {
  const handleScroll = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // ✅ Look for the section with id="flavors"
    const target = document.getElementById("flavors");

    if (target) {
      // Scroll smoothly into view
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("❌ No section found with id='flavors'");
    }
  };

  return (
    <button
      type="button"
      onClick={handleScroll}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className
      )}
    >
      {buttonText || "Shop Now"}
    </button>
  );
}
