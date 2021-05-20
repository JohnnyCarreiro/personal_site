import { useRouter } from 'next/router';
import React from 'react'

import { Container } from './styles'

const Navbar: React.FC = () => {
  const { locale } = useRouter()
  return (
  <Container>
    <div className="container">
      <input type="checkbox" name="" id="check" />
      <div className="logo-container">
        <a href="/"><h3 className="logo">Johnny<span>Carreiro</span></h3></a>
      </div>

      <div className="nav-btn">
        <div className="nav-links">
          {
            locale === 'en-us'
              ? (
                <ul>
                  <li className="nav-link">
                    <a href="/">Home</a>
                  </li>
                  <li className="nav-link" >
                    <a href="#about" >About</a>
                  </li>
                  <li className="nav-link">
                    <a href="#projects" >Projects</a>
                  </li>
                  <li className="nav-link">
                    <a href="#services" >Skills</a>
                  </li>
                  <li className="nav-link">
                    <a href="#contact">Contacts</a>
                  </li>
                </ul>
              )
              : (
                <ul>
                  <li className="nav-link">
                    <a href="/">Inicio</a>
                  </li>
                  <li className="nav-link" >
                    <a href="#about" >Sobre</a>
                  </li>
                  <li className="nav-link">
                    <a href="#projects" >Projetos</a>
                  </li>
                  <li className="nav-link">
                    <a href="#services" >Serviços</a>
                  </li>
                  <li className="nav-link">
                    <a href="#contact">Contatos</a>
                  </li>
                </ul>
              )
          }
        </div>

        {/* <div className="log-sign">
          <a href="#" className="btn transparent">Log in</a>
          <a href="#" className="btn solid">Sign up</a>
        </div> */}
      </div>

      <div className="hamburger-menu-container">
        <div className="hamburger-menu">
          <div></div>
        </div>
      </div>
    </div>
  </Container>
);
};

export default Navbar
