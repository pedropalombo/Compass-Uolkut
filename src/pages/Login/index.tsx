import { Footer } from "../../components/Footer";
import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";
import { ImageLogin } from "../../components/ImageLogin";

import styles from "./DisplayLogin.module.css";

export const DisplayLogin = () => {
  return (
    <section id={styles.container_display_login}>
      <Header />
      <ImageLogin />
      <FormLogin />
      <Footer />
    </section>
  );
};
