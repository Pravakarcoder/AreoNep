"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const Working = () => {
  const workingMethod = [
    {
      step: 1,
      title: "Consultation",
      description: "We discuss your needs and goals",
    },
    {
      step: 2,
      title: "Planning",
      description: "We create a detailed project roadmap",
    },
    {
      step: 3,
      title: "Development",
      description: "Our team brings your vision to life",
    },
    {
      step: 4,
      title: "Testing",
      description: "Rigorous quality assurance process",
    },
    { step: 5, title: "Deployment", description: "Your solution goes live" },
  ];

  // Create animations outside of the callback
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section>
      {/* Working Method Section */}
      <div className="py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Working Method
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2"></div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                {workingMethod.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center mb-8 md:mb-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-center max-w-xs">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CEO Quote Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="bg-gray-100 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-gray-400 mb-4 mx-auto"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="..." />
            </svg>
            <blockquote className="text-2xl font-semibold text-gray-900 mb-4">
              {` "Our mission is to empower businesses with innovative technology
              solutions that drive growth and success."`}
            </blockquote>
            <div className="font-medium text-gray-700">
              <p>Jane Doe</p>
              <p>CEO, Our Amazing Company</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Get Help Now Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="py-16 bg-blue-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Your Project?
          </h2>
          <p className="text-xl mb-8">
            Our team of experts is ready to assist you. Get in touch today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            Get Help Now
            <MessageCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Working;
