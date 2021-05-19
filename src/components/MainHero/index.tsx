import Button from 'components/Button'
import { ReactNode } from 'react'
import { animated, useSpring } from 'react-spring'

import { Container } from './styles'

interface MainHeroProps {
  children?: ReactNode;
  content_data: {
    main_title: string
    subtitle: string
    cta_button: string
    hero_image: string
  }
}

export const MainHero:React.FC<MainHeroProps> = ({children, content_data, ...props}) => {

  const {
    main_title,
    subtitle,
    cta_button,
    hero_image
  } = content_data

  const textanimation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      await next({ opacity: 1, scale:1, delay: 600 })
    }
  })

  return (
    <Container height="100%" bgImage={hero_image} {...props} >
      <div  className="hero">
      <animated.div className="mainHero" style={textanimation} >
        <h1>{main_title}</h1>
          <hr/>
          <h2>{subtitle}</h2>
          <Button
            isPrimary
            primaryColor={false}
            text={cta_button}
            link="#projects"
            type="button"
          />
      </animated.div>
      </div>
      {children && children}
    </Container>
  )
}
