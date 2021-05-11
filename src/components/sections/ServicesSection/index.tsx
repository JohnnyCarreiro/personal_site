import { a, useSpring } from '@react-spring/web'
import Button from 'components/Button'
import { useVisibility } from 'utils/useVisibility'
import { Service } from './Service'
import { Container } from './styles'


export const ServicesSection:React.FC = () => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const animation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 200 })
    }
  })

  return (
    <Container ref={currentElement} >
      <a.div className="title" style={animation} >
        <h2>Serviços</h2>
        <h4>Você também pode contar com soluções<br/> individuais nas áreas que atuamos.</h4>
      </a.div>
      <div className="wrapper">
        <Service isVisible={isVisible} className="container" delay={200} >
          <div className="imageContainer" >
            <img src="/images/services/business_intelligence.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Business <br/>Intelligence</h2>
            </div>
          </div>
        </Service>
        <Service isVisible={isVisible} className="container" delay={250} >
          <div className="imageContainer" >
            <img src="/images/services/design.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Design</h2>
            </div>
          </div>
        </Service>
        <Service isVisible={isVisible} className="container" delay={300} >
          <div className="imageContainer" >
            <img src="/images/services/marketing.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Marketing</h2>
            </div>
          </div>
        </Service>
        <Service isVisible={isVisible} className="container" delay={350} >
          <div className="imageContainer" >
            <img src="/images/services/tailor_maide.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Aplicações<br/>sob-medida</h2>
            </div>
          </div>
        </Service>
        <Service isVisible={isVisible} className="container" delay={400} >
          <div className="imageContainer" >
            <img src="/images/services/web_app_development.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Desenvolvimento<br/>de sites e aplicativos</h2>
            </div>
          </div>
        </Service>
        <Service isVisible={isVisible} className="container" delay={450} >
          <div className="imageContainer" >
            <img src="/images/services/web_strategy.svg" alt="Back in Business"/>
          </div>
          <div className="mainContent">
            <div>
              <h2>Estratégias<br/>para web</h2>
            </div>
          </div>
        </Service>
      </div>
      <Button
        link="#contact"
        primaryColor={false}
        isPrimary={false}
        text="Saiba mais"
      />
    </Container>
  )
}

