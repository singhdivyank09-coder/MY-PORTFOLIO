import Sidebar from './Sidebar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ResumeSection from './ResumeSection'
import CertificatesSection from './CertificatesSection'
import ContactSection from './ContactSection'

function App() {
  return (
    <div className="flex bg-[#030014]">
      <Sidebar />
      <main className="flex-1 md:ml-[260px] w-full min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
