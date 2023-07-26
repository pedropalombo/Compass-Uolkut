import logo from "../../assets/images/logo-orkut.svg";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="" />
      </a>

      <nav className={styles.nav}>
        <ul>
          <li>Sobre o Orkut</li>
          <li>Centro de segurança</li>
        </ul>
      </nav>
    </header>
  );
};
