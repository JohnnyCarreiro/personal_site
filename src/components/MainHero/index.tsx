import Button from 'components/Button'
import { ReactNode } from 'react'
import { animated, useSpring } from 'react-spring'

import { Container } from './styles'

interface MainHeroProps {
  children?: ReactNode;
}

export const MainHero:React.FC<MainHeroProps> = ({children, ...props}) => {

  const textanimation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      await next({ opacity: 1, scale:1, delay: 600 })
    }
  })

  return (
    <Container height="100%" bgImage="/images/main_hero.jpg"{...props} >
      <div  className="hero">
      <animated.div className="mainHero" style={textanimation} >
        <h1>Sua empresa faz negócios online, ou está fora dos negócios?</h1>
          <hr/>
          <h2>
            Com o mundo cada vez mais digitalizado, não ter uma presença digital seria o mesmo que abrir sua empresa em meio ao deserto.
          </h2>
          <Button
            isPrimary
            primaryColor={false}
            text="Saiba mais"
            link="#projects"
            type="button"
          />
      </animated.div>
      </div>
      {children && children}
    </Container>
  )
}
