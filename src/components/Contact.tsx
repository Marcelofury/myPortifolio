'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: <MapPin className="text-green-400" size={24} />,
      label: 'Location',
      value: 'Kampala, Uganda',
      link: null
    },
    {
      icon: <Phone className="text-blue-400" size={24} />,
      label: 'Phone',
      value: '0783858472',
      link: 'tel:+256783858472'
    },
    {
      icon: <Mail className="text-purple-400" size={24} />,
      label: 'Email',
      value: 'butera.marcel@student.utamu.ac.ug',
      link: 'mailto:butera.marcel@student.utamu.ac.ug'
    },
    {
      icon: <Linkedin className="text-cyan-400" size={24} />,
      label: 'LinkedIn',
      value: 'butera-marcel-68368a32b',
      link: 'https://www.linkedin.com/in/butera-marcel-68368a32b'
    },
    {
      icon: <Github className="text-orange-400" size={24} />,
      label: 'GitHub',
      value: 'Marcelofury',
      link: 'https://github.com/Marcelofury'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration - You'll need to set up your EmailJS account
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'butera.marcel@student.utamu.ac.ug'
      }

      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = 'service_oe9w8py' // Your EmailJS service ID
      const TEMPLATE_ID = 'template_hgm48mk' // Your EmailJS template ID
      const PUBLIC_KEY = 'c86tWqlXq_9Hr23-p' // Your EmailJS public key

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Let's connect and explore opportunities in Software Engineering, AI, Data Analytics, 
            or Space Technology. I'm always excited to discuss innovative projects and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <MessageCircle className="text-blue-400" size={24} />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-700/30 to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-slate-600/30 to-purple-600/20 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Connect</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/butera-marcel-68368a32b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/Marcelofury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 rounded-lg border border-gray-500/30 hover:border-gray-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="mailto:butera.marcel@student.utamu.ac.ug"
                  className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm mt-2"
                >
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm mt-2"
                >
                  <AlertCircle size={16} />
                  Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center border-t border-purple-500/20 pt-8"
        >
          <p className="text-gray-400">
            © 2025 Marcel Butera. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ready to join SpaceX, NASA, or ESA 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
