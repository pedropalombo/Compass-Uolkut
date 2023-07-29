import styles from "./FormAccount.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-orkut-simples.svg";

export const FormAccount = () => {
  return (
    <section className={styles.container_form}>
      <header className={styles.header_create}>
        <img src={logo} alt="" />
        <h2>Acesse o Orkut </h2>
      </header>
      <form>
        <fieldset className={styles.inputs_form_section}>
          <label>
            Digite seu nome Completo
            <input
              type="name"
              name="name"
              id="name"
              placeholder="José Josaias Junior"
              required
            />
          </label>
          <label>
            Digite seu email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="JJJzezinho@gmail.com"
              required
            />
          </label>
          <label>
            Digite sua data de nascimento
            <input type="date" name="date" id="date" required />
          </label>
          <label>
            Crie uma senha
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Pelo menos 6 caracteres"
              required
            />
          </label>
          <label>
            Digite a senha novamente
            <input type="password" name="password" id="password" required />
          </label>
          <Link to={"/register/details"}>
            <button
              type="submit"
              value="submit"
              className={styles.button_continue}
            >
              {" "}
              Continuar{" "}
            </button>
          </Link>
          <Link to={"/"}>
            <button type="submit" className={styles.button_back_login}>
              {" "}
              Já tenho uma conta{" "}
            </button>
          </Link>
        </fieldset>
      </form>
    </section>
  );
};
