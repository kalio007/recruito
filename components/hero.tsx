"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // <div className="max-w-4xl mx-auto pb-20 flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
    //   <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center">
    //     Revolutionize Your Hirirng Process with {""}
    //     <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
    //       Recruito AI.
    //     </span>
    //   </p>
    //   <div className="text-base md:text-lg mt-4font-normal inter-var text-center">
    //     <p>
    //       Your fully automated hiring assistant that sources, screens, and
    //       interviews candidtates effortlessly.
    //     </p>
    //   </div>
    //   <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
    //     <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
    //       Start Your Free Trial
    //     </button>
    //     <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
    //       Request a Demo
    //     </button>
    //   </div>
    // </div>
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
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
    </section>
  );
}
