'use client'

import { motion } from 'framer-motion'
import { MapPin, User, Target } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                  <User className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I&apos;m a passionate Software Engineering student at Uganda Technology and Management University (UTAMU), 
                deeply interested in the intersection of technology and space exploration. My journey combines 
                rigorous academic learning with hands-on project development.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Location & Impact</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Based in <span className="text-green-400 font-semibold">Kampala, Uganda</span>, 
                I&apos;m working on projects that bridge local innovation with global technology trends, 
                contributing to the African tech ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                <Target className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">My Mission</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <h4 className="font-semibold text-blue-400 mb-3 text-lg group-hover:text-blue-300 transition-colors duration-300">
                  Space Technology
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Building innovative solutions for space exploration and satellite technology
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <h4 className="font-semibold text-purple-400 mb-3 text-lg group-hover:text-purple-300 transition-colors duration-300">
                  Artificial Intelligence
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Developing AI systems that solve real-world problems and enhance human capabilities
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <h4 className="font-semibold text-cyan-400 mb-3 text-lg group-hover:text-cyan-300 transition-colors duration-300">
                  Data Analytics
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Extracting insights from complex datasets to drive informed decision-making
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20 text-center">
              <p className="text-yellow-400 font-semibold text-lg">
                Ultimate Goal: Join SpaceX, NASA, or ESA
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Working towards making humanity a multi-planetary species
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
