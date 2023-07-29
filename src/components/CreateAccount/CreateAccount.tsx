import { FormAccount } from "../FormAccount/FormAccount";
import { Footer } from "../Footer";
import styles from "./CreateAccount.module.css";
import wallpaper from "../../assets/images/wallpaper.svg";

export const CreateAccount = () => {
  return (
    <div className={styles.login_container}>
      <main className={styles.main}>
        <article>
          <aside>
            <img src={wallpaper} alt="Three persons at the table smiling" />

            <p>
              Conecta-se aos seus amigos e familiares usando recados e mensagens
              instantâneas
            </p>
          </aside>
          <FormAccount />
        </article>
      </main>
      <Footer />
    </div>
  );
};
