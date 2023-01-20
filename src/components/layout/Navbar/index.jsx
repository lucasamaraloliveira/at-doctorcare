import * as S from "./style";


export function Navbar() {
  return (
    <S.Container>
      <S.BoxList>
        <li>
          <a className="teste" href="#">Fernanda Selvagem</a>
        </li>
        <li>
          <a href="#">Marcelo Pivete Master</a>
        </li>
        <li>
          <a href="#">Lucas já começou</a>
        </li>
        <li>
          <a href="#">Não começa nunca...</a>
        </li>
      </S.BoxList>
    </S.Container>
  );
}
