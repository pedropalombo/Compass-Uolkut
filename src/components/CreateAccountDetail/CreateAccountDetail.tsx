import { FormHobbies } from "../FormHobbies/FormHobbies";
import { HeaderRoot } from "../Header/HeaderRoot";
import { HeaderAuth } from "../Header/HeaderAuth";
import { Footer } from "../Footer";
import styles from "./CreateAccountDetail.module.css";
import wallpaper from "../../assets/images/wallpaper.svg";

export const CreateAccountDetail = () => {
  return (
    <div className={styles.hobbies_container}>
      <HeaderRoot className="header_auth">
        <HeaderAuth />
      </HeaderRoot>
      <main className={styles.main}>
        <article>
          <aside>
            <img src={wallpaper} alt="Three persons at the table smiling" />
            <p>
              Conecta-se aos seus amigos e familiares usando recados e mensagens
              instantâneas
            </p>
          </aside>
          <FormHobbies />
        </article>
      </main>
      <Footer />
    </div>
  );
};
