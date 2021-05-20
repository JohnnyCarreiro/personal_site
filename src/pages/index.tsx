import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { MainHero } from 'components/MainHero'
import { AboutSection } from 'components/sections/AboutSection'
import { ProjectsSection } from 'components/sections/ProjectsSection'
import { RequestAMeetingSection } from 'components/sections/RequestAMeetingSection'
import { SkillsSection } from 'components/sections/ServicesSection'
import { TechSection } from 'components/sections/TechSection'
import { getPrismicClient } from 'services/prismic'


import { Layout } from '../components/Layout'


interface ContentProps{
  content: Array<{
    hero_section: {
      main_title: string
      subtitle: string
      cta_button: string
      hero_image: string
    }
    about_section: {
      main_title: string
      subtitle: string
      image: string
      contents: Array<{
        title: string
        content: string
      }>
    }
    stacks: Array<{
      stack_image: string
      stack_title: string
      tech_subtitle: string
      more_informations: string
      cta: string
      bg_color: string
      button_color: string
    }>
    projects_section:{
      projects_title: string
      projects_subtitle: string
      projects: Array<{
        project_image: string
        project_title: string
        summary: string
        cta_text: string
        project_subtitle: string
        project_text: string
        direction: string
        animation_direction: string
      }>
    }
    skills_section: {
      skills_tiltle: string
      skills_subtile: string
      skills: Array<{
        skill_image: string
        skill_title: string
      }>
    }
    contacts_section: {
      contact_title: string
      contact_subtitle: string
      form_fields: {
        name_label: string
        name_field: string
        email_label: string
        email_field: string
        phone_label: string
        phone_field: string
        company_label: string
        company_field: string
        subject_label: string
        subject_field: string
        message_label: string
        message_field: string
        whatsapp_message: string
      }
    }
  }>
}

export default function IndexPage({ content }: ContentProps) {
  const { locale } = useRouter()

  const {
    hero_section,
    about_section,
    stacks,
    projects_section,
    skills_section,
    contacts_section
  } = content[0]

  return (
    <Layout title={
      locale === 'en-us'
        ? 'Home | Johnny Carreiro'
        : 'Inicio | Johnny Carreiro'
    }>
      <MainHero content_data={hero_section} />
      <section style={{scrollPadding:"5rem 0 0 0"}} id="about" >
        <AboutSection content_data={about_section} />
        <TechSection stacks_data={stacks} />
      </section>
      <section style={{scrollPadding:"5rem 0 0 0"}} id="projects" >
        <ProjectsSection content_data={projects_section} />
      </section>
      <section style={{scrollPadding:"5rem 0 0 0"}} id="services" >
        <SkillsSection content_data={skills_section} />
      </section>
      <section style={{scrollPadding:"5rem 0 0 0"}} id="contact" >
        <RequestAMeetingSection content_data={contacts_section} />
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
            content: RichText.asHtml(content.content)
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
          project_text: RichText.asHtml(project.project_text),
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
