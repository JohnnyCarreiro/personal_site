import { AnimatedImg } from 'components/AnimatedImg'
import { RequestForm } from 'components/RequestForm'
import { a, useSpring } from '@react-spring/web'

import { useVisibility } from 'utils/useVisibility'
import { Container } from './styles'


export const RequestAMeetingSection:React.FC = () => {

  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const headerAnimation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 200 })
    }
  })

  const animation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 600 })
    }
  })
  return (
    <Container ref={currentElement} >
      <a.div className="meeting" style={headerAnimation} >
        <h2>Solicite uma reinião</h2>
          <h4>
            Pronto para iniciar um novo projeto conosco? Excelente! Ligue para nós ou nos envie uma e-mail e vamos retornar assim que possível!
          </h4>
      </a.div>
      <a.div className="container" style={animation} >
        <AnimatedImg
          className="imageContainer"
          image="/images/request_meeting.svg"
          alt="Request a Meeting"
        />
        <div className="mainContent">
          <div className="form">
            <RequestForm/>
          </div>
        </div>
      </a.div>
    </Container>
  )
}

