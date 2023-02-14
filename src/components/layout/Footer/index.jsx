import * as S from "./style";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import Logo from "../../../assets/logoBranca.svg"

export function Footer() {
  return (
    <S.Container>
      <div>
        <a href=""><img src={Logo} alt="Logo" /></a>
        <p>@2022 - DoctorCare.</p>
        <p>Todos os direitos reservados.</p>
      </div>

      <div>
        <S.SocialMedia>
          <li>
            <a href="#"><FiInstagram /></a>
          </li>
          <li>
            <a href="#"><FiFacebook /></a>
          </li>
          <li>
            <a href="#"><FiYoutube /></a>
          </li>
        </S.SocialMedia>
      </div>

    </S.Container>
  )
}

