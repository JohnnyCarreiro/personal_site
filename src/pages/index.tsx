import { MainHero } from 'components/MainHero'
import { AboutSection } from 'components/sections/AboutSection'
import { ProjectsSection } from 'components/sections/ProjectsSection'
import { RequestAMeetingSection } from 'components/sections/RequestAMeetingSection'
import { ServicesSection } from 'components/sections/ServicesSection'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | connect gdn">
    <MainHero/>
    <section id="about" >
      <AboutSection/>
    </section>
    <section id="projects" >
      <ProjectsSection/>
    </section>
    <section id="services" >
      <ServicesSection/>
    </section>
    <section id="contact" >
      <RequestAMeetingSection/>
    </section>
  </Layout>
)

export default IndexPage
