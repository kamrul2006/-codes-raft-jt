import Banner from '../Components/Home/Banner'
import { AboutPage } from './AboutPage'
import Education from '../Components/Home/EducationalQualification'
import SkillsSection from '../Components/Home/MySkilles'
import ProjectsSection from '../Components/Home/ProjectsSection'
import ContactMe from '../Components/Home/ContactSection'
import SplashCursor from '../Components/Others/SplashCursor'




export const HomePage = () => {
    return (
        <div>
            <SplashCursor className="-z-10" />

            <Banner />

            <div className='border-t-4 border-lime-500'>
                <AboutPage />
            </div>

            <Education />

            <SkillsSection />

            <ProjectsSection />

            <ContactMe />

        </div>
    )
}
