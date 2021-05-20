import { useRouter } from 'next/router'
import { Container } from './styles'

export const Footer:React.FC = () => {
  const { locale } = useRouter()
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <strong>CONNECT</strong><small>GDN</small>
        </div>
        <div className="contact">
          {
            locale === 'en-us'
              ? (<p><a href="mailto:contact@johnnycarreiro.com">contact@johnnycarreiro.com</a></p>)
              :(<p><a href="mailto:contato@johnnycarreiro.com">contato@johnnycarreiro.com</a></p>)
          }
        </div>
        <div className="nav">
          <div>
            {
              locale === 'en-us'
                ? (
                  <ul>
                    <li className="nav-link">
                      <a href="/"><p>Home</p></a>
                    </li>
                    <li className="nav-link">
                      <a href="/#about"><p>About</p></a>
                    </li>
                    <li className="nav-link">
                      <a href="/#projects"><p>Projects</p></a>
                    </li>
                    <li className="nav-link">
                      <a href="/#services"><p>Skills</p></a>
                    </li>
                    <li className="nav-link">
                      <a href="/#contact"><p>Contacts</p></a>
                    </li>
                  </ul>
                )
                : (
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
                      <a href="/#contact"><p>Contatos</p></a>
                    </li>
                  </ul>
                )
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

