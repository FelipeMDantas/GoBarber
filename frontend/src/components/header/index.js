import { Link } from "react-router-dom";
import Notifications from '~/components/Notifications'
import logo from "~/assets/logo-purple.svg";
import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Felipe</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="Felipe"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}