"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, Megaphone, TrendingUp, Mail, PenTool, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "SEO Optimization",
    description: "Improve search rankings with keyword research, backlinking, and on-page optimizations.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Grow your audience with targeted campaigns on Facebook, Instagram, LinkedIn, and more.",
    icon: Megaphone,
  },
  {
    title: "Pay-Per-Click (PPC)",
    description: "Maximize ROI with high-converting ads on Google, Facebook, and other platforms.",
    icon: TrendingUp,
  },
  {
    title: "Email Marketing",
    description: "Increase conversions with personalized email sequences and automation.",
    icon: Mail,
  },
  {
    title: "Content Marketing",
    description: "Attract, engage, and retain customers through high-quality blog posts, videos, and infographics.",
    icon: PenTool,
  },
]

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO improvements typically show results within 3-6 months, depending on competition and strategy.",
  },
  {
    question: "What is the best platform for running ads?",
    answer: "It depends on your audience. Google Ads is great for search intent, while Facebook/Instagram is ideal for brand awareness.",
  },
  {
    question: "How does content marketing help my business?",
    answer: "Quality content establishes trust, improves SEO, and drives organic traffic to your website.",
  },
]

export default function DigitalMarketing() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-blue-600">Grow Your Business with Digital Marketing</h1>
            <p className="text-gray-600 mt-4 text-lg">
              From SEO to social media, we provide strategies that drive real results and maximize your online presence.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/digital.jpg"
              alt="Digital Marketing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Feature List Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">Our Digital Marketing Services</h2>
          <p className="text-center text-gray-600 mt-4">Tailored strategies for different industries and business goals.</p>
          
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <feature.icon className="h-10 w-10 text-blue-500" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Study / Example Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-blue-100 p-10 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-blue-700 text-center">How Digital Marketing Helps Businesses</h2>
          <p className="text-center text-gray-700 mt-4">
            A real-world example: A local e-commerce store increased its sales by 300% using SEO and paid advertising.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg">
                See More Success Stories
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-500" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                </div>
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
          <h2 className="text-3xl font-bold">Start Your Digital Growth Today!</h2>
          <p className="text-gray-200 mt-4 text-lg">
            Let’s discuss your goals and create a custom strategy to boost your business.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 font-semibold px-6 py-3 text-lg rounded-lg hover:bg-gray-200">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
