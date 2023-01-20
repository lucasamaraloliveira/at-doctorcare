import * as S from "./style";
import Logo from "../../../assets/logo.svg"
import { HamburgerMenu } from "../HamburgerMenu";

export function Navbar() {
  return (
    <S.Container>
      <a href=""><img src={Logo} alt="Logo" /></a>
      <ul>
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
      </ul>
      <button>Agendar Consulta</button>
      
    </S.Container>
          
  );
}
