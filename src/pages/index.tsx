import { MainHero } from 'components/MainHero'
import { AboutSection } from 'components/sections/AboutSection'
import { ProjectsSection } from 'components/sections/ProjectsSection'
import { RequestAMeetingSection } from 'components/sections/RequestAMeetingSection'
import { ServicesSection } from 'components/sections/ServicesSection'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | connect gdn">
    <MainHero/>
    <section style={{scrollPadding:"5rem 0 0 0"}} id="about" >
      <AboutSection/>
    </section>
    <section style={{scrollPadding:"5rem 0 0 0"}} id="projects" >
      <ProjectsSection/>
    </section>
    <section style={{scrollPadding:"5rem 0 0 0"}} id="services" >
      <ServicesSection/>
    </section>
    <section style={{scrollPadding:"5rem 0 0 0"}} id="contact" >
      <RequestAMeetingSection/>
    </section>
  </Layout>
)

export default IndexPage
