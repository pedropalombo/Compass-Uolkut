import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-orkut-simples.svg";
import styles from "./FormLogin.module.css";

export const FormLogin = () => {
  return (
    <section className={styles.form_container}>
      <header className={styles.header}>
        <img src={logo} alt="" />
        <h2>Acesse o Orkut </h2>
      </header>

      <form>
        <fieldset className={styles.inputs_form_section}>
          <p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              required
            />
          </p>
          <p className={styles.checkbox_container}>
            <input type="checkbox" name="remember-password" />
            <label htmlFor="remember-password">Lembrar minha senha</label>
          </p>
        </fieldset>

        <fieldset className={styles.buttons_container}>
          <Link to="/profile">
            <button type="submit" className={styles.login_button}>
              Entrar na conta
            </button>
          </Link>

          <Link to="/register">
            <button type="submit" className={styles.signup_button}>
              Criar uma conta
            </button>
          </Link>

          <a href="#">Esqueci a minha senha</a>
        </fieldset>
      </form>
    </section>
  );
};
