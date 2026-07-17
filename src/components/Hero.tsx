'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Briefcase, Code, Award, Users } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Hero = () => {
  const quickStats = [
    { icon: <Briefcase size={20} />, label: 'Experience', value: '2+ Years' },
    { icon: <Code size={20} />, label: 'Projects', value: '8+ Active' },
    { icon: <Award size={20} />, label: 'Technologies', value: '15+' },
    { icon: <Users size={20} />, label: 'Impact', value: '500+ Users' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gray-200 drop-shadow-lg">
                Hi, I&apos;m{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                BUTERA Marcel
              </span>
            </motion.h1>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Typing Animation */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <div className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    {typingText}
                  </span>
                  <span className="animate-pulse text-purple-400">|</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Detail-oriented Software Engineering student with over 2 years of hands-on experience 
                in full-stack web development, data validation, and API integration. 
                <span className="text-cyan-400 font-semibold block mt-2">
                  Focused on building impactful solutions through quality code.
                </span>
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </motion.a>
              <motion.a
                href="#projects"
                className="group px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </span>
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-purple-500/20"
            >
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center hover:border-purple-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex justify-center mb-2 text-purple-400">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 h-72 md:w-80 md:h-80"
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                    <Image
                      src="/images/profile.jpg"
                      alt="Marcel Butera - Software Engineer"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900"><span class="text-6xl font-bold text-purple-400">MB</span></div>';
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-gray-400 hover:text-white transition-colors duration-200" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero
