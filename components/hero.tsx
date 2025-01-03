"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/video-demo";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 sm:pt-28 md:pt-40 lg:pt-60 relative mb-8 sm:mb-12 md:mb-16 lg:mb-20 overflow-hidden">
      {/* Grid Background - Responsive grid size */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: -2,
          backgroundImage: `
            linear-gradient(rgba(209, 213, 219, 0.2) 1px, transparent 2px),
            linear-gradient(90deg, rgba(209, 213, 219, 0.2) 1px, transparent 2px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: "center center",
        }}
      />

      {/* Right side gradient - Adjusted for mobile */}
      <div
        className="absolute -top-[25%] sm:-top-[35%] md:-top-[50%] -right-[25%] w-[100%] h-[150%] sm:h-[175%] md:h-[200%]"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(253, 242, 248, 0.5) 0%,
              rgba(253, 242, 248, 0.3) 25%,
              rgba(253, 242, 248, 0.1) 50%,
              transparent 70%
            )
          `,
          zIndex: -1,
        }}
      />

      {/* Left side gradient - Adjusted for mobile */}
      <div
        className="absolute -top-[25%] sm:-top-[35%] md:-top-[50%] -left-[25%] w-[100%] h-[150%] sm:h-[175%] md:h-[200%]"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(239, 246, 255, 0.5) 0%,
              rgba(239, 246, 255, 0.3) 25%,
              rgba(239, 246, 255, 0.1) 50%,
              transparent 70%
            )
          `,
          zIndex: -1,
        }}
      />

      {/* Bottom fade gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, white)",
          zIndex: -1,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center pb-8 sm:pb-12  md:pb-16 lg:pb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
          Revolutionize Your Hiring Process with{" "}
          <span className="inline-flex items-center">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Recruito AI
            </span>
            <Sparkles className="text-blue-400 ml-1 fill-blue-500 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-6">
          Your fully automated hiring assistant that sources, screens, and
          interviews candidates effortlessly
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <Button
            variant="outline"
            className="w-full sm:w-auto rounded-full px-4 sm:px-6 py-2 text-gray-900 border-2 hover:bg-gray-50 text-sm sm:text-base"
          >
            Start Your Free Trial
          </Button>
          <Button className="w-full sm:w-auto rounded-full px-4 sm:px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:opacity-90 transition-opacity text-sm sm:text-base">
            <Sparkles className="fill-white w-4 h-4 sm:w-5 sm:h-5" />
            <span className="ml-2">Request A Demo</span>
          </Button>
        </div>
      </div>

      <div className="px-4 sm:px-0">
        <HeroVideo />
      </div>
    </section>
  );
}
