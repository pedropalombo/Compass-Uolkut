import { FormLogin } from "../FormLogin";
import { ImageLogin } from "../ImageLogin";
import styles from "./DisplayLogin.module.css";

export const DisplayLogin = () => {
  return (
    <section id={styles.container_display_login}>
      <ImageLogin />
      <FormLogin />
    </section>
  );
};
