import styles from "./FormAccount.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-orkut-simples.svg";

export const FormAccount = () => {
  const navigate = useNavigate();
  function Formtest(event) {
    event.preventDefault();
    navigate("/register/details");
  }
  return (
    <section className={styles.container_form}>
      <header className={styles.header_create}>
        <img src={logo} alt="" />
        <h2>Acesse o Orkut </h2>
      </header>
      <form action="/register/details">
        <fieldset className={styles.inputs_form_section}>
          <label>
            Seu nome
            <input type="name" placeholder="Nome completo" required />
          </label>
          <label>
            E-mail
            <input type="email" placeholder="exemplo@exemplo.com" required />
          </label>
          <label>
            Data de nascimento
            <input type="date" required />
          </label>
          <label>
            Senha
            <input
              type="password"
              placeholder="Pelo menos 6 caracteres"
              minLength={6}
              required
            />
          </label>
          <label>
            Insira sua senha novamente
            <input type="password" required minLength={6} />
          </label>

          <button onSubmit={Formtest} className={styles.button_continue}>
            Continuar
          </button>
          <Link to={"/"}>
            <button className={styles.button_back_login}>
              {"Já tenho uma conta "}
            </button>
          </Link>
        </fieldset>
      </form>
    </section>
  );
};
