import { a, useSpring } from '@react-spring/web'
import Button from 'components/Button'
import { useVisibility } from 'utils/useVisibility'
import { Skill } from './Service'
import { Container } from './styles'

interface SkillsProps {
  content_data: {
    skills_tiltle: string
    skills_subtile: string
    skills: Array<{
      skill_image: string
      skill_title: string
    }>
  }
}


export const SkillsSection:React.FC<SkillsProps> = ({ content_data }) => {
  const { skills_tiltle, skills_subtile, skills } = content_data

  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const animation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 200 })
    }
  })

  return (
    <Container ref={currentElement} >
      <a.div className="title" style={animation} >
        <h2>{skills_tiltle}</h2>
        <h4>{skills_subtile}</h4>
      </a.div>
      <div className="wrapper">
        { skills.map((skill) => {
            const { skill_image, skill_title } = skill

            return (
              <Skill key={skill_title} isVisible={isVisible} className="container" delay={200} >
                <div className="imageContainer" >
                  <img src={skill_image} />
                </div>
                <div className="mainContent">
                  <div>
                    <h2>{skill_title}</h2>
                  </div>
                </div>
              </Skill>
            )
          })
        }
      </div>
      <Button
        link="#contact"
        primaryColor={false}
        isPrimary={false}
        text="Saiba mais"
      />
    </Container>
  )
}

