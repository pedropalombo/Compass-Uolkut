import styles from "./HeaderProfile.module.css";

export const HeaderProfile = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Início</li>
          <li>Perfil</li>
          <li>Comunidades</li>
          <li>Jogos</li>
        </ul>
      </nav>

      <p>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar no Orkut"
        />
      </p>

      <div>
        <h3>Iuri Silva</h3>
        <span>↓</span>
      </div>
    </>
  );
};
