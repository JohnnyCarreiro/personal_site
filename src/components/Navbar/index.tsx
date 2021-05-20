import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react'

import { Container } from './styles'

const Navbar: React.FC = () => {
  const router  = useRouter()
  const { locale } = router

  const changeLanguage = (e:ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale });
  }
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
                  <div className="lang_switch" >
                    <select
                      onChange={changeLanguage}
                      defaultValue={locale}
                      className="select"
                    >
                      <option className="text-black" value="en-us">EN  🇺🇸</option>
                      <option className="text-black" value="pt-br">PT  🇧🇷</option>
                    </select>
                  </div>
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
                  <div className="lang_switch" >
                    <select
                      onChange={changeLanguage}
                      defaultValue={locale}
                      className="select"
                    >
                      <option className="text-black" value="en-us">EN  🇺🇸</option>
                      <option className="text-black" value="pt-br">PT  🇧🇷</option>
                    </select>
                  </div>
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
