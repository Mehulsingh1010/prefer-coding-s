"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Web Development",
    description: "Full stack development with modern technologies",
  },
  {
    title: "Digital Marketing",
    description: "Master digital marketing strategies and tools",
  },
  {
    title: "HR Management",
    description: "Learn modern HR practices and strategies",
  },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-md">
      <div className="container mx-auto flex h-16 items-center px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-primary">
          PreferCoding
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-medium">Courses</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-lg w-[320px]">
                  <ul className="grid gap-4 p-4">
                    {courses.map((course) => (
                      <li key={course.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="block p-3 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-md font-semibold">{course.title}</div>
                            <p className="text-sm text-muted-foreground">{course.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="text-lg font-medium hover:text-primary">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className="text-lg font-medium hover:text-primary">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="w-full border-t pt-4">
                <Button variant="ghost" asChild>
                  <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button className="px-6 py-2 text-lg" asChild>
                  <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
