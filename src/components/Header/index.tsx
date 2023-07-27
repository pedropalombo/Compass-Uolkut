import logo from "../../assets/images/logo-orkut.svg";
import zoom from "../../assets/images/MagnifyingGlass.svg";
import styles from "./Header.module.css";
import profileIcon from "../../assets/images/profileIcon.svg";
import arrowDown from "../../assets/images/CaretDown.svg";
export const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoIcon}>
        <img src={logo} alt="" />
      </h1>

      <nav className={styles.nav}>
        {props.page.includes("profile") &&
          <ul className={styles.navOptions}>
            <li className={styles.option}>Início</li>
            <li className={styles.option}>Perfil</li>
            <li className={styles.option}>Comunidade</li>
            <li className={styles.option}>Jogos</li>

            <div className={styles.inputContainer}>
              <img className={styles.lensIcon} src={zoom} />
              <input
                className={styles.searchInput}
                placeholder="Procurar no Orkut"
              />
            </div>

            <div className={styles.userSection}>
              <img className={styles.userIcon} src={profileIcon} />

              <span className={styles.userName}>Testaroni</span>

              <img src={arrowDown} />
            </div>

          </ul>
        }
        {!props.page.includes("profile") &&
          <ul>
            <li>Sobre o Orkut</li>
            <li>Centro de segurança</li>
          </ul>
        }
      </nav>
    </header>
  );
};
