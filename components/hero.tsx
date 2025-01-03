"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/video-demo";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-60 relative mb-20 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: -2,
          backgroundImage: `
            linear-gradient(rgba(209, 213, 219, 0.2) 1px, transparent 2px),
            linear-gradient(90deg, rgba(209, 213, 219, 0.2) 1px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
          backgroundPosition: "center center",
        }}
      />

      {/* Right side gradient */}
      <div
        className="absolute -top-[50%] -right-[25%] w-[100%] h-[200%]"
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
      <div
        className="absolute -top-[50%] -left-[25%] w-[100%] h-[200%]"
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
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, white)",
          zIndex: -1,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 text-center pb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Revolutionize Your Hiring Process with{" "}
          <span className="inline-flex items-center">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Recruito AI
            </span>
            <Sparkles className="text-blue-400 ml-1 fill-blue-500" />
          </span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Your fully automated hiring assistant that sources, screens, and
          interviews candidates effortlessly
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-gray-900 border-2 hover:bg-gray-50"
          >
            Start Your Free Trial
          </Button>
          <Button className="rounded-full px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:opacity-90 transition-opacity">
            <Sparkles className="fill-white" />
            <span className="mr-2">Request A Demo</span>
          </Button>
        </div>
      </div>
      <HeroVideo />
    </section>
  );
}
