'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, Tractor, Recycle, Building2, ShoppingBag, Dumbbell, Heart, Rocket, Eye, Filter, TrendingUp, Target, Award } from 'lucide-react'
import { useState } from 'react'

type ImpactLevel = 'High Impact' | 'Medium Impact' | 'Learning Project'

interface Project {
  title: string
  description: string
  technologies: string[]
  icon: React.ReactNode
  category: string
  status: string
  github: string
  demo: string | null
  impact: {
    level: ImpactLevel
    metrics: string[]
    realWorldUse: string
    businessValue: string
  }
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('All')

  const projects: Project[] = [
    {
      title: 'Karibu Grocery Limited',
      description: 'Full-stack grocery management web application with functional and integration test cases designed using Agile/Scrum frameworks.',
      technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Postman'],
      icon: <ShoppingCart className="text-green-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/KaribuGroceryLimited',
      demo: null,
      impact: {
        level: 'High Impact',
        metrics: ['Full-stack application', 'API testing with Postman', 'Regression testing (TNR)'],
        realWorldUse: 'Grocery management system for business operations',
        businessValue: 'Demonstrates end-to-end testing and full-stack development skills'
      }
    },
    {
      title: 'AgriSupply Farm Connect System',
      description: 'Digital marketplace that connects farmers and buyers in Uganda, enabling direct trade and reducing middlemen.',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'React'],
      icon: <Tractor className="text-yellow-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/AgriSupply-Farm-Connect-System',
      demo: null,
      impact: {
        level: 'High Impact',
        metrics: ['Agricultural marketplace', 'Farmer-buyer connection', 'Uganda-focused'],
        realWorldUse: 'Digital platform for agricultural trade in Uganda',
        businessValue: 'Supports local farmers and food supply chain'
      }
    },
    {
      title: 'Gabbage Free City',
      description: 'Smart waste management system for Kampala, using technology to optimize waste collection and recycling.',
      technologies: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
      icon: <Recycle className="text-cyan-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/GabbageFreeCity',
      demo: null,
      impact: {
        level: 'High Impact',
        metrics: ['Waste management solution', 'City-scale application', 'Environmental impact'],
        realWorldUse: 'Smart waste management for Kampala city',
        businessValue: 'Solves urban waste challenges through technology'
      }
    },
    {
      title: 'DojoHub ERP',
      description: 'A full-stack role-based Enterprise Resource Planning system for Dojo Hub Uganda, a Juice Manufacturing Company.',
      technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express 4', 'PostgreSQL', 'Supabase'],
      icon: <Building2 className="text-purple-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/DojoHub-ERP',
      demo: null,
      impact: {
        level: 'High Impact',
        metrics: ['Role-based ERP', 'Full-stack architecture', 'Manufacturing industry'],
        realWorldUse: 'Enterprise resource planning for juice manufacturing',
        businessValue: 'Streamlines business operations and inventory management'
      }
    },
    {
      title: 'MercaShop',
      description: 'E-commerce platform designed for seamless online shopping experience with modern web technologies.',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      icon: <ShoppingBag className="text-blue-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/mercashop',
      demo: null,
      impact: {
        level: 'Medium Impact',
        metrics: ['E-commerce solution', 'Online shopping platform', 'Payment integration'],
        realWorldUse: 'Online marketplace for retail businesses',
        businessValue: 'Enables digital commerce for small businesses'
      }
    },
    {
      title: 'PRO-FITNESS',
      description: 'A fitness Android app developed using Kotlin and Node/Express.js, MongoDB for tracking workouts and nutrition.',
      technologies: ['Kotlin', 'Node.js', 'Express.js', 'MongoDB', 'Android'],
      icon: <Dumbbell className="text-red-400" size={24} />,
      category: 'Mobile Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/PRO-FITNESS',
      demo: null,
      impact: {
        level: 'High Impact',
        metrics: ['Android application', 'Fitness tracking', 'Full-stack mobile app'],
        realWorldUse: 'Personal fitness and workout tracking application',
        businessValue: 'Promotes health and fitness through technology'
      }
    },
    {
      title: 'Hope for the Children NGO Website',
      description: 'Charity organization website designed to support children in need with donation capabilities and impact showcasing.',
      technologies: ['CSS', 'HTML', 'JavaScript', 'Web Design'],
      icon: <Heart className="text-pink-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/HOPE-FOR-THE-CHILDREN',
      demo: null,
      impact: {
        level: 'High Impact',
        metrics: ['Supporting children\'s charity', 'Donation platform', 'Community impact showcase'],
        realWorldUse: 'Active charity website helping connect donors with children in need',
        businessValue: 'Enables digital presence for NGO, facilitating online donations and awareness'
      }
    },
    {
      title: 'NASA Small Satellites Simulator',
      description: 'Forked NASA Operational Simulator for Small Satellites - contributing to space technology and satellite operations.',
      technologies: ['C', 'Space Technology', 'Simulation', 'Embedded Systems'],
      icon: <Rocket className="text-cyan-400" size={24} />,
      category: 'Space Tech',
      status: 'Contributing',
      github: 'https://github.com/Marcelofury/nasa-small-satelites',
      demo: null,
      impact: {
        level: 'High Impact',
        metrics: ['Contributing to space technology', 'Satellite operations simulation', 'Open-source contribution'],
        realWorldUse: 'NASA-grade simulation tool for satellite operations training and testing',
        businessValue: 'Supports space industry education and satellite mission planning'
      }
    },
    {
      title: 'PDF Reader & Text Extractor',
      description: 'Python tool for extracting text content from PDF documents with a straightforward approach to document processing.',
      technologies: ['Python', 'PDF Processing', 'Text Extraction'],
      icon: <Eye className="text-orange-400" size={24} />,
      category: 'Utility',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/pdfReader',
      demo: null,
      impact: {
        level: 'Medium Impact',
        metrics: ['Document processing automation', 'Text extraction accuracy'],
        realWorldUse: 'Tool for automating PDF document analysis and data extraction',
        businessValue: 'Saves time in document processing workflows'
      }
    }
  ]

  // Filter and sort projects
  const filteredProjects = projects
    .filter(project => {
      if (filter === 'All') return true
      if (filter === 'High Impact') return project.impact.level === 'High Impact'
      return project.category === filter
    })
    .sort((a, b) => {
      // Always sort by impact level
      const impactOrder: Record<ImpactLevel, number> = {
        'High Impact': 1,
        'Medium Impact': 2,
        'Learning Project': 3
      }
      return impactOrder[a.impact.level] - impactOrder[b.impact.level]
    })

  const filterOptions = ['All', 'High Impact', 'Web Development', 'Mobile Development', 'Space Tech', 'Utility']

  const getImpactBadgeStyle = (level: ImpactLevel) => {
    switch (level) {
      case 'High Impact':
        return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/40 font-semibold'
      case 'Medium Impact':
        return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/40'
      case 'Learning Project':
        return 'bg-gradient-to-r from-slate-500/20 to-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getImpactIcon = (level: ImpactLevel) => {
    switch (level) {
      case 'High Impact': return <Award className="text-yellow-400" size={16} />
      case 'Medium Impact': return <TrendingUp className="text-blue-400" size={16} />
      case 'Learning Project': return <Target className="text-gray-400" size={16} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'In Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Ongoing': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
      case 'Mobile Development': return 'from-green-500/10 to-emerald-500/10 border-green-500/20'
      case 'Utility': return 'from-orange-500/10 to-red-500/10 border-orange-500/20'
      case 'Space Tech': return 'from-purple-500/10 to-pink-500/10 border-purple-500/20'
      default: return 'from-gray-500/10 to-slate-500/10 border-gray-500/20'
    }
  }

  const getCardSize = (level: ImpactLevel) => {
    // High Impact projects span 2 columns on large screens for prominence
    return level === 'High Impact' ? 'lg:col-span-2' : ''
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in AI, web development, and software engineering, 
            demonstrating practical solutions and innovative approaches to real-world problems.
          </p>
        </motion.div>

        {/* Filter and Sort Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap gap-4 items-center justify-center"
        >
          <div className="flex items-center gap-2">
            <Filter className="text-purple-400" size={20} />
            <span className="text-gray-300 font-medium">Filter:</span>
          </div>
          {filterOptions.map((option) => (
            <motion.button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === option
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white border border-purple-500/20 hover:border-purple-400/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${getCardSize(project.impact.level)} bg-gradient-to-br ${getCategoryColor(project.category)} backdrop-blur-sm rounded-2xl p-6 border hover:border-opacity-60 transition-all duration-300 group`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-slate-700/50 to-purple-800/30 rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-purple-400 text-sm">{project.category}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className={`px-3 py-1 rounded-full text-xs border flex items-center gap-1 ${getImpactBadgeStyle(project.impact.level)}`}>
                    {getImpactIcon(project.impact.level)}
                    {project.impact.level}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>

              {/* Impact Metrics Section */}
              <div className="mb-4 p-4 bg-gradient-to-r from-slate-800/40 to-purple-900/20 rounded-xl border border-purple-500/20">
                <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                  <TrendingUp size={16} />
                  Impact Metrics
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.impact.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 rounded-md text-xs border border-blue-500/30"
                    >
                      ✓ {metric}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Real-World Application:</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{project.impact.realWorldUse}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Business Value:</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{project.impact.businessValue}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-slate-600/30 to-purple-600/20 text-gray-300 rounded-md text-xs border border-slate-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-purple-500/20">
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                )}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-300"
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Project Overview</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <p className="text-gray-300">Featured Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">60+</div>
              <p className="text-gray-300">Total Repositories</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5</div>
              <p className="text-gray-300">Programming Languages</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
              <p className="text-gray-300">High Impact</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
