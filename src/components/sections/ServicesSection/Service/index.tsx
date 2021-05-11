import { useSpring } from '@react-spring/core'
import { HTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface ServiceProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay: number
  isVisible: Boolean
}

export const  Service: React.FC<ServiceProps> = ({ children, delay, isVisible, ...rest }) => {

  const animation = useSpring({
    from: { y: 800, opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ y: 0,opacity: 1, scale:1, delay })
    }
  })
  return (
    <Container style={animation} {...rest} >
      {children}
    </Container>
  )
}

