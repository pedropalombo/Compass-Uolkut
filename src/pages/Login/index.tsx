import { Header } from "../../components/Header";
import { FormLogin } from "../../components/FormLogin";
import { Footer } from "../../components/Footer";
import wallpaper from "../../assets/images/wallpaper.svg";
import styles from "./Login.module.css";

export const DisplayLogin = () => {
  return (
    <div className={styles.login_container}>
      <Header />
      <main className={styles.main}>
        <article>
          <aside>
            <img src={wallpaper} alt="Three persons at the table smiling" />

            <p>
              Conecta-se aos seus amigos e familiares usando recados e mensagens
              instantâneas
            </p>
          </aside>
          <FormLogin />
        </article>
      </main>
      <Footer />
    </div>
  );
};
