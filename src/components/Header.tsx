import React from "react";
import  DrippyLogo from "@/components/DrippyLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <DrippyLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
