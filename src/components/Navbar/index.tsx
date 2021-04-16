import React from 'react'
import { FaCaretDown } from 'react-icons/fa'


import { Container } from './styles'

const Navbar: React.FC = () => {
  return (
  <Container>
    <div className="container">
      <input type="checkbox" name="" id="check" />
      <div className="logo-container">
        <a href="/"><h3 className="logo">CONNECT<span>GDN</span></h3></a>
      </div>

      <div className="nav-btn">
        <div className="nav-links">
          <ul>
            <li className="nav-link">
              <a href="/">Inicio</a>
            </li>
            <li className="nav-link" >
              <a href="/sobre" >Sobre</a>
            </li>
            <li className="nav-link">
              <a>Serviços<FaCaretDown /></a>
              <div className="dropdown">
                <ul>
                  <li className="dropdown-link">
                    <a href="/servicos">Projetos</a>
                  </li>
                  <li className="dropdown-link">
                    <a>Produtos<FaCaretDown /></a>
                    <div className="dropdown second">
                      <ul>
                        <li className="dropdown-link">
                          <a href="/produtos/energia_solar">Business Intelligence</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="/produtos/vidros_e_esquadrias">Marketing</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="/produtos/pisos_e_revestimentos">Branding - Marca</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="/produtos/terraplanagem_e_infraestrutura">Design</a>
                        </li>
                        {/* <li className="dropdown-link">
                          <a href="#">Mais <FaCaretDown /></a>
                          <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <a href="#">Link 1</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">Link 2</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">Link 3</a>
                            </li>
                            <div className="arrow"></div>
                          </ul>
                          </div>
                        </li> */}
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-link">
                    <a href="/servicos/solicite">Solicite uma Visita</a>
                  </li>
                  <div className="arrow"></div>
                </ul>
              </div>
            </li>
            <li className="nav-link">
              <a href="/contato">Contato</a>
            </li>
          </ul>
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
