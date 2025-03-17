"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Code, Brain, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
const services = [
  {
    title: "Software Services",
    description: "Custom software solutions for businesses of all sizes",
    icon: Code,
    href: "/services/software-services",
  },
  {
    title: "Software Training",
    description: "Full-stack development with modern technologies",
    icon: Code,
    href: "/services/software-training",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing for the digital age",
    icon: Brain,
    href: "/services/digital-marketing",
  },
  {
    title: "Prefer Home Tuitions",
    description: "Personalized learning experience at your convenience",
    icon: Home,
    href: "/services/prefer-home-tuitions",
  },
];

export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed border top-0 z-50 w-full transition-all duration-300 ${
        scrolling
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500">
          PreferCoding
        </Link>

        {/* Right side - Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-base font-medium px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              Services
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>

            {isServicesOpen && (
              <div className="absolute right-0 mt-2 w-[380px] bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-4">
                <div className="grid gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <service.icon className="h-5 w-5 text-blue-500 mt-1 shrink-0" />
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <p className="text-sm text-gray-600 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-base font-medium px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
            <Link
            href="/contact"
            className="text-base font-medium px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
            Contact
            </Link>
            <SignedOut>
              <div className="text-base font-medium px-3 py-2 border bg-blue-600 text-white rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">
              <SignInButton />

              </div>
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
          {/* <Link
            href="/login"
            className="text-base font-medium px-3 py-2 border bg-blue-600 text-white rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Login
          </Link> */}
        </nav>

        {/* Mobile menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 border-none"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col h-full">
              <nav className="flex-1 overflow-auto py-4">
                <div className="flex flex-col space-y-1">
                  <div className="px-4 py-2">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      Services
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <service.icon className="h-5 w-5 text-blue-500 mt-1 shrink-0" />
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <p className="text-sm text-gray-600 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/about"
                    className="text-base font-medium py-2 px-4 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-base font-medium py-2 px-4 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              <SignedOut>
              <div className="text-base font-medium px-3 py-2 border bg-blue-600 text-white rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">
              <SignInButton />

              </div>
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
