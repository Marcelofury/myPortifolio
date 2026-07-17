'use client'

import { motion } from 'framer-motion'
import { Users, Rocket, Code, TrendingUp, Award, Globe } from 'lucide-react'

const ImpactHighlights = () => {
  const impactMetrics = [
    {
      icon: <Users className="text-blue-400" size={32} />,
      value: '10+',
      label: 'Users Served',
      description: 'Across AI ,mobile apps and web applications',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <Rocket className="text-purple-400" size={32} />,
      value: '3',
      label: 'High-Impact Projects',
      description: 'Real-world solutions deployed',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Globe className="text-green-400" size={32} />,
      value: '1',
      label: 'NGO Website Deployed',
      description: 'Supporting children\'s charity',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Code className="text-cyan-400" size={32} />,
      value: '8+',
      label: 'Active Projects',
      description: 'Open source contributions',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Award className="text-yellow-400" size={32} />,
      value: '10+',
      label: 'Tech Events',
      description: 'Hackathons & conferences',
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: <TrendingUp className="text-orange-400" size={32} />,
      value: '60+',
      label: 'Total Repositories',
      description: 'Continuous learning & growth',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30'
    }
  ]

  const realWorldImpact = [
    {
      title: 'AI Systems Deployed',
      impact: 'Music recommendation and travel guide systems serving users',
      icon: '🤖'
    },
    {
      title: 'Charity Digital Presence',
      impact: 'Enabled online donations and awareness for children\'s NGO',
      icon: '❤️'
    },
    {
      title: 'Space Technology',
      impact: 'Contributing to NASA satellite simulation tools',
      icon: '🚀'
    },
    {
      title: 'Community Building',
      impact: 'Active participation in tech community events and mentorship',
      icon: '🌟'
    }
  ]

  return (
    <section id="impact" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Real-World Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Measurable outcomes and quantifiable results from projects that solve real problems 
            and create tangible value for users and communities.
          </p>
        </motion.div>

        {/* Impact Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group bg-gradient-to-br ${metric.color} backdrop-blur-sm rounded-2xl p-6 border ${metric.borderColor} hover:border-opacity-60 transition-all duration-300 overflow-hidden`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-slate-700/50 to-purple-800/30 rounded-xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {metric.value}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {metric.label}
                </h3>
                
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-World Applications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Real-World Applications & Business Value
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {realWorldImpact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-700/30 to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-lg">
            <span className="text-purple-400 font-semibold">Delivering measurable impact</span> through 
            innovative solutions in AI, web development, and space technology
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactHighlights
