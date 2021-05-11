import { ReactNode, useRef, useState } from "react"
import { useSpring, config, UseSpringProps } from "react-spring"


import {
  CardWrapper,
  TechContainer,
  CircleWrapper,
  Circle,
  TopContainer,
  BottomContainer,
  TechTitle,
  TechWrapper,
  Tech
} from './styles'
import TechDetails from './TechDetails'

const calc = (x:number, y:number, rect:DOMRect, p?:number, n?:number, s?:number) => [
  -(y - Number(rect?.top) - Number(rect?.height) /(p ? p : 2)) /(n ? n : 30),
  (x - Number(rect?.left) - Number(rect?.width) /(p ? p : 2)) /(n ? n : 30),
  (s ? s : 1.12),
]
const trans = (x:number, y:number, s:number) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface TechCardProps {
  children?: ReactNode
  techTitle: string
  techSubtitle: string
  moreInfo?: string
  cta:string
  link?: string
  bgColor: string
  buttonColor: string
  style?: UseSpringProps
}

function TechCard({
  children,
  techTitle,
  techSubtitle,
  moreInfo,
  cta,
  link,
  bgColor,
  buttonColor,
  style
}: TechCardProps) {

  const ref = useRef<HTMLDivElement>(null)
  const [xys, set] = useState([0, 0, 1])
  const props = useSpring({ xys, config: config['wobbly'] })

  return (
    <CardWrapper>
      <TechContainer
        ref={ref}
        style={{
          transform: props.xys.to(trans),
          ...style
        }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect()
          set(calc(e.clientX, e.clientY, rect as DOMRect, 2, 30, 1.05))
        }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle bgColor={bgColor} />
          </CircleWrapper>
          <TechWrapper>
            <Tech
            ref={ref}
              style={{
                transform: props.xys.to(trans)
              }}
              onMouseLeave={() => set([0, 0, 1])}
              onMouseMove={(e) => {
                const rect = ref.current?.getBoundingClientRect()
                set(calc(e.clientX, e.clientY, rect as DOMRect, 1, 2, 1.1 ))
              }}
            >
              {children}
            </Tech>
          </TechWrapper>
          <TechTitle>{techTitle}</TechTitle>
      </TopContainer>
      <BottomContainer>
        <TechDetails
          techSubtitle={techSubtitle}
          moreInfo={moreInfo}
          cta={cta}
          link={link}
          buttonColor={buttonColor}
        />
      </BottomContainer>
      </TechContainer>
    </CardWrapper>
  );
};

export default TechCard;
