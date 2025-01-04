"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="flex flex-col group relative cursor-pointer px-2 sm:px-6 bg-[#CFD8E3]/30 backdrop-blur-md items-center rounded-lg sm:rounded-2xl"
        onClick={() => setIsVideoOpen(true)}
      >
        <div className="items-center text-sm sm:text-base mb-2 p-2 sm:p-4 text-center">
          See how we create an autonomous{" "}
          <span className="underline">AI agent</span>
        </div>
        <div className="relative w-full aspect-video">
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            className="rounded-lg sm:rounded-2xl border transition-all duration-200 ease-out group-hover:brightness-[0.8]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/80 pointer-events-none rounded-lg sm:rounded-2xl" />

        <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-lg sm:rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
          <div className="flex size-16 sm:size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
            <div className="relative flex size-12 sm:size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
              <Play
                className="size-6 sm:size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-2 sm:p-4"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative aspect-video w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute -top-8 sm:-top-16 right-0 rounded-full bg-neutral-900/50 p-1.5 sm:p-2 text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
                onClick={() => setIsVideoOpen(false)}
              >
                <XIcon className="size-4 sm:size-5" />
              </motion.button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-lg sm:rounded-2xl border-2 border-white">
                <iframe
                  src={videoSrc}
                  className="size-full rounded-lg sm:rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
