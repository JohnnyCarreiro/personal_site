import styled from 'styled-components'

interface TechDetailsProps{
  buttonColor: string
}

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem 6px 1rem 6px;
  line-height: 1.4;
`;

export const MediumText = styled.span`
  font: 700 1.125rem/1.5rem Roboto, sans-serif;
  text-transform: uppercase;
  color: ${({theme})=> theme.color.gray_900};
`

export const SmallText = styled.span`
  font: ${({theme})=> theme.texts.small_text};
  text-transform: uppercase;
  color: ${({theme})=> theme.color.gray_900};
`

export const RegularText = styled.span`
  font: ${({theme})=> theme.texts.main_text};
  text-transform: uppercase;
  color: ${({theme})=> theme.color.gray_900};
`

export const SpaceHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const KnowMoreButton = styled.button<TechDetailsProps>`
  display:none;
  padding: 10px 16px;
  background-color: ${props => props.buttonColor};
  color: ${({theme})=> theme.color.gray_900};
  text-decoration: uppercase;
  font: 700 1rem/1.25rem Roboto, sans-serif;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${props => props.buttonColor};
    border: 2px solid ${props => props.buttonColor};
  }
`
