'use client'

import { motion } from 'framer-motion'
import { Briefcase, BarChart3, MapPin, GraduationCap, Users, Globe, Rocket, Code, Trophy, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'DojoHub',
      period: 'Jun 2026 - Jul 2026',
      location: 'Kampala, Uganda',
      icon: <Building className="text-blue-400" size={24} />,
      description: 'Architected a modular ERP to MES ecosystem to automate manufacturing business ledger and shop-floor tracking processes. Led on-site requirement gathering and field research at manufacturing facilities. Authored comprehensive SRS documents and designed high-fidelity UI dashboards using React. Coordinated a 7-member engineering cohort with API-first development strategy.',
      skills: ['React', 'ERP/MES', 'API Design', 'SRS Documentation', 'Team Leadership']
    },
    {
      role: 'Ambassador',
      company: 'Stellar East African Community',
      period: 'Nov 2025 - Present',
      location: 'Kampala, Uganda',
      icon: <Globe className="text-purple-400" size={24} />,
      description: 'Represent the Stellar ecosystem in Kampala, driving awareness, education, and innovation around blockchain-based financial solutions. Led onboarding of new cohort participants, facilitated weekly learning sessions and technical workshops.',
      skills: ['Blockchain', 'Stellar', 'Community Leadership', 'Technical Mentorship']
    },
    {
      role: 'Minister of Education',
      company: 'UTAMU (Guild Government)',
      period: 'Sep 2025 - Present',
      location: 'Kampala, Uganda',
      icon: <GraduationCap className="text-blue-400" size={24} />,
      description: 'Responsible for academic welfare of students, coordinating career guidance and counseling, cultivating innovation and research culture, and organizing educational programs across the university.',
      skills: ['Leadership', 'Student Welfare', 'Event Planning', 'Academic Advocacy']
    },
    {
      role: 'GDG Co-Lead',
      company: 'GDG on Campus UTAMU',
      period: 'Aug 2025 - Present',
      location: 'Kampala, Uganda',
      icon: <Rocket className="text-red-400" size={24} />,
      description: 'Lead student engagement and growth initiatives. Coordinate events and technical sessions for skill development. Support partnerships and representation for student opportunities. Organize developer meetups, workshops, and networking sessions. Mentor community members on career growth.',
      skills: ['GDG Leadership', 'Event Management', 'Mentorship', 'Google Technologies']
    },
    {
      role: 'Full-Stack Web Development Student',
      company: 'Refactory Academy',
      period: 'Dec 2025 - Mar 2026',
      location: 'Kampala, Uganda',
      icon: <Code className="text-cyan-400" size={24} />,
      description: 'Designed and executed functional and integration test cases for custom-built web applications using Agile/Scrum frameworks. Validated RESTful API endpoints using Postman, inspecting JSON payloads and HTTP status codes. Conducted manual regression testing (TNR) on the Karibu Grocery application. Logged, tracked, and debugged software defects.',
      skills: ['MEVN Stack', 'Postman', 'API Testing', 'Regression Testing', 'Agile/Scrum']
    },
    {
      role: 'Membership Coordinator',
      company: 'UTAMU Innovation Club',
      period: 'Mar 2025 - Present',
      location: 'Kampala, Uganda',
      icon: <Users className="text-green-400" size={24} />,
      description: 'Enrolling and verifying new members to UTAMU Innovation Hub. Active participation in the club\'s weekly meetups and coordination of club activities.',
      skills: ['Community Building', 'Team Coordination', 'Communication']
    },
    {
      role: 'Campus Ambassador',
      company: 'GDG on Campus - Makerere University',
      period: 'Feb 2026 - May 2026',
      location: 'Kampala, Uganda',
      icon: <Users className="text-orange-400" size={24} />,
      description: 'Outreach of AI FEST Uganda 2026 to UTAMU, promoting awareness of the 17 SDGs, and representing UTAMU on a national level.',
      skills: ['AI Outreach', 'SDG Advocacy', 'Cross-University Collaboration']
    },
    {
      role: 'Campus Ambassador',
      company: 'Aerobuddies Uganda',
      period: 'Sep 2025 - Jan 2026',
      location: 'Kampala, Uganda',
      icon: <Rocket className="text-yellow-400" size={24} />,
      description: 'Advertised the Aerobuddies Uganda Aviathon (hackathon) across tech communities. Mobilized UTAMU students to participate in AVIATHON 2025.',
      skills: ['Event Promotion', 'Student Mobilization', 'Aviation Tech']
    },
    {
      role: 'Campus Ambassador',
      company: 'IEEE Computer Society SYP TechX',
      period: 'Aug 2025 - Jan 2026',
      location: 'Kampala, Uganda',
      icon: <Trophy className="text-blue-400" size={24} />,
      description: 'Shared official TechX timeline, invited students to register, promoted the Bits and Bots Hackathon, and reached out to potential sponsors and partners.',
      skills: ['Hackathon Promotion', 'Partnership Outreach', 'Community Engagement']
    },
    {
      role: 'Campus Ambassador',
      company: 'IBM',
      period: 'Sep 2025 - Nov 2025',
      location: 'Remote',
      icon: <Globe className="text-blue-500" size={24} />,
      description: 'Promoted the IBM Z Datathon at UTAMU, drove registrations by engaging with peers, and volunteered with Shooting Stars Foundation.',
      skills: ['IBM Z Technologies', 'Event Promotion', 'Volunteering']
    },
    {
      role: 'Data Analyst Intern',
      company: 'Otic Group',
      period: 'Jun 2025 - Aug 2025',
      location: 'Kampala, Uganda',
      icon: <BarChart3 className="text-blue-400" size={24} />,
      description: 'Performed database validation and data quality testing using Python (Pandas). Wrote automated data-cleaning scripts and verified data pipelines. Created visual reporting dashboards in Power BI, testing data flow accuracy against raw source databases.',
      skills: ['Data Analysis', 'Python', 'Power BI', 'Automation', 'Data Validation']
    },
    {
      role: 'Enumerator & Census Mapper',
      company: 'Uganda Bureau of Statistics (UBOS)',
      period: 'Feb 2024 - May 2024',
      location: 'Uganda',
      icon: <MapPin className="text-green-400" size={24} />,
      description: 'Conducted field data collection, mapping exercises, and census operations for the National Housing and Population Census. Ensured data accuracy and quality control.',
      skills: ['Data Collection', 'Field Research', 'Mapping', 'Quality Assurance']
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
            Experience & Leadership
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      <div className="flex items-center gap-4 text-gray-400 text-sm mt-1">
                        <span>{exp.period}</span>
                        <span>|</span>
                        <span>{exp.location}</span>
                      </div>
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
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">11+</div>
              <p className="text-gray-300">Roles & Organizations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
              <p className="text-gray-300">Campus Ambassadorships</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
              <p className="text-gray-300">Leadership Positions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2</div>
              <p className="text-gray-300">Internships</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
