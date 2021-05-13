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
                <a href="/"><p>Inicio</p></a>
              </li>
              <li className="nav-link">
                <a href="/#about"><p>Sobre</p></a>
              </li>
              <li className="nav-link">
                <a href="/#projects"><p>Projetos</p></a>
              </li>
              <li className="nav-link">
                <a href="/#services"><p>Serviços</p></a>
              </li>
              <li className="nav-link">
                <a href="/#contact"><p>Contato</p></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

