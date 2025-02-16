"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

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
]

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-md">
      <div className="container mx-auto flex h-16 items-center px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-primary">
          PreferCoding
        </Link>

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

        <div className="ml-auto md:ml-6 flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button className="px-6 py-2 text-lg" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
