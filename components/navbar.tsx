"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  //   const [active, setActive] = useState<string | null>(null);
  return (
    <div className=" fixed w-full px-4 pt-4 z-50">
      <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-sm">
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
