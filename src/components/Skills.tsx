'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Terminal, Wrench, Bug, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Testing & QA',
      icon: <Bug className="text-red-400" size={24} />,
      skills: ['Software Testing (ISTQB)', 'STLC', 'Functional Testing', 'Integration Testing', 'Regression Testing (TNR)', 'Test Case Design', 'Defect Logging'],
      color: 'from-red-500/20 to-pink-600/20',
      borderColor: 'border-red-500/30'
    },
    {
      title: 'API Testing & Validation',
      icon: <Globe className="text-blue-400" size={24} />,
      skills: ['Postman', 'JSON', 'XML', 'REST APIs', 'API Integration Testing'],
      color: 'from-blue-500/20 to-cyan-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Project Management & Tools',
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: ['JIRA', 'Git/GitHub', 'Agile/Scrum', 'Power BI'],
      color: 'from-orange-500/20 to-amber-600/20',
      borderColor: 'border-orange-500/30'
    },
    {
      title: 'Databases & Querying',
      icon: <Database className="text-green-400" size={24} />,
      skills: ['SQL (Queries, Joins)', 'MongoDB', 'Data Verification'],
      color: 'from-green-500/20 to-emerald-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Development',
      icon: <Code className="text-purple-400" size={24} />,
      skills: ['JavaScript (Vue.js, Node.js, Express.js)', 'Java', 'Python (Pandas, Automation)', 'Flutter/Dart'],
      color: 'from-purple-500/20 to-violet-600/20',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-cyan-400" size={24} />,
      skills: ['Leadership', 'Communication', 'Team Coordination', 'Problem Solving', 'Event Coordination', 'Community Engagement'],
      color: 'from-cyan-500/20 to-teal-600/20',
      borderColor: 'border-cyan-500/30'
    }
  ]

  const proficiencyLevels = [
    { skill: 'Python', level: 90, years: '2+', proficiency: 'Expert', color: 'bg-blue-500' },
    { skill: 'JavaScript', level: 85, years: '2+', proficiency: 'Advanced', color: 'bg-yellow-500' },
    { skill: 'C Programming', level: 80, years: '2+', proficiency: 'Advanced', color: 'bg-gray-500' },
    { skill: 'Data Analysis', level: 88, years: '2+', proficiency: 'Expert', color: 'bg-green-500' },
    { skill: 'AI/ML', level: 82, years: '1+', proficiency: 'Advanced', color: 'bg-purple-500' },
    { skill: 'Software Testing', level: 85, years: '1+', proficiency: 'Advanced', color: 'bg-red-500' },
    { skill: 'Rust', level: 60, years: '1+', proficiency: 'Intermediate', color: 'bg-orange-500' }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border ${category.borderColor} hover:border-opacity-60 transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl border ${category.borderColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className={`px-3 py-1 bg-gradient-to-r ${category.color} text-gray-200 rounded-full text-sm border ${category.borderColor}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Terminal className="text-purple-400" size={24} />
            Proficiency Levels
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-medium">{item.skill}</span>
                    <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                      {item.proficiency}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">{item.years} years</span>
                    <span className="text-gray-400 text-sm font-medium">{item.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Currently Learning & Goals</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Currently Learning</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Software Engineering with JavaScript and Java
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Software Testing (ISTQB Certification)
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Fullstack Development (MEVN Stack)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Specialization Goals</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Advanced QA Automation
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Cloud Infrastructure Testing
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  Space Technology Applications
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
