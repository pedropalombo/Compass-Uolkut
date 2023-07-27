import styles from "./FormAccount.module.css";
import { ImageLogin } from "../ImageLogin";
import { Link } from "react-router-dom";

export const FormAccount = () => {
  return (
    <section className={styles.content_background}>
      <ImageLogin />
      <form className={styles.content_form}>
        <img src="../../assets/images/logo-orkut.svg" alt="" />
        <h2> Acesse o Orkut</h2>
        <label>
          Digite seu nome completo
          <input type="text" placeholder="Ex: Zé José Josaias" />
        </label>
        <label>
          Digite seu e-mail
          <input type="email" placeholder="zezinhozeze@gmail.com" />
        </label>
        <label>
          Selecione sua data de nascimento
          <input type="date" />
        </label>
        <label>
          Digite sua cidade e estado
          <input type="text" placeholder="Ex: Recife-PE" />
        </label>
        <label>
          Digite sua senha
          <input
            type="password"
            placeholder="Mínimo de 6 caracteres"
            minLength={8}
          />
        </label>
        <label>
          Confirme sua senha
          <input type="password" />
        </label>
        <br />
        <label className={styles.checkbox_terms}>
          Eu concordo com todos os termos de uso
          <input type="checkbox" className={styles.checkbox_input} />
        </label>
        <Link to={"/register/details"}>
          <button type="submit"> Continuar </button>
        </Link>
      </form>
    </section>
  );
};
