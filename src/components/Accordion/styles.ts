import styled from 'styled-components'

export const AccordionSection = styled.div `
  display: flex;
  flex-direction: column;
  /* background: #eee; */

`
export const AccordionButton = styled.button`
  background:transparent;
  position:relative;
  color: ${({theme})=>theme.color.gray_200};
  cursor: pointer;
  padding: 1rem;;
  display: flex;
  align-items: center;
  justify-content:center;
  border: 1px solid ${({theme})=>theme.color.secondary};;
  border-radius:.5rem;
  outline: none;
  transition: filter 0.6s ease;

  & :hover,
  .active {
    filter: brightness(.8);
  }
  .accordion__title {
    font-weight: 400;
    font-size: 1.125rem;
    text-align: left;
    color: ${({theme})=>theme.color.secondary};
  }
  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
    font-size:2rem;
    color: ${({theme})=>theme.color.secondary};
  }
  .rotate {
    transform: rotate(90deg);
  }

`
export const Content = styled.div `
  background-color: ${({theme})=>theme.color.gray_900};
  overflow: auto;
  transition: max-height 0.6s ease;
  border-radius:.5rem;
  top:0;
`
export const Text = styled.div `
  font-weight: 400;
  font-size: 1rem;
  padding: 1.125rem;
  color: ${({theme})=>theme.color.gray_200};

  > h3 {
    line-height:2rem;
    margin:1.5rem 0;
  }
  > p {
    margin-bottom:1.25rem;
  }
`
