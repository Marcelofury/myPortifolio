'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'BSc in Software Engineering',
      institution: 'Universal Technology and Management University (UTAMU)',
      period: '2024 - 2028',
      location: 'Kampala, Uganda'
    },
    {
      degree: 'Certificate in Software Engineering (JavaScript)',
      institution: 'Refactory Academy',
      period: 'Dec 2025 - Mar 2026',
      location: 'Kampala, Uganda'
    }
  ]

  const certifications = [
    {
      title: 'Software Engineering in JavaScript',
      issuer: 'Refactory Academy',
      date: 'Jun 2026'
    },
    {
      title: 'Power BI Certification',
      issuer: 'Otic Group',
      date: 'Jul 2025'
    },
    {
      title: 'IBM Z Hackathon 2025',
      issuer: 'IBM',
      date: 'Oct 2025'
    }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Academics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-blue-400" size={32} />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.period} | {edu.location}</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-gray-300 text-sm">Currently pursuing degree with focus on software engineering principles, data structures, and system design.</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Award className="text-yellow-400" size={24} />
              Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-yellow-400" size={20} />
                  <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
                </div>
                <p className="text-gray-300">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
              </motion.div>
            ))}

            {/* Academic Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="text-green-400" size={20} />
                Academic Focus
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Object-Oriented Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Software Design Patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Data Structures & Algorithms</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
