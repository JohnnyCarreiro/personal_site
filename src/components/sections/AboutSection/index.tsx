import { animated, useSpring } from 'react-spring'

import { AnimatedImg } from 'components/AnimatedImg'
import { useVisibility } from '../../../utils/useVisibility'
import { Container } from './styles'

interface AboutProps {
  content_data: {
    main_title: string
    subtitle: string
    image: string
    contents: Array<{
      title: string
      content: string
    }>
  }
}

export const AboutSection:React.FC<AboutProps> = ({content_data}) => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const textAnimation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 600 })
    }
  })
  const textAnimation2 = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 700 })
    }
  })
  const {
    main_title,
    subtitle,
    image,
    contents
   } = content_data

  return (
    <Container ref={currentElement} >
      <animated.div className="about" style={textAnimation} >
        <h2>{main_title}</h2>
        <h4>{subtitle}</h4>
      </animated.div>
      <animated.div className="container" style={textAnimation2}>
        <div className="imageContainer" >
          <AnimatedImg
            image={image}
            alt="Back in Business"
          />
        </div>
        <div className="mainContent">
          {contents.map((content) => (
            <div key={content.title} >
              <h2>{content.title}</h2>
              <div dangerouslySetInnerHTML={{ __html:content.content }} />
            </div>
          ))}
        </div>
      </animated.div>
    </Container>
  )
}


