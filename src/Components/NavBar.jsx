"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="bg-white shadow-md relative z-20">
        <nav className="container mx-auto px-12 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Logo
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/service" className="text-gray-600 hover:text-gray-900">
              Service
            </Link>
            <Link
              href="/resource"
              className="text-gray-600 hover:text-gray-900"
            >
              Resource
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <button
              aria-label="Search"
              className="text-gray-600 hover:text-gray-900"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-gray-800">Menu</span>
            <button
              onClick={toggleMobileMenu}
              aria-label="Close menu"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto">
            <div className="px-4 py-2 flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/service"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={toggleMobileMenu}
              >
                Service
              </Link>
              <Link
                href="/resource"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={toggleMobileMenu}
              >
                Resource
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <button
                aria-label="Search"
                className="text-gray-600 hover:text-gray-900 py-2 flex items-center"
              >
                <Search className="h-5 w-5 mr-2" /> Search
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
