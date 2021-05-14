import { ReactNode, HTMLAttributes } from 'react'
import { useSpring, a } from '@react-spring/web'

import { useVisibility } from 'utils/useVisibility'
import { Container } from './styles'

interface ProjectProps extends HTMLAttributes<HTMLDivElement>{
  children?: ReactNode
  direction: 'Right' | 'Left'
  animation?: 'toRight' | 'toLeft'
}

export const Project:React.FC<ProjectProps> = ({
  children,
  direction,
  animation,
  ...rest
}) => {

  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const animationToRight = useSpring({
    from: { x: -800,opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ x: 0,opacity: 1, scale:1, delay: 400 })
    }
  })
  const animationToLeft = useSpring({
    from: { x: 800,opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ x: 0,opacity: 1, scale:1, delay: 400 })
    }
  })
  return (
    <Container direction={direction} >
      <a.div ref={currentElement} style={animation === 'toRight' ? animationToRight : animationToLeft} {...rest}>
        {children}
      </a.div>
    </Container>
);
};


