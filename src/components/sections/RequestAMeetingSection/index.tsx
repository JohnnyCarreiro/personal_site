import { RequestForm } from 'components/RequestForm'
import { Container } from './styles'


export const RequestAMeetingSection:React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="imageContainer" >
          <img src="/images/request_meeting.svg" alt="request a meeting"/>
        </div>
        <div className="mainContent">
          <div>
            <h2>Solicite uma reinião</h2>
            <p>
            Pronto para iniciar um novo projeto conosco? Excelente! Ligue para nós ou nos envie uma e-mail e vamos retornar assim que possível!
            </p>
          </div>
          <div className="form">
            <RequestForm/>
          </div>
        </div>
      </div>
    </Container>
  )
}

