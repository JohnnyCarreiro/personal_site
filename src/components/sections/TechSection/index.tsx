import TechCard from 'components/TechCard'
import { Container } from './styles'


export function TechSection() {
  return (
    <Container>
      <TechCard
          techTitle={'Typescript'}
          techSubtitle={'Javascript with super powers'}
          moreInfo={'More reliable applications'}
          cta={'Your next Lang'}
          link={'#'}
          bgColor={'#94c4eb'}
          buttonColor={'#007acc'}
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
        >
          <img src="/images/techs/sass-rounded.svg" alt="typescript logo"/>
        </TechCard>
    </Container>
  );
};


