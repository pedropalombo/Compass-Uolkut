import { Form, Link } from "react-router-dom";
import styles from "./FormAccount.module.css";

export const FormAccount = () => {
  return (
    <Form action="/register/details" className={styles.formContainer}>
      <fieldset className={styles.inputs_form_section}>
        <p>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="João da Silva Bernardo"
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            required
          />
        </p>
        <p>
          <label htmlFor="date">Data de Nascimento</label>
          <input type="date" id="date" required />
        </p>
        <p>
          <label htmlFor="password" id="city-state">
            Cidade / Estado
          </label>
          <input
            type="text"
            id="city-state"
            placeholder="Pernambuco - CE"
            required
          />
        </p>
        <p>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            minLength={8}
            required
          />
        </p>
        <p>
          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="********"
            required
            minLength={8}
          />
        </p>

        <button type="submit" className={styles.button_continue}>
          Continuar
        </button>

        <Link to="/">
          <button>"Já tenho uma conta "</button>
        </Link>
      </fieldset>
    </Form>
  );
};
