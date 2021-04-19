import { Container } from './styles'


export const AboutSection:React.FC = () => {
  return (
    <Container>
      <div className="about" >
        <h1>Projetos </h1>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Atirei o pau no gatis, per gatis num morreus. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
      </div>
      <div className="container">
        <div className="imageContainer" >
          <img src="/images/backInBusiness.svg" alt="Back in Business"/>
        </div>
        <div className="mainContent">
          <div>
            <h2>De volta ao Jogo !</h2>
            <p>Saiba como sua empresa pode ter resultados excelente com uma administração mais eficiente e com estratégias que farão você voltar aos business!</p>
          </div>
          <div>
            <h2>Porquê me contratar</h2>
            <p>
              Sou um profissional dos  segmentos de desenvolvimento e marketing digital para a gestão inteligente de negócios. Desenvolvendo sites, aplicações sob-medida e campanhas de marketing.<br/>
              Os serviços oferecidos pro mim reduzem erros e possibilitam, conhecer os padrões comportamentais dos clientes, o que é determinante na oferta de um produto ou serviço, além de proporcionar um controle maior dos processos internos, da gestão e dos colaboradores da sua empresa.<br/>
              Outro ponto analisado foi que muitas empresas tentam alavancar seu faturamento através da busca por novos clientes, quando seus processos internos e sistemas, quando existem, estão desatualizados  e implantados de forma errada.<br/>
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

