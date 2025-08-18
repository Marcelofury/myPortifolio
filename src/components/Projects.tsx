'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Music, Bot, Heart, Rocket, Eye } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'MoodMelody Music Recommender',
      description: 'AI-powered music recommendation system that analyzes user mood and preferences to suggest personalized playlists using machine learning algorithms.',
      technologies: ['TypeScript', 'Machine Learning', 'AI', 'React'],
      icon: <Music className="text-pink-400" size={24} />,
      category: 'AI/ML',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/MoodMelody-music-recommender',
      demo: null
    },
    {
      title: 'Paris Travel Guide Chatbot',
      description: 'Intelligent travel guide chatbot for Paris with comprehensive travel information and recommendations using AI.',
      technologies: ['Python', 'AI', 'Chatbot', 'Natural Language Processing'],
      icon: <Bot className="text-blue-400" size={24} />,
      category: 'AI/Web',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/parisTravelGuideChatbot',
      demo: null
    },
    {
      title: 'PDF Reader & Text Extractor',
      description: 'Python tool for extracting text content from PDF documents with a straightforward approach to document processing.',
      technologies: ['Python', 'PDF Processing', 'Text Extraction', 'Document Analysis'],
      icon: <Eye className="text-green-400" size={24} />,
      category: 'Utility',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/pdfReader',
      demo: null
    },
    {
      title: 'Hope for the Children NGO Website',
      description: 'Charity organization website designed to support children in need with donation capabilities and impact showcasing.',
      technologies: ['CSS', 'HTML', 'JavaScript', 'Web Design'],
      icon: <Heart className="text-red-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/HOPE-FOR-THE-CHILDREN',
      demo: null
    },
    {
      title: 'Python Programming Courses',
      description: 'Comprehensive Python course repository with tutorials, examples, and practical programming exercises for learning.',
      technologies: ['Python', 'Education', 'Documentation', 'Programming Fundamentals'],
      icon: <Github className="text-yellow-400" size={24} />,
      category: 'Education',
      status: 'Ongoing',
      github: 'https://github.com/Marcelofury/PyCourses',
      demo: null
    },
    {
      title: 'JavaScript Programming Courses',
      description: 'JavaScript learning resources and course materials covering modern JS concepts and practical implementations.',
      technologies: ['JavaScript', 'Education', 'Web Development', 'ES6+'],
      icon: <Rocket className="text-purple-400" size={24} />,
      category: 'Education',
      status: 'Ongoing',
      github: 'https://github.com/Marcelofury/jsCourses',
      demo: null
    },
    {
      title: 'NASA Small Satellites Simulator',
      description: 'Forked NASA Operational Simulator for Small Satellites - contributing to space technology and satellite operations.',
      technologies: ['C', 'Space Technology', 'Simulation', 'Embedded Systems'],
      icon: <Rocket className="text-cyan-400" size={24} />,
      category: 'Space Tech',
      status: 'Contributing',
      github: 'https://github.com/Marcelofury/nasa-small-satelites',
      demo: null
    },
    {
      title: 'Temperature Conversion Program',
      description: 'Interactive web application for converting between Fahrenheit and Celsius temperatures with clean UI.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      icon: <ExternalLink className="text-orange-400" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Marcelofury/TEMPERATURE-CONVERSION-PROGRAM',
      demo: null
    }
  ]

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
      case 'AI/ML': return 'from-purple-500/10 to-pink-500/10 border-purple-500/20'
      case 'AI/Web': return 'from-blue-500/10 to-purple-500/10 border-blue-500/20'
      case 'Web Development': return 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
      case 'Education': return 'from-green-500/10 to-emerald-500/10 border-green-500/20'
      case 'Utility': return 'from-orange-500/10 to-red-500/10 border-orange-500/20'
      case 'Space Tech': return 'from-indigo-500/10 to-purple-500/10 border-indigo-500/20'
      case 'Programming': return 'from-green-500/10 to-emerald-500/10 border-green-500/20'
      default: return 'from-gray-500/10 to-slate-500/10 border-gray-500/20'
    }
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
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my work in AI, web development, and software engineering, 
            demonstrating practical solutions and innovative approaches to real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${getCategoryColor(project.category)} backdrop-blur-sm rounded-2xl p-6 border hover:border-opacity-60 transition-all duration-300 group`}
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
                <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>

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
              <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
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
              <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
              <p className="text-gray-300">Active Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
