"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 py-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600">Get in Touch with Us</h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Whether you have a question or want to start a project, we’d love to hear from you. Reach out today!
        </p>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/contact.jpg" 
            alt="Contact Us" 
            width={500} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Input placeholder="Subject" className="w-full" />
            <Textarea placeholder="Your Message" className="w-full h-32" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-2">Send Message</Button>
          </form>
        </motion.div>
      </div>

      {/* Contact Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <h3 className="text-2xl font-semibold text-blue-700">Our Contact Details</h3>
        <div className="flex justify-center gap-8 mt-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="text-blue-500" /> info@prefercoding.com
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="text-blue-500" /> +123 456 7890
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="text-blue-500" /> New York, USA
          </div>
        </div>
      </motion.div>
    </div>
  );
}
