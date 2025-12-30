'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Zap, Target, Star, TrendingUp } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: 'AI Hackathon 2025 Participant',
      description: 'Participated in AI for UN SDGs hackathon, developing innovative solutions for sustainable development goals.',
      icon: <Trophy className="text-yellow-400" size={24} />,
      category: 'Competition',
      year: '2025',
      impact: 'Collaborated with team to create AI solutions addressing sustainability challenges'
    },
    {
      title: 'PyConUganda 2025 Conference',
      description: 'Attended PyConUganda conference in August 2025, Kampala - networking with Python developers and learning latest trends.',
      icon: <Users className="text-blue-400" size={24} />,
      category: 'Conference',
      year: '2025',
      impact: 'Connected with 200+ Python developers, gained insights on AI/ML trends'
    },
    {
      title: 'Blockchain DevFest 2025',
      description: 'Participated in Blockchain DevFest 2025 in Kampala, Uganda - exploring decentralized technologies and Web3 innovations.',
      icon: <Zap className="text-purple-400" size={24} />,
      category: 'Conference',
      year: '2025',
      impact: 'Enhanced understanding of blockchain technology and decentralized systems'
    },
    {
      title: 'Bitnob Developers Bootcamp & Hackathon',
      description: 'Attended intensive bootcamp and hackathon in Kampala focusing on fintech solutions and blockchain development.',
      icon: <Trophy className="text-green-400" size={24} />,
      category: 'Hackathon',
      year: '2025',
      impact: 'Developed fintech prototype, learned blockchain development practices'
    },
    {
      title: 'DevOps Meetup - Docker & Kubernetes',
      description: 'Attended DevOps meetup on August 16th at Uganda ICT Hub Nakawa, learning containerization and orchestration technologies.',
      icon: <Target className="text-cyan-400" size={24} />,
      category: 'Meetup',
      year: '2025',
      impact: 'Gained practical knowledge in Docker and Kubernetes for deployment'
    },
    {
      title: 'Google Developer Meetups',
      description: 'Attended Google Developer meetups in 2024 focusing on Flutter development and career guidance in tech.',
      icon: <Star className="text-orange-400" size={24} />,
      category: 'Meetup',
      year: '2024',
      impact: 'Learned mobile development best practices and career progression strategies'
    },
    {
      title: 'IBM Z Datathon 2025',
      description: 'Scheduled to participate in IBM Z Datathon 2025 in October, focusing on mainframe technologies and data analytics solutions.',
      icon: <Trophy className="text-blue-400" size={24} />,
      category: 'Competition',
      year: '2025',
      impact: 'Upcoming opportunity to work with enterprise-scale data analytics'
    },
    {
      title: 'VibeCoding DApp Workshop',
      description: 'Attended specialized workshop on Decentralized Application development and blockchain technologies.',
      icon: <Zap className="text-green-400" size={24} />,
      category: 'Workshop',
      year: '2024',
      impact: 'Built foundational knowledge in DApp development and smart contracts'
    },
    {
      title: 'SDGs-CAP Cohort 4 Member',
      description: 'Selected as member of SDGs Capacity Building Program focusing on sustainable development initiatives.',
      icon: <Target className="text-cyan-400" size={24} />,
      category: 'Program',
      year: '2024',
      impact: 'Contributing to sustainable development through technology solutions'
    },
    {
      title: 'Aspiring Google Developers Lead',
      description: 'Working towards becoming a Google Developers Lead to organize community events and foster tech innovation in Uganda.',
      icon: <Star className="text-red-400" size={24} />,
      category: 'Leadership',
      year: 'Ongoing',
      impact: 'Building tech community leadership skills and event organization experience'
    },
    {
      title: 'Aspiring GitHub Campus Expert',
      description: 'Working towards becoming a GitHub Campus Expert to lead tech community initiatives and open source contributions.',
      icon: <Star className="text-orange-400" size={24} />,
      category: 'Community',
      year: 'Ongoing',
      impact: 'Developing open-source contribution practices and community mentorship'
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition': return 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20'
      case 'Conference': return 'from-indigo-500/10 to-purple-500/10 border-indigo-500/20'
      case 'Hackathon': return 'from-emerald-500/10 to-green-500/10 border-emerald-500/20'
      case 'Meetup': return 'from-rose-500/10 to-pink-500/10 border-rose-500/20'
      case 'Workshop': return 'from-green-500/10 to-emerald-500/10 border-green-500/20'
      case 'Program': return 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
      case 'Leadership': return 'from-red-500/10 to-orange-500/10 border-red-500/20'
      case 'Community': return 'from-orange-500/10 to-red-500/10 border-orange-500/20'
      default: return 'from-gray-500/10 to-slate-500/10 border-gray-500/20'
    }
  }

  const stats = [
    { label: 'Conferences & Events', value: '8+', icon: <Users className="text-blue-400" size={20} /> },
    { label: 'Competitions & Hackathons', value: '3+', icon: <Trophy className="text-yellow-400" size={20} /> },
    { label: 'Workshops & Meetups', value: '4+', icon: <Zap className="text-green-400" size={20} /> },
    { label: 'Leadership Roles', value: '3+', icon: <Target className="text-purple-400" size={20} /> }
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Engagements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Recognition and active participation in the tech community, 
            showcasing leadership, learning, and contribution to innovation.
          </p>
        </motion.div>

        {/* Achievement Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${getCategoryColor(achievement.category)} backdrop-blur-sm rounded-2xl p-6 border hover:border-opacity-60 transition-all duration-300 group`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-slate-700/50 to-purple-800/30 rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-purple-400 text-sm">{achievement.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {achievement.description}
              </p>
              
              {/* Impact indicator */}
              <div className="mt-3 pt-3 border-t border-purple-500/20">
                <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                  <TrendingUp size={12} className="text-purple-400" />
                  Impact:
                </p>
                <p className="text-sm text-gray-300 italic">{achievement.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Community Impact & Goals</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <Users className="text-blue-400" size={20} />
                Recent Engagements (2024-2025)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  PyConUganda & Blockchain DevFest 2025
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Google Developer & DevOps Meetups
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Bitnob Bootcamp & AI Hackathons
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  AI Education & Knowledge Sharing
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <Target className="text-purple-400" size={20} />
                Leadership Aspirations
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Google Developers Lead Uganda
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  GitHub Campus Expert Program
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Tech Community Building
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  Innovation Hub Leadership
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
