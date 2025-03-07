"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Smartphone, Database, Workflow, Rocket, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Development",
    description: "We build high-performance, scalable, and visually appealing websites using modern frameworks like React, Next.js, and Tailwind CSS.",
    benefits: [
      "Custom-built websites tailored to your needs",
      "Responsive and mobile-friendly designs",
      "SEO-optimized and high-speed performance",
    ],
    icon: Code,
    image: "/web.png",
  },
  {
    title: "App Development",
    description: "From idea to launch, we develop feature-rich mobile applications for iOS and Android using Flutter, React Native, and native technologies.",
    benefits: [
      "Cross-platform compatibility (iOS & Android)",
      "User-friendly and engaging UI/UX",
      "Scalable and secure app architecture",
    ],
    icon: Smartphone,
    image: "/app.png",
  },
  {
    title: "Other Technologies",
    description: "We specialize in AI, Blockchain, Cloud Computing, IoT, and more. If you have an idea, we have the expertise to bring it to life.",
    benefits: [
      "AI-driven automation and analytics",
      "Blockchain-powered secure transactions",
      "Cloud-based scalable architectures",
    ],
    icon: Database,
    image: "/tech.jpeg",
  },
]

const processSteps = [
  { title: "Understanding Your Requirements", description: "We start with a deep dive into your project needs, goals, and expectations." },
  { title: "Planning & Strategy", description: "We create a detailed roadmap, outlining the best approach and technology stack." },
  { title: "Development & Testing", description: "Our expert developers build your product with agile development and rigorous testing." },
  { title: "Launch & Support", description: "We deploy your solution and provide continuous support to ensure long-term success." },
]

const testimonials = [
  { name: "John Doe", feedback: "PreferCoding transformed our business with an amazing web app. Their expertise and dedication are unmatched!" },
  { name: "Sarah Lee", feedback: "Highly professional and efficient. They built our mobile app exactly how we envisioned it!" },
]

export default function SoftwareSolutions() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-600">End-to-End Software Solutions</h1>
          <p className="text-gray-600 mt-4 text-lg">
            We provide high-quality, scalable, and innovative software solutions tailored to your business needs. From startups to enterprises, we help you build the future.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <Image src={service.image} alt={service.title} width={290} height={200} className="rounded-lg object-cover w-full" />
              <div className="mt-4 flex items-center gap-3">
                <service.icon className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <ul className="mt-3 text-gray-700">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* How We Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-blue-100 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Our Process</h2>
          <p className="text-center text-gray-700 mt-4">A structured and efficient approach to delivering high-quality software solutions.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">What Our Clients Say</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Users className="h-10 w-10 text-blue-500 mb-4" />
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-blue-600 p-10 rounded-2xl text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white">Let’s Build Something Amazing Together</h2>
          <p className="text-gray-200 mt-4 text-lg">
            We’re ready to bring your vision to life with cutting-edge technology and expert craftsmanship.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 font-semibold px-6 py-3 text-lg rounded-lg hover:bg-gray-200">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
