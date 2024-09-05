"use client";

import Image from "next/image";
import { motion } from "framer-motion"; 

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-700 via-blue-500 to-purple-600 animate-bgMove overflow-hidden">
      {/* Top Navigation with Logo and Buttons */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-white shadow-lg">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-extrabold text-gray-800">Stocks for Noobs</h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
            Get Started
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
            Log In
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center text-white mt-32 md:mt-48 px-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stocks Made Simple
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-3xl font-light mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          You're One Program Away from Getting It All!
        </motion.p>

        {/* Image of Stock Market Setup */}
        <motion.div
          className="relative w-full max-w-sm md:max-w-lg lg:max-w-xl"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/stock.png"
            alt="Stock Market Setup"
            width={500}
            height={500}
            className="transition-transform duration-700 ease-in-out transform shadow-2xl rounded-xl"
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-xl transition duration-500 ease-in-out"
          />
        </motion.div>

        {/* Engaging and Animated Content Below the Image */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <div className="text-left">
            <p className="text-lg font-medium text-gray-800">
              Welcome to <span className="text-indigo-600 font-semibold">Stocks for Noobs</span> – your go-to dashboard for all things stock-related! Simply type the name of a company and instantly get the latest stock info. It's that easy!
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
