import { HTMLAttributes, ReactNode, useRef, useState } from 'react'
import { a, config, useSpring } from '@react-spring/web'

const calc = (x:number, y:number, rect:DOMRect, p?:number, n?:number, s?:number) => [
  -(y - Number(rect?.top) - Number(rect?.height) /(p ? p : 2)) /(n ? n : 30),
  (x - Number(rect?.left) - Number(rect?.width) /(p ? p : 2)) /(n ? n : 30),
  (s ? s : 1.12),
]
const trans = (x:number, y:number, s:number) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface AnimatedImgProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  image: string
  alt: string
}

function AnimatedImg({ children,image, alt, ...rest }: AnimatedImgProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [xys, set] = useState([0, 0, 1])
  const props = useSpring({ xys, config: config['wobbly'] })
  return (
    <a.div
      ref={ref}
      style={{
        transform: props.xys.to(trans),
      }}
      onMouseLeave={() => set([0, 0, 1])}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        set(calc(e.clientX, e.clientY, rect as DOMRect, 2, 30, 1.05))
      }}
      {...rest}
    >
      <img src={image} alt={alt} />
    </a.div>
  );
};

export default AnimatedImg;
