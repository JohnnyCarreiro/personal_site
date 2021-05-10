import { Marginer } from "../../Marginer"
import {
  DetailsContainer,
  MediumText,
  KnowMoreButton,
  SmallText,
  SpaceHorizontalContainer
} from './styles'

interface TechDetailsProps {
  techSubtitle: string
  moreInfo?: string
  link?: string
  buttonColor: string
  cta:string
}

function TechDetails({ techSubtitle, moreInfo, link, cta, buttonColor  }: TechDetailsProps) {
  return (
    <DetailsContainer>
      <SmallText>{techSubtitle}</SmallText>
      <SpaceHorizontalContainer>
        {moreInfo && <MediumText>{moreInfo}</MediumText>}
      </SpaceHorizontalContainer>
      <Marginer direction="vertical" margin="1.2rem" />
      <SpaceHorizontalContainer>
        <SmallText>{cta}</SmallText>
        <KnowMoreButton type="button" buttonColor={buttonColor}>
          <a href={link ? link : '#'} target="_blank" rel="noopener noreferrer">More</a>
        </KnowMoreButton>
      </SpaceHorizontalContainer>
      <Marginer direction="vertical" margin="1.2rem" />
    </DetailsContainer>
  );
};

export default TechDetails
