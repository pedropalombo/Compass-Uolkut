import styles from "./FormAccount.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-orkut-simples.svg";

export const FormAccount = () => {
  return (
    <section className={styles.container_form}>
      <header className={styles.header}>
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
            />
          </label>
          <label>
            Digite seu email
            <input type="email" placeholder="JJJzezinho@gmail.com" />
          </label>
          <label>
            Digite sua data de nascimento
            <input type="date" name="date" id="date" />
          </label>
          <label>
            Crie uma senha
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Pelo menos 6 caracteres"
            />
          </label>
          <label>
            Digite a senha novamente
            <input type="password" name="password" id="password" />
          </label>
          <Link to={"/register/details"}>
            <button type="submit"> Continuar </button>
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
