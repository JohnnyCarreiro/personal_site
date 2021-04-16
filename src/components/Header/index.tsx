import { Container } from './styles';


export const Header:React.FC = ()=> {
  return (
    <Container>
      <div className="headerContent" >
        {/* <img src="/favicon.png" alt="My Blog Logo"/> */}
        <a className="logo" href="/">CONNECT<small>GDN</small></a>
        <nav>
          <a className="active" href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Services</a>
          <a href="">Contacts</a>
        </nav>
      </div>
    </Container>
    )
  };
  
  