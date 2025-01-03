import React from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <div className="h-80 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center mb-10">
      {/* Background gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Main content container */}
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto p-6 bg-white z-10">
        {/* Image container with fixed dimensions */}
        <div className="relative w-32 h-32 mb-6">
          {/* <Image
            src="/assets/logo.jpg"
            alt="Company Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          /> */}
        </div>

        {/* Text and button section */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-3xl font-bold mb-6">
            Ready to enhance your <br />
            hiring process?
          </p>

          <Button className="rounded-full px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:opacity-90 transition-opacity">
            <Sparkles className="fill-white" />
            <span className="mr-2">Request A Demo</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
