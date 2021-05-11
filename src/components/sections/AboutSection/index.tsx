import { AnimatedImg } from 'components/AnimatedImg'
import { useRef, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { useVisibility } from '../../../utils/useVisibility'
import { Container } from './styles'

const calc = (x:number, y:number, rect:DOMRect, p?:number, n?:number, s?:number) => [
  -(y - Number(rect?.top) - Number(rect?.height) /(p ? p : 2)) /(n ? n : 30),
  (x - Number(rect?.left) - Number(rect?.width) /(p ? p : 2)) /(n ? n : 30),
  (s ? s : 1.12),
]
const trans = (x:number, y:number, s:number) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


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

  const ref = useRef<HTMLDivElement>(null)
  const [xys, set] = useState([0, 0, 1])
  const props = useSpring({ xys, config: config['wobbly'] })


  return (
    <Container ref={currentElement} >
      <animated.div className="about" style={textAnimation} >
        <h1>About Me </h1>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Atirei o pau no gatis, per gatis num morreus. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
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


