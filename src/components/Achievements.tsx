'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Zap, Target, Star, Award, Calendar, TrendingUp } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: 'IEEE TechX Bits & Bots Hackathon — Winner',
      description: 'Team BulamuChainBot won the TechX Uganda 2025 Hackathon with an AI-powered rural health assistant combined with blockchain-secured medical records.',
      icon: <Trophy className="text-yellow-400" size={24} />,
      category: 'Competition',
      year: 'Sep 2025',
      impact: 'Won first place with a healthcare AI solution'
    },
    {
      title: 'Blockchain Uganda Hackathon — Winner',
      description: 'Won the Blockchain 2025 Uganda Hackathon with "Village SACCO" — a decentralized savings solution for rural communities.',
      icon: <Trophy className="text-yellow-400" size={24} />,
      category: 'Competition',
      year: 'Jun 2025',
      impact: 'Built financial inclusion tool for rural areas'
    },
    {
      title: 'EthNile Hackathon — Winner',
      description: 'Godwin Ofwono (UTAMU) won with the MicroCeloLearn Project. UTAMU Innovation Club delegation attended and represented actively.',
      icon: <Trophy className="text-yellow-400" size={24} />,
      category: 'Competition',
      year: 'Oct 2025',
      impact: 'UTAMU team won blockchain education hackathon'
    },
    {
      title: 'AVIATHON — 4th Place',
      description: 'AeroUTAMU Team placed 4th in the aviation hackathon, narrowly missing 2nd runner-up by one position with an aviation intelligence system.',
      icon: <Award className="text-orange-400" size={24} />,
      category: 'Competition',
      year: 'Oct 2025',
      impact: 'Top 4 in national aviation hackathon'
    },
    {
      title: 'IBM Z Datathon 2025',
      description: 'Built AI Legal Translator that converts legal language into simplified speech using AI summarization and translation. Cross-cultural team collaboration with 5 Indian teammates.',
      icon: <Trophy className="text-blue-400" size={24} />,
      category: 'Competition',
      year: 'Oct 2025',
      impact: 'International cross-cultural team project'
    },
    {
      title: 'AI FEST Kampala 2026',
      description: 'Organized UTAMU participation in the premier inter-university AI hackathon in East Africa. 25+ institutions competed to build AI agents solving real-world problems.',
      icon: <Zap className="text-purple-400" size={24} />,
      category: 'Hackathon',
      year: 'May 2026',
      impact: 'Led UTAMU delegation of 25+ institutions'
    },
    {
      title: 'FOSSA ICT Fest 2026',
      description: 'Participated in hackathon and coding challenge at IUIU. UTAMU team showcased localized applications and digital solutions.',
      icon: <Zap className="text-green-400" size={24} />,
      category: 'Hackathon',
      year: 'May 2026',
      impact: 'Showcased localized digital solutions'
    },
    {
      title: 'Zindi UTAMU Hackathons',
      description: 'Organized and participated in multiple Zindi data science competitions tackling financial inclusion in Africa using ML models.',
      icon: <Trophy className="text-emerald-400" size={24} />,
      category: 'Hackathon',
      year: '2025-2026',
      impact: 'ML models for financial inclusion'
    },
    {
      title: 'Stellar Builders Bootcamp — Kabale',
      description: 'Intensive 3-day blockchain development bootcamp. 16 active GitHub repositories launched, 100% of projects received 1-on-1 reviews from senior engineers.',
      icon: <Zap className="text-purple-400" size={24} />,
      category: 'Workshop',
      year: 'Mar 2026',
      impact: '16 repositories launched in 3 days'
    },
    {
      title: 'Data Visualization for AI/ML Workshop',
      description: 'Hands-on session mastering Matplotlib and Seaborn for data visualization. Sponsored by Zindi and UTAMU.',
      icon: <Target className="text-cyan-400" size={24} />,
      category: 'Workshop',
      year: 'Mar 2026',
      impact: 'Data visualization skills for AI/ML'
    },
    {
      title: 'PyCon Uganda 2025',
      description: 'Attended Uganda\'s premier Python conference — workshops on ML, data engineering, backend development, and open-source collaboration.',
      icon: <Users className="text-blue-400" size={24} />,
      category: 'Conference',
      year: 'Aug 2025',
      impact: 'Networked with Python ecosystem'
    },
    {
      title: 'DevFest Kampala 2025',
      description: 'Google Developer Group flagship event — sessions on Cloud, AI/ML, Flutter, Firebase. Networking with Google Developer Experts worldwide.',
      icon: <Users className="text-red-400" size={24} />,
      category: 'Conference',
      year: 'Oct 2025',
      impact: 'Connected with Google Developer Experts'
    },
    {
      title: 'BUIDL Africa Conference 2025',
      description: 'Major gathering for Web3, AI, and digital businesses. Developer workshops, smart contract deployment, and BUIDL Pitch Arena at National ICT Innovation Hub.',
      icon: <Zap className="text-orange-400" size={24} />,
      category: 'Conference',
      year: 'Nov 2025',
      impact: 'Web3 and AI developer community'
    },
    {
      title: 'Droidcon Uganda 2025',
      description: 'Annual Android developer conference covering Kotlin, Jetpack Compose, mobile app security, and ecosystem updates.',
      icon: <Users className="text-green-400" size={24} />,
      category: 'Conference',
      year: 'Nov 2025',
      impact: 'Android development ecosystem'
    },
    {
      title: 'WordCamp Mukono 2026',
      description: 'WordPress community conference — workshops on Headless CMS, AI integration, Contributor Day, and open-source collaboration.',
      icon: <Users className="text-blue-400" size={24} />,
      category: 'Conference',
      year: 'Mar 2026',
      impact: 'WordPress open-source contribution'
    },
    {
      title: 'Foreign Policy Early Careers Leadership Program',
      description: 'Selected for FPELP at American Center Kampala — 4-week immersive course on international relations, diplomacy, and U.S.-Uganda foreign policy.',
      icon: <Star className="text-cyan-400" size={24} />,
      category: 'Program',
      year: 'May-Jun 2026',
      impact: 'Selected for competitive leadership program'
    },
    {
      title: 'Bitnob Workshop & Hackathon',
      description: 'Hands-on sessions on Lightning wallets, Bitcoin payment flows, and API integration. Built a functional Lightning-based prototype.',
      icon: <Zap className="text-green-400" size={24} />,
      category: 'Hackathon',
      year: 'Jul 2025',
      impact: 'Built Bitcoin Lightning prototype'
    },
    {
      title: 'Polkadot Conference',
      description: 'Web3 conference on decentralized governance, parachains, interoperability, and the Polkadot ecosystem.',
      icon: <Users className="text-purple-400" size={24} />,
      category: 'Conference',
      year: 'Oct 2025',
      impact: 'Web3 ecosystem engagement'
    },
    {
      title: 'Movement Network Launch — Uganda',
      description: 'Flagship launch gathering builders, innovators, and blockchain enthusiasts creating decentralized systems.',
      icon: <Zap className="text-cyan-400" size={24} />,
      category: 'Conference',
      year: '2025',
      impact: 'Blockchain builders community'
    },
    {
      title: 'Aspiring Google Developers Lead',
      description: 'Working towards becoming a Google Developers Lead to organize community events and foster tech innovation in Uganda.',
      icon: <Star className="text-red-400" size={24} />,
      category: 'Leadership',
      year: 'Ongoing',
      impact: 'Community leadership aspiration'
    },
    {
      title: 'Aspiring GitHub Campus Expert',
      description: 'Working towards becoming a GitHub Campus Expert to lead tech community initiatives and open source contributions.',
      icon: <Star className="text-orange-400" size={24} />,
      category: 'Community',
      year: 'Ongoing',
      impact: 'Open source leadership goal'
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition': return 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20'
      case 'Conference': return 'from-indigo-500/10 to-purple-500/10 border-indigo-500/20'
      case 'Hackathon': return 'from-emerald-500/10 to-green-500/10 border-emerald-500/20'
      case 'Workshop': return 'from-green-500/10 to-emerald-500/10 border-green-500/20'
      case 'Program': return 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
      case 'Leadership': return 'from-red-500/10 to-orange-500/10 border-red-500/20'
      case 'Community': return 'from-orange-500/10 to-red-500/10 border-orange-500/20'
      default: return 'from-gray-500/10 to-slate-500/10 border-gray-500/20'
    }
  }

  const stats = [
    { label: 'Events & Conferences', value: '20+', icon: <Calendar className="text-blue-400" size={20} /> },
    { label: 'Hackathons & Competitions', value: '11+', icon: <Trophy className="text-yellow-400" size={20} /> },
    { label: 'Awards & Wins', value: '4', icon: <Award className="text-green-400" size={20} /> },
    { label: 'Leadership Roles', value: '5+', icon: <Target className="text-purple-400" size={20} /> }
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
            Achievements & Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Hackathons won, conferences attended, and community impact — representing UTAMU across Uganda&apos;s tech ecosystem.
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
              transition={{ duration: 0.6, delay: index * 0.05 }}
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
                      <span className="text-gray-500">·</span>
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
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Impact & Takeaways</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <Users className="text-blue-400" size={20} />
                Community Impact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Strengthened UTAMU&apos;s visibility in national and regional tech communities
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Won 4 hackathon awards through team excellence
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Expanded professional networks and partnerships
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Enhanced UTAMU Innovation Club&apos;s footprint in Uganda&apos;s ecosystem
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <Target className="text-purple-400" size={20} />
                Skills Gained
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  AI, Blockchain, Web3, and Cloud technologies
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Aviation systems, fintech, and smart contracts
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Team collaboration under pressure
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  Data Science, ML, and Python ecosystems
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
