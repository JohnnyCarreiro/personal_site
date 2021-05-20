import { useSpring, a } from '@react-spring/web'
import Accordion from 'components/Accordion'
import { AnimatedImg } from 'components/AnimatedImg'
import { useVisibility } from 'utils/useVisibility'
import { Project } from './Project'
import { Container } from './styles'

interface ProjectsProps {
  content_data: {
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
}


export const ProjectsSection:React.FC<ProjectsProps> = ({content_data}) => {
  const { projects_title, projects_subtitle, projects } = content_data

  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const animation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 400 })
    }
  })
  return (
    <Container ref={currentElement} >
      <a.div className="projects" style={animation} >
        <h2>{projects_title}</h2>
        <h4>{projects_subtitle}</h4>
      </a.div>
      { projects.map((project) => {
        const {
          project_image,
          project_title,
          summary,
          cta_text,
          project_subtitle,
          project_text,
          direction,
          animation_direction
        } = project
        return (
          <Project key={project_title} className="container" direction={direction} animation={animation_direction} >
            <AnimatedImg
              className="imageContainer"
              image={project_image}
              alt={`${project_title} image`}
            />
            <div className="mainContent">
              <h3>{project_title}</h3>
                <p>{summary}</p>
                <Accordion title={cta_text}>
                  <h3>{project_subtitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html:project_text }} />
                </Accordion>
              </div>
          </Project>
        )
      })}
    </Container>
  )
}

