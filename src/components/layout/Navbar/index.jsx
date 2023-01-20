import * as S from "./style";
import Logo from "../../../assets/logo.svg"


export function Navbar() {
  return (
    <S.Container>
      <img src={Logo} alt="Logo" />
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
