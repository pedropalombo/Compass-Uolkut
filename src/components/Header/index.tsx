import logo from "../../assets/images/logo-orkut-simples.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logo} alt="" />
      </h1>

      <nav className={styles.nav}>
        <ul>
          <li>Sobre o Orkut</li>
          <li>Centro de segurança</li>
        </ul>
      </nav>
    </header>
  );
};
