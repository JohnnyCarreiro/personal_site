import Button from 'components/Button'
import { Container } from './styles'


export const ProjectsSection:React.FC = () => {
  return (
    <Container>
      <div className="projects" >
        <h1>Projetos </h1>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Atirei o pau no gatis, per gatis num morreus. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
      </div>
      <div className="container1">
        <div className="imageContainer1" >
          <img src="/images/starter.svg" alt="Back in Business"/>
        </div>
        <div className="mainContent1">
          <h2>Projeto Inicial</h2>
          <p>
            Precisa começar ou formalizar sua empresa, este projeto existe para que você possa contar com soluções completas para o desenvolvimento e crescimento da sua maca.
          </p>
          <Button
            isPrimary={false}
            primaryColor={false}
            text="Saiba mais"
            link="#"
            type="button"
          />
        </div>
      </div>

      <div className="container2">
        <div className="imageContainer2" >
          <img src="/images/small.svg" alt="Back in Business"/>
        </div>
        <div className="mainContent2">
          <h2>Pequenos projetos</h2>
          <p>
            Esses projetos destinam-se a aqueles clientes que desejam possuir sua própria plataforma, seus dados e veem a necessidade no futuro de poder personalizar toda sua experiência de oferta de produtos e serviços.
          </p>
          <Button
            isPrimary={false}
            primaryColor={false}
            text="Saiba mais"
            link="#"
            type="button"
          />
        </div>
      </div>

      <div className="container3">
        <div className="imageContainer3" >
          <img src="/images/medium.svg" alt="Back in Business"/>
        </div>
        <div className="mainContent3">
          <h2>Médios projetos</h2>
          <p>
            À medida que as vendas aumentam e o pessoal aumenta, surge uma maior necessidade de automação. Os detalhes se tornam mais importantes à medida que o número de visitantes aumenta, e pequenas coisas podem fazer uma grande diferença.
          </p>
          <Button
            isPrimary={false}
            primaryColor={false}
            text="Saiba mais"
            link="#"
            type="button"
          />
        </div>
      </div>

      <div className="container4">
        <div className="imageContainer4" >
          <img src="/images/large.svg" alt="Back in Business"/>
        </div>
        <div className="mainContent4">
          <h2>Grandes projetos</h2>
          <p>
            Quando uma empresa está aqui, percebe que, para obter o melhor resultado possível para o seu negócio, a equipe precisa das melhores ferramentas possíveis e essas ferramentas muitas vezes precisam ser personalizadas.
          </p>
          <Button
            isPrimary={false}
            primaryColor={false}
            text="Saiba mais"
            link="#"
            type="button"
          />
        </div>
      </div>
    </Container>
  )
}

