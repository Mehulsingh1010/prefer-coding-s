"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "React", icon: "/react.png" },
  { name: "Node.js", icon: "/njs.png" },
  { name: "Python", icon: "/python.jpeg" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "TypeScript", icon: "/ts.png" },
  { name: "Docker", icon: "/docker.webp" },
  { name: "AWS", icon: "/aws.jpeg" },
  { name: "GraphQL", icon: "/gql.jpg" },
]

const zoomInVariants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.2 },
}

export function TechStack() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Master the Latest Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="mb-4"
                variants={zoomInVariants}
                initial="initial"
                whileHover="whileHover"
              >
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  width={60} 
                  height={60} 
                  unoptimized
                />
              </motion.div>
              <p className="text-lg font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}