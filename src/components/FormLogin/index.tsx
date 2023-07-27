import styles from "./FormLogin.module.css";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  return (
    <section className={styles.container_form_login}>
      <div id={styles.circle}></div>
      <h1 id={styles.title_login}>Acesse o Orkut </h1>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          required
        />
        <div className={styles.container_checkbox}>
          <input type="checkbox" name="checkbox" id={styles.checkbox} />
          <label htmlFor="checkbox" id={styles.remember_password}>
            Lembrar minha senha
          </label>
        </div>
        <button type="submit">Entrar na conta</button>
        <Link to="/register">
          <button id={styles.create_acount} type="submit">
            Criar uma conta
          </button>
        </Link>
      </form>
      <a id={styles.forget_password} href="#">
        Esqueci a minha senha
      </a>
    </section>
  );
};
