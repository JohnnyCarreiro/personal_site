import { ReactNode } from 'react'

import { HorizontalMargin, VerticalMargin } from './styles'

type MarginerProps = {
  direction: string
  margin: string
  children?: ReactNode
}

export function Marginer(props:MarginerProps) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};
