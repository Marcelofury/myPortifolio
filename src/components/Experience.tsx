'use client'

import { motion } from 'framer-motion'
import { Briefcase, BarChart3, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'Data Analyst Intern',
      company: 'Otic Technologies (Otic Foundation)',
      period: 'June - July 2025',
      icon: <BarChart3 className="text-blue-400" size={24} />,
      description: 'Analyzed complex datasets, developed data visualizations, and provided insights for foundation operations and impact assessment.',
      skills: ['Data Analysis', 'Python', 'Power BI', 'Statistical Modeling']
    },
    {
      role: 'Enumerator & Census Mapper',
      company: 'Uganda Bureau of Statistics (UBOS)',
      period: 'February 2024',
      icon: <MapPin className="text-green-400" size={24} />,
      description: 'Conducted field data collection, mapping exercises, and census operations. Ensured data accuracy and quality control.',
      skills: ['Data Collection', 'Field Research', 'Mapping', 'Quality Assurance']
    },
    {
      role: 'Census Enumerator',
      company: 'Uganda Bureau of Statistics (UBOS) - National Housing and Population Census',
      period: 'May 2024',
      icon: <Briefcase className="text-blue-400" size={24} />,
      description: 'Participated in the National Housing and Population Census, conducting household interviews and data collection. Ensured accurate population and housing data collection.',
      skills: ['Census Operations', 'Household Surveys', 'Data Collection', 'Population Research']
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work & Internship Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-slate-700/50 to-purple-800/30 rounded-xl border border-purple-500/30">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                      {exp.period && <p className="text-gray-400 text-sm mt-1">{exp.period}</p>}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <div className="lg:w-1/3">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Briefcase className="text-purple-400" size={20} />
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Experience Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
              <p className="text-gray-300">Organizations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Data</div>
              <p className="text-gray-300">Analysis Focus</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Field</div>
              <p className="text-gray-300">Research Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
