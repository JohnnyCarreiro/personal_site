import Button from 'components/Button';
import { ReactNode } from 'react';

import { Container } from './styles';

interface MainHeroProps {
  children?: ReactNode;
}

export const MainHero:React.FC<MainHeroProps> = ({children, ...props}) => {
  return (
    <Container height="100%" bgImage="/images/main_hero.jpg"{...props} >
      <div  className="hero">
      <div className="mainHero">
        <h1>Sua empresa faz negócios online, ou está fora dos negócios?</h1>
          <hr/>
          <h2>
            Com o mundo cada vez mais digitalizado, não ter uma presença digital seria o mesmo que abrir sua empresa em meio ao deserto.
          </h2>
          <Button
            isPrimary
            primaryColor={false}
            text="Saiba mais"
            link="#"
            type="button"
          />
      </div>
      </div>
      {children && children}
    </Container>
  );
}
