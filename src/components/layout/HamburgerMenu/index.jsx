import React, { useState } from 'react';
import * as S from "./style";
import { FiMenu,FiX, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';


export function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 600 });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      {isTabletOrMobile && (
        <>
            <S.Hamburguer onClick={toggleMenu}>
              <span><FiMenu/></span>
            </S.Hamburguer>
          {menuOpen && (
            <S.MenuOpen>
              <button className="close-button" onClick={toggleMenu}><FiX/></button>
              <li>
          <a className="teste" href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Depoimentos</a>
        </li>
        <button className='schedule-now'>Agende sua Consulta</button>
        <S.SocialMedia>   
        <li>
          <a href="#"><FiInstagram/></a>
        </li>
        <li>
          <a href="#"><FiFacebook/></a>
        </li>
        <li>
          <a href="#"><FiYoutube/></a>
        </li>
        </S.SocialMedia> 

            </S.MenuOpen>
            
          )}
        </>
      )}
    </div>
  );
}

