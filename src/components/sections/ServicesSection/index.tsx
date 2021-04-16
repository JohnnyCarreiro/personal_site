import Button from 'components/Button'
import { Container } from './styles'


export const ServicesSection:React.FC = () => {
  return (
    <Container>
      <div className="title">
        <h1>Serviços</h1>
        <h3>Você também pode contar com soluções<br/> individuais nas áreas que atuamos.</h3>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="imageContainer" >
            <img src="/images/services/business_intelligence.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Business <br/>Intelligence</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="imageContainer" >
            <img src="/images/services/design.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Design</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="imageContainer" >
            <img src="/images/services/marketing.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Marketing</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="imageContainer" >
            <img src="/images/services/tailor_maide.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Aplicações<br/>sob-medida</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="imageContainer" >
            <img src="/images/services/web_app_development.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Desenvolvimento<br/>de sites e aplicativos</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="imageContainer" >
            <img src="/images/services/web_strategy.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Estratégias<br/>para web</h2>
            </div>
          </div>
        </div>
      </div>
      <Button
        link="#"
        primaryColor={false}
        isPrimary={false}
        text="Saiba mais"
      />
    </Container>
  )
}

