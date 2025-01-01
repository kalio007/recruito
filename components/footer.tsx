"use client";
import React from "react";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* <img
            src="/api/placeholder/32/32"
            alt="Recruito Logo"
            className="w-8 h-8"
          /> */}
          <span className="text-xl font-semibold">Recruito</span>
        </div>

        <div className="flex items-center">
          <div className="flex gap-6 mr-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="text-sm text-gray-600">
            © 2024 Recruito AI . All Rights Reserved.
          </div>

          <div className="flex gap-4 ml-8">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
