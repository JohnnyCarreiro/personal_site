import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { MainHero } from 'components/MainHero'
import { AboutSection } from 'components/sections/AboutSection'
import { ProjectsSection } from 'components/sections/ProjectsSection'
import { RequestAMeetingSection } from 'components/sections/RequestAMeetingSection'
import { ServicesSection } from 'components/sections/ServicesSection'
import { TechSection } from 'components/sections/TechSection'
import { getPrismicClient } from 'services/prismic'


import { Layout } from '../components/Layout'

interface HeroProps {
  hero_cover:string
  hero_title:string
  hero_subtitle:string
}

interface AboutProps {
  items: Array<object>
  primary: Array<object>
}
interface ProjectsProps {
  items: Array<object>
  primary: Array<object>
}

interface ContentProps{
  hero_section: HeroProps
  about_section: AboutProps
  projects_section: ProjectsProps
}

export default function IndexPage({ }: ContentProps) {
  const { locale } = useRouter()

  return (
    <Layout title={
      locale === 'en-us'
        ? 'Home | Johnny Carreiro'
        : 'Inicio | Johnny Carreiro'
    }>
      <MainHero/>
      <section style={{scrollPadding:"5rem 0 0 0"}} id="about" >
        <AboutSection/>
        <TechSection/>
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
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'page')
  ], {
    lang:String(locale)
  })
  const content = response.results.map(content => {
    const heroSection = content.data.body.find((section:any) => section.slice_type === 'hero_section')
    const aboutSection = content.data.body.find((section: any) => section.slice_type === 'about_section')
    const stacksSection = content.data.body.find((section: any) => section.slice_type === 'stack_')
    const projectsSection = content.data.body.find((section: any) => section.slice_type === 'projects_sections')
    const skillsSection = content.data.body.find((section: any) => section.slice_type === 'services_section')
    const contactsSection = content.data.body.find((section: any) => section.slice_type === 'contacts_sections')
    return {
      lang: content.lang,
      hero_section: {
        main_title: RichText.asText(heroSection.primary.main_title),
        subtitle: RichText.asText(heroSection.primary.subtitle),
        cta_button: RichText.asText(heroSection.primary.cta_button),
        hero_image: heroSection.primary.hero_image.url
      },
      about_section: {
        main_title: RichText.asText(aboutSection.primary.about_title),
        subtitle: RichText.asText(aboutSection.primary.subtitle),
        image: aboutSection.primary.section_image.url,
        contents: aboutSection.items.map((content: any) => {
          return {
            title: RichText.asText(content.title),
            content: RichText.asText(content.content)
          }
        }),
      },
      stacks: stacksSection.items.map((stack: any) => {
        return {
        stack_image: stack.stack_image.url,
        stack_title: RichText.asText(stack.stack_title),
        tech_subtitle: RichText.asText(stack.tech_subtitle),
        more_informations: RichText.asText(stack.more_informations),
        cta: RichText.asText(stack.cta),
        bg_color: RichText.asText(stack.bg_color),
        button_color: RichText.asText(stack.button_color),
        }
      }),
      projects_section:{
      projects_title: RichText.asText(projectsSection.primary.projects_title),
      projects_subtitle: RichText.asText(projectsSection.primary.projects_subtitle),
      projects: projectsSection.items.map((project: any) => {
        return {
          project_image: project.project_image.url,
          project_title: RichText.asText(project.project_title),
          summary: RichText.asText(project.summary),
          cta_text: RichText.asText(project.cta_text),
          project_subtitle: RichText.asText(project.project_subtitle),
          project_text: RichText.asText(project.project_text),
          direction: RichText.asText(project.direction),
          animation_direction: RichText.asText(project.animation_direction)
        }
      })
      },
      skills_section: {
      skills_tiltle: RichText.asText(skillsSection.primary.skills_tiltle),
      skills_subtile: RichText.asText(skillsSection.primary.skills_subtile),
      skills: skillsSection.items.map((skill: any) => {
        return {
          skill_image: skill.skill_image.url,
          skill_title: RichText.asText(skill.skill_title)
        }
      })
      },
      contacts_section: {
      contact_title: RichText.asText(contactsSection.primary.contact_title),
      contact_subtitle: RichText.asText(contactsSection.primary.contact_subtitle),
      form_fields: {
      name_label: RichText.asText(contactsSection.primary.name_label),
      name_field: RichText.asText(contactsSection.primary.name_field),
      email_label: RichText.asText(contactsSection.primary.email_label),
      email_field: RichText.asText(contactsSection.primary.email_field),
      phone_label: RichText.asText(contactsSection.primary.phone_label),
      phone_field: RichText.asText(contactsSection.primary.phone_field),
      company_label: RichText.asText(contactsSection.primary.company_label),
      company_field: RichText.asText(contactsSection.primary.company_field),
      subject_label: RichText.asText(contactsSection.primary.subject_label),
      subject_field: RichText.asText(contactsSection.primary.subject_field),
      message_label: RichText.asText(contactsSection.primary.message_label),
      message_field: RichText.asText(contactsSection.primary.message_field),
      whatsapp_message: RichText.asText(contactsSection.primary.whatsapp_message),
      }
      }
    }
  })

  return {
    props: {
      content
    },
    // revalidate: 60 * 60 * 24 //24 hours
  }
}
