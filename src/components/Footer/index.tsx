import { Container } from './styles'

export const Footer:React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <strong>CONNECT</strong><small>GDN</small>
        </div>
        <div className="contact">
          <p><a href="mailto:connect@connectgdn.com">connect@connectgdn.com</a></p>
        </div>
        <div className="nav">
          <div>
            <ul>
              <li className="nav-link">
                <a href="/">Inicio</a>
              </li>
              <li className="nav-link">
                <a href="/">Sobre</a>
              </li>
              <li className="nav-link">
                <a href="/">Projetos</a>
              </li>
              <li className="nav-link">
                <a href="/">Serviços</a>
              </li>
              <li className="nav-link">
                <a href="/">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

