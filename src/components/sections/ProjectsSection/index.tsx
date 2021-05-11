import { useSpring, a } from '@react-spring/web'
import Accordion from 'components/Accordion'
import { AnimatedImg } from 'components/AnimatedImg'
import { useVisibility } from 'utils/useVisibility'
import { Project } from './Project'
import { Container } from './styles'


export const ProjectsSection:React.FC = () => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  const animation = useSpring({
    from: { opacity: 0, scale: 0, config:{ easing:true } },
    to: async (next, _) => {
      isVisible && await next({ opacity: 1, scale:1, delay: 400 })
    }
  })
  return (
    <Container ref={currentElement} >
      <a.div className="projects" style={animation} >
        <h2>Projetos </h2>
        <h4>
          Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.
        </h4>
      </a.div>
      <Project className="container" direction={'Right'} animation={'toRight'} >
        <AnimatedImg
          className="imageContainer"
          image="/images/starter.svg"
          alt="Start Projects image"
        />
        <div className="mainContent">
          <h3>Projeto Inicial</h3>
            <p>
              Precisa começar ou formalizar sua empresa, este projeto existe para que você possa contar com soluções completas para o desenvolvimento e crescimento da sua maca.
            </p>
            <Accordion title="Saiba mais" >
              <h3>Desenvolvimento da sua marca</h3>
              <p>
                Antes de começar ou formalizar qualquer empresa é necessário se planejar e desenvolver sua marca. Isso vai além de uma logo bonita e um nome legal , sua marca é coisa mais importante da sua empresa, será a primeira coisa a ser vista pelo seu cliente e ela tem que ser impactante e transmitir de forma eficiente e clara o que sua empresa representa.<br/>
                Mas só uma marca bem feita não garante o seu sucesso, planejamento é essencial. Para isso iremos te guiar em como você pode montar um planejamento estratégico e um plano de negócio, que com certeza será um diferencial na sua escalada para o sucesso.<br/>
                Tenha certeza que você vai começar seu empreendimento com uma mapa e uma bússola.
              </p>
            </Accordion>
          </div>
      </Project>
      <Project direction="Left" animation={'toLeft'} className="container">
        <AnimatedImg
          className="imageContainer"
          image="/images/small.svg"
          alt="Small Projects Image"
        />
        <div className="mainContent">
          <h3>Pequenos projetos</h3>
          <p>
            Esses projetos destinam-se a aqueles clientes que desejam possuir sua própria plataforma, seus dados e veem a necessidade no futuro de poder personalizar toda sua experiência de oferta de produtos e serviços.
          </p>
          <Accordion title="Saiba mais" >
            <h3>Sites e materias para marketing</h3>
            <p>
              Este projeto é para clientes que desejam possuir suas plataformas e seus dados e veem a necessidade de no futuro desenvolver toda a experiência de oferta de produtos e serviços de forma customizada.<br/>
              Para este projeto, partimos do site,  materiais de apoio, como papelarias, modelos de e-mail marketing e templates para marketing em redes sociais, configurações de contas de e-mail e consultorias para que possa fazer a gestão de suas próprias campanhas publicitárias.<br/>
              Esse tipo de projeto fica evidente que você tem um produto básico bem especificado, de sua propriedade e por um preço fixo, enquanto pode fazer as alterações de que precisa. e você vai começar seu empreendimento com uma mapa e uma bússola.
            </p>
          </Accordion>
        </div>
      </Project>
      <Project direction="Right" animation="toRight" className="container">
        <AnimatedImg
          className="imageContainer"
          image="/images/medium.svg"
          alt="Medium Projects Image"
        />
        <div className="mainContent">
          <h3>Médios projetos</h3>
          <p>
            À medida que as vendas aumentam e o pessoal aumenta, surge uma maior necessidade de automação. Os detalhes se tornam mais importantes à medida que o número de visitantes aumenta, e pequenas coisas podem fazer uma grande diferença.
          </p>
          <Accordion title="Saiba mais" >
            <h3>E-commerce,  marketing e Soluções mais complexas</h3>
            <p>
              Durante o crescimento e desenvolvimento de um website, surge uma maior necessidade de automação, possíveis integrações com diferentes sistemas e coloca uma pressão mais significativa nas operações diárias. Os detalhes tornam-se cada vez mais críticos à medida que aumenta o número de visitantes.<br/>
              Os projetos são uma colaboração estreita entre nós, onde usarei um gerenciamento inteligente de projetos para poder tomar decisões mais eficientes sobre o consumo de tempo e a priorização durante o projeto. Aliados a treinamentos para suas equipes, como sistemas novos integrados, lapidação das técnicas de vendas e implementação e acompanhamento de processo internos e fluxo de informações entre diferentes setores.<br/>
              No âmbito do marketing digital, definiremos juntamente o budget a ser investido e assumiremos a produção de conteúdo dedicados, planejamento e execução das  campanhas.<br/>
              Também é de costume ter uma quantidade de tempo planejada a cada mês, um banco de horas, não cumulativo, que usamos para fazer melhorias contínuas dentro da estrutura de nosso desenvolvimento posterior  ao lançamento do projeto, produção de conteúdos extras, solução de problemas e situações inesperadas que possam surgir no decorrer de nossa prestação de serviços.
            </p>
          </Accordion>
        </div>
      </Project>
      <Project direction="Left" animation="toLeft" className="container">
        <AnimatedImg
          className="imageContainer"
          image="/images/large.svg"
          alt="Enterprise Projects Image"
        />
        <div className="mainContent">
          <h3>Grandes projetos</h3>
          <p>
            Quando uma empresa está aqui, percebe que, para obter o melhor resultado possível para o seu negócio, a equipe precisa das melhores ferramentas possíveis e essas ferramentas muitas vezes precisam ser personalizadas.
          </p>
          <Accordion title="Saiba mais" >
            <h3>Desenvolvimento de Aplicações para transformação digital e automação</h3>
            <p>
              As pessoas não devem trabalhar com tarefas repetitivas e administrativas, mas, em vez disso, deveriam ter a permissão de usar sua humanidade e criatividade para criar laços fortes com outras pessoas, clientes, fornecedores e fazer coisas que são difíceis de automatizar. Pode ser difícil sem ferramentas feitas sob medida, projetadas com uma boa experiência do usuário.<br/>
              Somente quando essas ferramentas personalizadas estão disponíveis é que o potencial do negócio pode realmente se concretizar e a produtividade geralmente aumenta significativamente.<br/>
              Nestes projetos, trabalhamos, principalmente, com o framework e tecnologias para desenvolvimento de sites e aplicativos multiplataforma. Geralmente, eles são integrados ao sistemas já existentes em sua empresa, mas podem funcionam como aplicativos totalmente independentes.<br/>
              Esses projetos são grandes e complexos por natureza e têm várias dependências complicadas. Portanto, essas colaborações são contínuas e focadas na corrida e na solução de problemas complicados de negócios, juntos.<br/>
              Ou seja, este projeto destina-se a desenvolvimento e integração continua, para que possamos ter sistemas sempre atualizados, mais seguros e performáticos, proporcionando uma entrega melhor de nossas soluções, visando sempre a marca e a experiência dos usuários.<br/>
              É comum termos um período planejado de tempo a cada mês para fazer reuniões e melhorias contínuas dentro da estrutura de nosso desenvolvimento, posterior ao lançamento do projeto, produção de conteúdos extras, solução de problemas e situações inesperadas que possam surgir no decorrer de nossa prestação de serviços.
            </p>
          </Accordion>
        </div>
      </Project>
    </Container>
  )
}

