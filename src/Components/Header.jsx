import React from "react";
import styles from "./Header.module.css";
import Logo from "../Assets/logoo.png";
import { NavLink } from "react-router-dom";
import UseMobile from "../Hooks/UseMobile";
import { useLocation } from "react-router-dom";

const Header = () => {
  const mobile = UseMobile("(max-width:700px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </NavLink>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <div>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink className={styles.escrevase} to="/logincriar">
            Escreva-se
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
