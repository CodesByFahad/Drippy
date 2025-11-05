"use client";

import React from "react";

type DrippyLogoProps = {
  className?: string;
};

export default function DrippyLogo({ className }: DrippyLogoProps) {
  return (
    <img
      src="/logo/drippy.svg"
      alt="Drippy Logo"
      className={`w-[166px] h-[87px] transition-all duration-700 ease-out hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,227,71,0.9)] hover:brightness-125 ${className}`}
    />
  );
}
