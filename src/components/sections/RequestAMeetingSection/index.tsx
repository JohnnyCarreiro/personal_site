import { AnimatedImg } from 'components/AnimatedImg'
import { RequestForm } from 'components/RequestForm'
import { a, useSpring } from '@react-spring/web'
import { FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

import { useVisibility } from 'utils/useVisibility'
import { Container } from './styles'
import { Marginer } from 'components/Marginer'
import { useRouter } from 'next/router'

interface RequestMeetingProps {
  content_data: {
    contact_title: string
    contact_subtitle: string
    contact_image?: string
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
}


export const RequestAMeetingSection:React.FC<RequestMeetingProps> = ({content_data}) => {
  const { locale } = useRouter()
  const { contact_title, contact_subtitle, form_fields } = content_data
  const { whatsapp_message } = form_fields

  const whatAppNumber = '5512997204431'
  const encodedWhatsAppMessage = encodeURI(whatsapp_message)

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
        <h2>{contact_title}</h2>
          <h4>{contact_subtitle}</h4>
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
                { locale === 'en-us'
                  ? (<h4>contact@johnnycarreiro.com</h4>)
                  : (<h4>contato@johnnycarreiro.com</h4>)
                }
              </a>
            </div>
            <div className="contact">
              <FaInstagram />
              <a href="https://www.instagram.com/johnnycarreirodev/" target="_blank" rel="noopener noreferrer">
                <h4>@johnnycarreirodev</h4>
              </a>
            </div>
            <div className="contact">
              <FaLinkedin />
              <a href="hhtps://www.linkedin.com/in/johnnycarreirodev" target="_blank" rel="noopener noreferrer">
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
            <RequestForm form_fields={form_fields} />
          </div>
        </div>
      </a.div>
    </Container>
  )
}

