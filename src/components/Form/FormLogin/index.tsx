import { Form, Link } from "react-router-dom";
import styles from "./FormLogin.module.css";

export const FormLogin = () => {
  return (
    <Form method="get" action="/profile">
      <fieldset>
        <p>
          <input type="email" placeholder="E-mail" required />
        </p>
        <p>
          <input type="password" placeholder="Senha" required />
        </p>
        <p className={styles.checkbox_container}>
          <input type="checkbox" name="remember-password" />
          <label htmlFor="remember-password">Lembrar minha senha</label>
        </p>
      </fieldset>

      <fieldset className={styles.buttons_container}>
        <button type="submit" className={styles.login_button}>
          Entrar na conta
        </button>

        <Link to="/register">
          <button className={styles.signup_button}>Criar uma conta</button>
        </Link>

        <a href="#">Esqueci a minha senha</a>
      </fieldset>
    </Form>
  );
};
