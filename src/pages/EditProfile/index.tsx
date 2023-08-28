import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import styles from "./EditProfile.module.css";

export const EditProfile = () => {
  return (
    <div className={styles.profile_container}>
      <Header.Root>
        <Header.Edit />
      </Header.Root>

      <section className={styles.container_all_elements}>
        <div className={styles.container_user_profile_mobile}>
          <UserProfile profile={true} />
        </div>
        <section className={styles.container_user_edit}>
          <span className={styles.topic_text}>Editar informações</span>
          <dl className={styles.user_details}>
            <div>
              <input 
                id="userCareer" 
                className={styles.inputField} 
                placeholder="Profissão" 
              />
            </div>
            <div>
              <input 
                id="userCity" 
                className={styles.inputField} 
                placeholder="Cidade" 
              />
            </div>
            <div>
              <input 
                id="userCountry" 
                className={styles.inputField} 
                placeholder="País" 
              />
            </div>
            <div>
              <input
                id="userBirthday"
                className={styles.inputField}
                placeholder="DD/MM/AAAA"
                type="date"
              />
            </div>
            <div>
              <input className={styles.inputField} placeholder="Senha" />
            </div>
            <div>
              <input
                className={styles.inputField}
                placeholder="Repetir Senha"
              />
            </div>
            <div>
              <input
                className={styles.inputField}
                placeholder="Relacionamento"
              />
            </div>
          </dl>

          <section className={styles.save_btn_container}>
            <Button />
          </section>
          
        </section>

        <section className={styles.container_elements_profile}>
          <div className={styles.container_profile}>
            <UserProfile props={true} />
            {/*<Button />*/}
          </div>
          <div className={styles.container_profile_mobile}>
            <Button />
          </div>
        </section>
      </section>

    </div>
  );
};
