import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormLogin.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../firebase";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCrendential) => {
        console.log(useCrendential);

        navigate("profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formLoginContainer}>
      <fieldset>
        <p>
          <input
            value={email}
            type="email"
            placeholder="E-mail"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </p>
        <p>
          <input
            value={password}
            type="password"
            placeholder="Senha"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </p>
        <p className={styles.checkboxContainer}>
          <input type="checkbox" name="remember-password" />
          <label htmlFor="remember-password">Lembrar minha senha</label>
        </p>
      </fieldset>

      <fieldset>
        <button className={styles.button_login}>Entrar na conta</button>

        <Link to="/register">
          <button className={styles.button_register}>Criar uma conta</button>
        </Link>

        <a href="#">Esqueci a minha senha</a>
      </fieldset>
    </Form>
  );
};
