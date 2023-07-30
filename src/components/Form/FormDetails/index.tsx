import { Form, Link } from "react-router-dom";
import styles from "./FormDetails.module.css";

export const FormDetails = () => {
  return (
    <Form action="/profile">
      <fieldset>
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

        <button type="submit" className={styles.button_continue}>
          Finalizar cadastro
        </button>

        <Link to={"/register"}>
          <button className={styles.button_continue}>Voltar</button>
        </Link>
      </fieldset>
    </Form>
  );
};
