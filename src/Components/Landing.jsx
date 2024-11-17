"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/Components/ui/button";

import heroImage1 from "../../public/heroImage1.avif";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <main className="flex-grow">
        <section className="container mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center bg-white ">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Welcome to Our Amazing Platform
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover innovative solutions that will transform your business
              and drive growth. Our cutting-edge technology is designed to meet
              your unique needs.
            </p>
            <Button
              variant="outline"
              className="rounded-full px-10 py-6 bg-gray-900 text-white hover:bg-gray-800 transition hover:text-white"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={heroImage1}
              alt="Innovative Solutions"
              width={550}
              height={550}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </section>
      </main> */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center bg-white">
          {/* Animated Text Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Welcome to Our Amazing Platform
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover innovative solutions that will transform your business
              and drive growth. Our cutting-edge technology is designed to meet
              your unique needs.
            </p>

            <Button
              variant="outline"
              className="rounded-full px-10 py-6 bg-gray-900 text-white hover:bg-gray-800 transition hover:text-white"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={heroImage1}
              alt="Innovative Solutions"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
