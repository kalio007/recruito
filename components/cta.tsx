"use cleint";

import React from "react";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black px-10 py-10">
        <Image
          src="/assets/kalio.jpg"
          width={500}
          height={500}
          alt=""
          className="w-full h-full object-cover"
        />
        <p>Ready to enhance your hiring process ?</p>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Request a Demo
        </button>
      </div>
    </div>
  );
}
