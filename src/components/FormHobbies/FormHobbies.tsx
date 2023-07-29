import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-orkut-simples.svg";
import styles from "./FormHobbies.module.css";

export const FormHobbies = () => {
  const navigate = useNavigate();
  function Formtest(event) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <section className={styles.container_hobbies}>
      <header className={styles.header_hobbies}>
        <img src={logo} alt="" />
        <h2>Acesse o Orkut</h2>
      </header>
      <form action="/">
        <fieldset className={styles.inputs_form_section}>
          <div className={styles.scroll}>
            <label>
              Quem sou eu
              <textarea
                name=""
                id=""
                placeholder="Fale um pouco sobre você"
                required
              ></textarea>
            </label>
            <label>
              Cidade e Estado
              <input
                type="name"
                name=""
                id=""
                placeholder="Ex: Recife-PE"
                required
              />
            </label>
            <label>
              Interesses
              <input
                type="text"
                placeholder="Fale sobre as coisas que você gosta"
                required
              />
            </label>
            <label>
              Relacionamento
              <select required>
                <option disabled selected value="">
                  Selecione uma opção
                </option>
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Viúvo</option>
              </select>
            </label>
            <label>
              Tem filhos?
              <select required>
                <option disabled selected value="">
                  Selecione uma opção
                </option>
                <option> Sim</option>
                <option> Não</option>
              </select>
            </label>
            <label>
              Você fuma?
              <select required>
                <option disabled selected value="">
                  Selecione uma opção
                </option>
                <option> Sim</option>
                <option> Não</option>
                <option> Raramente</option>
              </select>
            </label>
            <label>
              Você bebe?
              <select required>
                <option disabled selected value="">
                  Selecione uma opção
                </option>
                <option> Sim</option>
                <option> Não</option>
                <option> Raramente</option>
              </select>
            </label>
            <label>
              Filmes Favoritos
              <textarea required />
            </label>
            <label>
              Músicas Favoritas
              <textarea required />
            </label>
          </div>

          <button onSubmit={Formtest} className={styles.button_continue}>
            Finalizar cadastro
          </button>

          <Link to={"/register"}>
            <button className={styles.button_continue}>Voltar</button>
          </Link>
        </fieldset>
      </form>
    </section>
  );
};
