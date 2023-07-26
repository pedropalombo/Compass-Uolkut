import { Link } from "react-router-dom";
import styles from "./FormLogin.module.css";
import logoOrkut from "../../assets/images/logo-orkut-simples.svg";
export const FormLogin = () => {
  return (
    <section className={styles.container_form_login}>
      <img id={styles.logo_orkut} src={logoOrkut} alt="LOGO" />
      <h1 id={styles.title_login}>Acesse o Orkut </h1>
      <form id={styles.form_login}>
        <input
          className={styles.input_form}
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />
        <input
          className={styles.input_form}
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
        <button id={styles.form_button} type="submit">
          Entrar na conta
        </button>
      </form>
      <Link to="/register">
        <button id={styles.create_acount} type="submit">
          Criar uma conta
        </button>
      </Link>
      <a id={styles.forget_password} href="#">
        Esqueci a minha senha
      </a>
    </section>
  );
};
