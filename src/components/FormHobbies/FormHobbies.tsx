import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-orkut-simples.svg";
import styles from "./FormHobbies.module.css";

export const FormHobbies = () => {
  return (
    <section className={styles.container_hobbies}>
      <header className={styles.header_hobbies}>
        <img src={logo} alt="" />
        <h2>Acesse o Orkut</h2>
      </header>
      <form>
        <fieldset className={styles.inputs_form_section}>
          <div className={styles.scroll}>
            <label>
              Quem sou eu
              <textarea
                name=""
                id=""
                placeholder="Fale um pouco sobre você"
              ></textarea>
            </label>
            <label>
              Minha Cidade e Estado
              <input type="name" name="" id="" placeholder="Ex: Recife-PE" />
            </label>
            <label>
              Interesses
              <input
                type="text"
                placeholder="Fale sobre seus hobbies e as coisa que você gosta"
              />
            </label>
            <label>
              Relacionamento
              <select name="" id="">
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Viúvo</option>
              </select>
            </label>
            <label>
              Tem filhos?
              <select name="" id="">
                <option value=""> Sim</option>
                <option value=""> Não</option>
              </select>
            </label>
            <label>
              Você fuma?
              <select name="" id="">
                <option value=""> Sim</option>
                <option value=""> Não</option>
                <option value=""> Raramente</option>
              </select>
            </label>
            <label>
              Você bebe?
              <select name="" id="">
                <option value=""> Sim</option>
                <option value=""> Não</option>
                <option value=""> Raramente</option>
              </select>
            </label>
            <label>
              Filmes Favoritos
              <textarea></textarea>
            </label>
            <label>
              Músicas Favoritas
              <textarea name="" id=""></textarea>
            </label>
          </div>
          <Link to={"/"}>
            <button type="submit" className={styles.button_continue}>
              Finalizar cadastro
            </button>
          </Link>
          <Link to={"/register"}>
            <button className={styles.button_continue}>Voltar</button>
          </Link>
        </fieldset>
      </form>
    </section>
  );
};
