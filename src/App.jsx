import Sidebar from './Sidebar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ResumeSection from './ResumeSection'
import ContactSection from './ContactSection'

function App() {
  return (
    <div className="flex bg-[#EFEFEF]">
      <Sidebar />
      <main className="flex-1 md:ml-[250px] w-full min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
