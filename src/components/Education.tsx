'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Users } from 'lucide-react'

const Education = () => {
  const courses = [
    'Structured Programming (C, Python, JavaScript)',
    'Computer Systems Architecture',
    'Software Architecture & Patterns',
    'Operating Systems',
    'Data Analytics'
  ]

  const roles = [
    {
      title: 'Membership Coordinator',
      organization: 'UTAMU Innovation Hub',
      icon: <Users className="text-blue-400" size={20} />
    },
    {
      title: 'Class Coordinator',
      organization: 'Internship Peers',
      icon: <BookOpen className="text-purple-400" size={20} />
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
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" size={32} />
              <div>
                <h3 className="text-2xl font-semibold text-white">BSc in Software Engineering</h3>
                <p className="text-blue-400">Uganda Technology and Management University (UTAMU)</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Core Courses</h4>
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Roles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Leadership Roles</h3>
            
            {roles.map((role, index) => (
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
                  {role.icon}
                  <h4 className="text-xl font-semibold text-white">{role.title}</h4>
                </div>
                <p className="text-gray-300">{role.organization}</p>
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
