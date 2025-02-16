"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "React", icon: "/tech/react.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "JavaScript", icon: "/tech/javascript.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "AWS", icon: "/tech/aws.svg" },
  { name: "GraphQL", icon: "/tech/graphql.svg" },
]

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
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} width={60} height={60} />
              </div>
              <p className="text-lg font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

