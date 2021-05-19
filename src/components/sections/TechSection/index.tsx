import { useSpring } from 'react-spring'
import TechCard from 'components/TechCard'
import { useVisibility } from 'utils/useVisibility'
import { Container } from './styles'

interface StacksProps {
  stacks_data: Array<{
    stack_image: string
    stack_title: string
    tech_subtitle: string
    more_informations: string
    cta: string
    bg_color: string
    button_color: string
  }>
}


export const TechSection:React.FC<StacksProps> = ({stacks_data}) => {

  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const componentAnimation = useSpring({
    from: { opacity: 0, scale: 0 },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 600 })
    }
  })

  return (
    <Container ref={currentElement} >
      { stacks_data.map((stack)=> {
          const {
            stack_image,
            stack_title,
            tech_subtitle,
            more_informations,
            cta,
            bg_color,
            button_color
          } = stack
          return (
            <TechCard
              key={stack_title}
              techTitle={stack_title}
              techSubtitle={tech_subtitle}
              moreInfo={more_informations}
              cta={cta}
              link={'#'}
              bgColor={bg_color}
              buttonColor={button_color}
              style={componentAnimation}
            >
              <img src={stack_image} alt={`${stack_title} logo`}/>
            </TechCard>
          )
        })
      }
    </Container>
  );
};


