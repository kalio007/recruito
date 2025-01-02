"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/video-demo";
import Hero_background from "@/assets/hero_background.png";

export default function Hero() {
  return (
    <section className="pt-40 relative">
      <div
        className="absolute top-0 left-0 w-full h-3/4 bg-cover"
        style={{
          backgroundImage: `url(${Hero_background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div className="max-w-4xl mx-auto px-4 text-center pb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Revolutionize Your Hiring Process with{" "}
          <span className="inline-flex items-center">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Recruito AI
            </span>
            <span className="text-blue-400 ml-1">✨</span>
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
            <span className="mr-2">Request A Demo</span>✨
          </Button>
        </div>
      </div>
      <HeroVideo />
    </section>
  );
}
