import styled from 'styled-components';

type MarginerProps = {
  margin?:string
}

export const HorizontalMargin = styled.span<MarginerProps>`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

export const VerticalMargin = styled.span<MarginerProps>`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
