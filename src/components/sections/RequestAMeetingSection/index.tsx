import { AnimatedImg } from 'components/AnimatedImg'
import { RequestForm } from 'components/RequestForm'
import { a, useSpring } from '@react-spring/web'
import { FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'

import { useVisibility } from 'utils/useVisibility'
import { Container } from './styles'
import { Marginer } from 'components/Marginer'


export const RequestAMeetingSection:React.FC = () => {

  const whatAppNumber = '5512997204431'
  const whatsAppMessage = 'Meu texto para o whats app'
  const encodedWhatsAppMessage = encodeURI(whatsAppMessage)

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
        <div className="contactContainer">
          <AnimatedImg
            className="imageContainer"
            image="/images/request_meeting.svg"
            alt="Request a Meeting"
          />
          <Marginer margin="2.5rem" direction="vertical" />
          <div className="contacts">
            <div className="contact">
              <FiMail />
              <a href="mailto:contact@johnnycarreiro.com" target="_blank"rel="noopener noreferrer" >
                <h4>contact@johnnycarreiro.com</h4>
              </a>
            </div>
            <div className="contact">
              <FaInstagram />
              <a href="https://www.instagram.com/johnnycarreirodev/" target="_blank" rel="noopener noreferrer">
                <h4>@johnnycarreirodev</h4>
              </a>
            </div>
            <div className="contact">
              <FaGithub />
              <a href="https://github.com/JohnnyCarreiro" target="_blank" rel="noopener noreferrer" >
                <h4>Johnny Carreiro</h4>
              </a>
            </div>
            <div className="contact">
              <FaWhatsapp />
              <a
                href={`https://api.whatsapp.com/send?phone=${whatAppNumber}&text=${encodedWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>+55 12 99720-4431</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="form">
            <RequestForm/>
          </div>
        </div>
      </a.div>
    </Container>
  )
}

