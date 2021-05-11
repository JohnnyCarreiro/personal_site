import { animated, useSpring } from 'react-spring'

import { AnimatedImg } from 'components/AnimatedImg'
import { useVisibility } from '../../../utils/useVisibility'
import { Container } from './styles'

export const AboutSection:React.FC = () => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const textAnimation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 600 })
    }
  })
  const textAnimation2 = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 700 })
    }
  })

  return (
    <Container ref={currentElement} >
      <animated.div className="about" style={textAnimation} >
        <h2>About Me </h2>
        <h4>
          Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim.
        </h4>
      </animated.div>
      <animated.div className="container" style={textAnimation2}>
        <div className="imageContainer" >
          <AnimatedImg
            image="/images/backInBusiness.svg"
            alt="Back in Business"
          />
        </div>
        <div className="mainContent">
          <div>
            <h2>De volta ao Jogo !</h2>
            <p>Saiba como sua empresa pode ter resultados excelente com uma administração mais eficiente e com estratégias que farão você voltar aos business!</p>
          </div>
          <div>
            <h2>Porquê me contratar</h2>
            <p>
              Sou um profissional dos  segmentos de desenvolvimento e marketing digital para a gestão inteligente de negócios. Desenvolvendo sites, aplicações sob-medida e campanhas de marketing.<br/>
              Os serviços oferecidos pro mim reduzem erros e possibilitam, conhecer os padrões comportamentais dos clientes, o que é determinante na oferta de um produto ou serviço, além de proporcionar um controle maior dos processos internos, da gestão e dos colaboradores da sua empresa.<br/>
              Outro ponto analisado foi que muitas empresas tentam alavancar seu faturamento através da busca por novos clientes, quando seus processos internos e sistemas, quando existem, estão desatualizados  e implantados de forma errada.<br/>
            </p>
          </div>
        </div>
      </animated.div>
    </Container>
  )
}


