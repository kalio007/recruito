"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import MobileNavbar from "./mobile-navbar";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "Features", href: "#features-section", active: false },
    { label: "Pricing", href: "/pricing", active: false },
    { label: "Resource", href: "/resource", active: false },
  ];

  return (
    <div className="fixed w-full px-4 pt-4 z-50">
      <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg">
        <div className="flex items-center justify-between px-2 py-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Recruito" width={150} height={150} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  item.active ? "text-blue-600 font-medium" : "text-gray-600"
                } hover:text-blue-700 transition-colors flex items-center gap-1`}
              >
                {item.label}
                {item.active && (
                  <span className="text-blue-400 text-xs">*</span>
                )}
              </Link>
            ))}
          </div>

          <Button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full px-6 hover:opacity-90 transition-opacity hidden md:block">
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="block size-6" aria-hidden="true" />
            ) : (
              <Menu className="block size-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNavbar
          navItems={navItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </nav>
    </div>
  );
}
