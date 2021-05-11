import { useSpring } from 'react-spring'
import TechCard from 'components/TechCard'
import { useVisibility } from 'utils/useVisibility'
import { Container } from './styles'


export function TechSection() {

  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const componentAnimation = useSpring({
    from: { opacity: 0, scale: 0 },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 600 })
    }
  })

  return (
    <Container ref={currentElement} >
      <TechCard
          techTitle={'Typescript'}
          techSubtitle={'Javascript with super powers'}
          moreInfo={'More reliable applications'}
          cta={'Your next Lang'}
          link={'#'}
          bgColor={'#94c4eb'}
          buttonColor={'#007acc'}
          style={componentAnimation}
        >
          <img src="/images/techs/typescript-rounded.svg" alt="typescript logo"/>
        </TechCard>
        <TechCard
          techTitle={'Next.js'}
          techSubtitle={'A powerful react Js framework'}
          moreInfo={'Serverless, SSG and SSR'}
          cta={'Your next framework'}
          link={'#'}
          bgColor={'#bfbfbf'}
          buttonColor={'#010101'}
          style={componentAnimation}
        >
          <img src="/images/techs/next-rounded.svg" alt="typescript logo"/>
        </TechCard>
        <TechCard
          techTitle={'Node.js'}
          techSubtitle={'A powerful server tech'}
          moreInfo={'Modern Server-side'}
          cta={'Your next framework'}
          link={'#'}
          bgColor={'#aed8a6'}
          buttonColor={'#529e45'}
          style={componentAnimation}
        >
          <img src="/images/techs/node-rounded.svg" alt="typescript logo"/>
        </TechCard>
        <TechCard
          techTitle={'React'}
          techSubtitle={'Cross-platform Solutions'}
          moreInfo={'Web and Mobile'}
          cta={'Your next framework'}
          link={'#'}
          bgColor={'#8cd9f3'}
          buttonColor={'#6ecff0'}
          style={componentAnimation}
        >
          <img src="/images/techs/react-rounded.svg" alt="typescript logo"/>
        </TechCard>
        <TechCard
          techTitle={'Html 5'}
          techSubtitle={'Develop powerfull websites'}
          moreInfo={'Modern HTML'}
          cta={'Your next script'}
          link={'#'}
          bgColor={'#f0a38e'}
          buttonColor={'#e35026'}
          style={componentAnimation}
        >
          <img src="/images/techs/html5-rounded.svg" alt="typescript logo"/>
        </TechCard>
        <TechCard
          techTitle={'Sass'}
          techSubtitle={'css styles with super powers'}
          moreInfo={'powerful & resposible'}
          cta={'Your next style'}
          link={'#'}
          bgColor={'#e09fbe'}
          buttonColor={'#ce6899'}
          style={componentAnimation}
        >
          <img src="/images/techs/sass-rounded.svg" alt="typescript logo"/>
        </TechCard>
    </Container>
  );
};


