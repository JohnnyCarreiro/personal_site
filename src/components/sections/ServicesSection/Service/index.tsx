import { HTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface ServiceProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const  Service: React.FC<ServiceProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest} >
      {children}
    </Container>
  )
}

