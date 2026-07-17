'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, FileText, Trophy, Users, Star, CheckCircle } from 'lucide-react'

const ProfessionalDevelopment = () => {
  const workshops = [
    {
      title: 'Hackathon & Software Testing Workshop',
      organizer: 'Google Developer Groups on Campus',
      date: 'Jun 2026',
      type: 'Workshop',
      icon: <Award className="text-purple-400" size={24} />,
      highlights: ['Built and tested software projects', 'Practical QA testing skills', 'Collaborative problem solving'],
      status: 'Completed'
    },
    {
      title: 'Tech Career Pathways Workshop',
      organizer: 'Tech Era Uganda',
      date: 'Apr 2026',
      type: 'Workshop',
      icon: <Users className="text-blue-400" size={24} />,
      highlights: ['Career guidance in tech', 'Industry insights', 'Networking opportunities'],
      status: 'Completed'
    },
    {
      title: 'Software Engineering Workshop',
      organizer: 'Mesto Community',
      date: 'Oct 2025',
      type: 'Workshop',
      icon: <FileText className="text-green-400" size={24} />,
      highlights: ['Software development best practices', 'Community-driven learning', 'Hands-on projects'],
      status: 'Completed'
    },
    {
      title: 'Space Exploration & STEM Innovation Workshop',
      organizer: 'Space Endeavour',
      date: 'Nov 2025',
      type: 'Workshop',
      icon: <Star className="text-yellow-400" size={24} />,
      highlights: ['Space technology applications', 'STEM innovation', 'Future tech insights'],
      status: 'Completed'
    },
    {
      title: 'AI & Open Source Hackathon',
      organizer: 'AI Community Events',
      date: '2025',
      type: 'Hackathon',
      icon: <Trophy className="text-orange-400" size={24} />,
      highlights: ['AI development', 'Open source contribution', 'Collaborative innovation'],
      status: 'Completed'
    }
  ]

  const certifications = [
    {
      title: 'Refactory Academy Certificate',
      provider: 'Refactory Academy',
      date: 'Completed',
      type: 'Certification',
      icon: <CheckCircle className="text-cyan-400" size={24} />,
      description: 'Full-stack development training and certification'
    },
    {
      title: 'Software Testing Fundamentals',
      provider: 'Online Learning',
      date: 'In Progress',
      type: 'Certification',
      icon: <FileText className="text-purple-400" size={24} />,
      description: 'ISTQB-aligned software testing principles and practices'
    }
  ]

  const achievements = [
    {
      title: 'Hackathon Awards',
      count: '4+',
      description: 'Awards won in various hackathons'
    },
    {
      title: 'Workshops Attended',
      count: '10+',
      description: 'Technical and career development workshops'
    },
    {
      title: 'Community Events',
      count: '20+',
      description: 'Tech meetups and community engagements'
    },
    {
      title: 'Leadership Roles',
      count: '5+',
      description: 'Leadership positions in tech communities'
    }
  ]

  return (
    <section id="professional-development" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Development
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Continuous learning through workshops, hackathons, certifications, and community engagement
          </p>
        </motion.div>

        {/* Workshops & Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <Calendar className="text-purple-400" size={24} />
            Workshops & Events
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-slate-700/50 to-purple-800/30 rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                      {workshop.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {workshop.title}
                      </h4>
                      <p className="text-purple-400 text-sm">{workshop.organizer}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs border bg-green-500/20 text-green-400 border-green-500/30">
                    {workshop.status}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 rounded-full text-xs border border-blue-500/30">
                    {workshop.type}
                  </span>
                  <span className="ml-2 text-gray-400 text-sm">
                    {workshop.date}
                  </span>
                </div>

                <ul className="space-y-2">
                  {workshop.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <FileText className="text-cyan-400" size={24} />
            Certifications & Training
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-slate-700/50 to-purple-800/30 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-cyan-400 text-sm">{cert.provider}</p>
                    <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
                    <div className="mt-3">
                      <span className={`px-3 py-1 rounded-full text-xs border ${
                        cert.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Trophy className="text-yellow-400" size={24} />
            Achievement Overview
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{achievement.count}</div>
                <div className="text-white font-medium mb-1">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalDevelopment
