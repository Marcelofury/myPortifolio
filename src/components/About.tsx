'use client'

import { motion } from 'framer-motion'
import { MapPin, User, Target, Code, Bug, GraduationCap, Briefcase } from 'lucide-react'

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Who I Am */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                  <User className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I am a <span className="text-blue-400 font-semibold">Software Engineering</span> student at 
                <span className="text-purple-400 font-semibold"> UTAMU</span> (Uganda Technology and Management University) 
                and a <span className="text-cyan-400 font-semibold">Fullstack Web Developer (MEVN STACK)</span>, 
                Backend developer in Node/Express.js and Java. I enjoy building practical solutions, 
                learning deeply, and contributing to meaningful projects.
              </p>
            </div>

            {/* Software Testing */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                  <Bug className="text-green-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Software Testing</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I am a <span className="text-green-400 font-semibold">Junior Software Tester</span> and my main goal 
                is to find <span className="text-yellow-400 font-semibold">defects</span> in systems, make test scenarios 
                and test cases, bug reports using tools like <span className="text-purple-400 font-semibold">Postman, Bruno, JIRA</span> 
                and <span className="text-cyan-400 font-semibold">SQL queries</span> in the database.
              </p>
            </div>

            {/* Location */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 group-hover:border-orange-400/50 transition-all duration-300">
                  <MapPin className="text-orange-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Location & Status</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Based in <span className="text-orange-400 font-semibold">Kampala, Uganda</span>. 
                Open to <span className="text-green-400 font-semibold">Jobs, internships, hackathons & collaborations</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Education & Focus */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <GraduationCap className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education & Focus</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Software Engineering Student at <span className="text-purple-400 font-semibold">UTAMU</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Interested in <span className="text-blue-400 font-semibold">FullStack & Backend</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Currently learning: <span className="text-cyan-400 font-semibold">Java</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Pursuing: <span className="text-green-400 font-semibold">ISTQB Certification</span> for Testers
                </li>
              </ul>
            </div>

            {/* Career Goals */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Career Goals</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Work in global tech & space-related organizations
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Specialize in AI system building
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Build solutions in Financial Engineering and Space Tech
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20 text-center">
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
