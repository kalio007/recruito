"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HoveredLink,
  Menu,
  MenuItem,
  //   ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    // <div
    //   className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    // >
    //   <Menu setActive={setActive}>
    //     <MenuItem setActive={setActive} active={active} item="Services">
    //       {/* <div className="flex flex-col space-y-4 text-sm">
    //         <HoveredLink href="/web-dev">Web Development</HoveredLink>
    //         <HoveredLink href="/interface-design">Interface Design</HoveredLink>
    //         <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
    //         <HoveredLink href="/branding">Branding</HoveredLink>
    //       </div> */}
    //     </MenuItem>
    //     <MenuItem setActive={setActive} active={active} item="Products">
    //       {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4">
    //         <ProductItem
    //           title="Algochurn"
    //           href="https://algochurn.com"
    //           src="https://assets.aceternity.com/demos/algochurn.webp"
    //           description="Prepare for tech interviews like never before."
    //         />
    //         <ProductItem
    //           title="Tailwind Master Kit"
    //           href="https://tailwindmasterkit.com"
    //           src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
    //           description="Production ready Tailwind css components for your next project"
    //         />
    //         <ProductItem
    //           title="Moonbeam"
    //           href="https://gomoonbeam.com"
    //           src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
    //           description="Never write from scratch again. Go from idea to blog in minutes."
    //         />
    //         <ProductItem
    //           title="Rogue"
    //           href="https://userogue.com"
    //           src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
    //           description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
    //         />
    //       </div> */}
    //     </MenuItem>
    //     <MenuItem setActive={setActive} active={active} item="Pricing">
    //       <div className="flex flex-col space-y-4 text-sm">
    //         <HoveredLink href="/hobby">Hobby</HoveredLink>
    //         <HoveredLink href="/individual">Individual</HoveredLink>
    //         <HoveredLink href="/team">Team</HoveredLink>
    //         <HoveredLink href="/enterprise">Enterprise</HoveredLink>
    //       </div>
    //     </MenuItem>
    //   </Menu>
    // </div>
    <div className=" fixed w-full px-4 pt-4 z-50">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/api/placeholder/32/32"
              alt="Recruito Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-gray-900">
              Recruito
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              Home
              <span className="text-blue-400 text-xs">*</span>
            </Link>
            <Link
              href="/features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/resource"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Resource
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full px-6 hover:opacity-90 transition-opacity">
            Contact Us
          </Button>
        </div>
      </nav>
    </div>
  );
}
