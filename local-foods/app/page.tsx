"use client";
import Link from "next/link"
import { useState, useEffect } from "react";
import AutoTypeSearchLinkComponent from "./components/AutoTypeSearchLinkComponent"

export default function Home() {
  const [homeLocationInput, setHomeLocationInput] = useState("");
  const autoTypeTexts = ["Rome", "New York", "Tokyo", "Buenos Aires", "Istanbul"].map(city => city + " ".repeat(15));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  function typeNextChar() {
    if (currentCharIndex <= autoTypeTexts[currentTextIndex].length) {
      setCurrentCharIndex(prevValue => prevValue + 1);

    } else {
      setCurrentCharIndex(0);
      setCurrentTextIndex((currentTextIndex + 1) % autoTypeTexts.length);
    }
  }
  useEffect(() => {
    const interval = setInterval(typeNextChar, 150);
    return () => clearInterval(interval)
  }, [currentCharIndex])

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-20 	">
      <div className="flex flex-col items-center gap-y-7 text-center">
        <p className="font-sans leading-normal text-6xl font-bold text-transparent bg-clip-text animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
          The new way to find local foods
        </p>
        <p className="font-sans text-xl">
          AI powered tool to help you find local foods and restauants to eat
          them
        </p>
      </div>
      <AutoTypeSearchLinkComponent/>
    </main>
  );
}
