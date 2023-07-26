import { FormLogin } from "../FormLogin";
import { Header } from "../Header";
import { ImageLogin } from "../ImageLogin";

import styles from "./DisplayLogin.module.css";

export const DisplayLogin = () => {
  return (
    <section id={styles.container_display_login}>
      <Header />
      <ImageLogin />
      <FormLogin />
    </section>
  );
};
