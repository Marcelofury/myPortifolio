import {
  Hero,
  About,
  Education,
  Experience,
  Skills,
  Projects,
  Achievements,
  ProfessionalDevelopment,
  Contact,
  Navigation,
  ImpactHighlights
} from '@/components'

export default function Home() {
  return (
    <div className="relative">
      {/* Background with improved gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <ImpactHighlights />
        <ProfessionalDevelopment />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}
