import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormAccount.module.css";

export const FormAccount = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("details");
  };

  //formats options on "Relacionamento"
  const formatString = (option: string) => {
    return option.charAt(0).toUpperCase() + option.slice(1);
  };

  //renders elements for "Relacionamento" selection
  const renderRelationship = () => {
    const relationshipOptions = [
      "solteiro",
      "casado",
      "divorciado",
      "namorando",
      "preocupado",
    ];

    return relationshipOptions.map((element, key) => {
      return (
        <option key={key} value={key}>
          {formatString(element)}
        </option>
      );
    });
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <fieldset>
        <p>
          <input type="email" id="email" placeholder="Email" required />
        </p>
        <p>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            minLength={8}
            required
          />
        </p>
        <p>
          <input type="text" id="name" placeholder="Nome" required />
        </p>

        <section className={styles.footer_inputs}>
          <section className={styles.left_container}>
            <p>
              <input value="DD/MM/AAAA" type="date" id="date" required />
            </p>
            <p className={styles.date_basis}>DD/MM/AAAA</p>
            <p>
              <input type="text" id="city-state" placeholder="País" required />
            </p>
          </section>

          <section className={styles.right_container}>
            <p>
              <input type="text" id="name" placeholder="Profissão" />
            </p>
            <p>
              <input
                type="text"
                id="city-state"
                placeholder="Cidade"
                required
              />
            </p>

            <select>
              <option value="" selected disabled hidden>
                Relacionamento
              </option>

              {renderRelationship()}
            </select>
          </section>
        </section>
        
      </fieldset>

      <fieldset>
        <button className={styles.button_continue}>Criar Conta</button>
      </fieldset>
    </Form>
  );
};
