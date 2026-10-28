"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import about from "../../assets/about.jpg";

// Stagger container to orchestrate the child animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays each child animation by 0.2s
      delayChildren: 0.1,
    },
  },
};

// Slide-in from the left for the image
const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Slide-in from the right for the text elements
const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function AboutPage() {
  return (
    <>
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
        {/* 
        viewport={{ once: true, amount: 0.3 }} ensures the animation 
        only plays once, and only when 30% of the section is visible.
      */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Container */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={about} 
              alt="About our store"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Text Container */}
          <motion.div className="flex flex-col space-y-6">
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
            >
              ABOUT US
            </motion.h2>

            <motion.div
              variants={textVariants}
              className="w-16 h-1.5 bg-blue-600 rounded-full"
            />

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              At Nestino, we make finding and booking the perfect accommodation simple, convenient, and stress-free. Whether you're planning a family vacation, a business trip, or a relaxing getaway, our platform helps you discover hotels that match your needs, preferences, and budget. We are committed to providing a seamless booking experience built on comfort, reliability, and customer satisfaction. Our goal is to make every journey memorable by connecting travelers with the right places to stay. With Reserve Hotel, your next great travel experience starts here
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default AboutPage;
