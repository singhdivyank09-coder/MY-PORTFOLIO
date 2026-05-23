import Sidebar from './Sidebar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import CertificateSection from './CertificateSection'
import ResumeSection from './ResumeSection'
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
        <CertificateSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
