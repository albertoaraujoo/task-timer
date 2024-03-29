import { HeaderContainer } from "./styles";
import timerLogo from "../../assets/timer-logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={timerLogo} alt="clock logo" width={"30px"} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Task History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
