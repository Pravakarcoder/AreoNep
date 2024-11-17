"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Component for individual service cards
const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
    >
      <div className="p-6">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <Link
          href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Create stunning, responsive websites tailored to your brand and optimized for performance.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Build powerful, user-friendly mobile applications for iOS and Android platforms.",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage cloud technologies to scale your business and improve operational efficiency.",
      icon: "☁️",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Implement cutting-edge AI and ML solutions to drive innovation and automate processes.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      description:
        "Create stunning, responsive websites tailored to your brand and optimized for performance.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Build powerful, user-friendly mobile applications for iOS and Android platforms.",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage cloud technologies to scale your business and improve operational efficiency.",
      icon: "☁️",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Implement cutting-edge AI and ML solutions to drive innovation and automate processes.",
      icon: "🤖",
    },
  ];
  return (
    <section className="bg-gray-100 py-16 rounded-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
