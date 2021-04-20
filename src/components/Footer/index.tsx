import { Container } from './styles'

export const Footer:React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <strong>CONNECT</strong><small>GDN</small>
        </div>
        <div className="contact">
          <p><a href="mailto:johnny@johnnycarreiro.com">johnny@johnnycarreiro.com</a></p>
        </div>
        <div className="nav">
          <div>
            <ul>
              <li className="nav-link">
                <a href="/">Inicio</a>
              </li>
              <li className="nav-link">
                <a href="/#about">Sobre</a>
              </li>
              <li className="nav-link">
                <a href="/#projects">Projetos</a>
              </li>
              <li className="nav-link">
                <a href="/#services">Serviços</a>
              </li>
              <li className="nav-link">
                <a href="/#contact">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

