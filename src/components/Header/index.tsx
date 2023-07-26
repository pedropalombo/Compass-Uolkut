import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.nav_bar}>
      <a href="#">
        <img src="src\assets\images\logo-orkut.svg" alt="LOGO" />
      </a>
      <div className={styles.container_pags}>
        <a className={styles.anchor} href="#">
          Sobre o Orkut
        </a>
        <a className={styles.anchor} href="#">
          Centro de segurança
        </a>
      </div>
    </header>
  );
};
