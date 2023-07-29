// import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { ProfileInfo } from "../../components/ProfileInfo";
import { UserProfile } from "../../components/UserProfile";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <Header.Root className="header__profile">
        <Header.Profile />
      </Header.Root>

      <main className={styles.main}>

        <section>
          <UserProfile />
          <Button isNavigation path="edit" text="Editar Perfil" />
        </section>

        <InputSearch className="isMobile" />

        <ProfileInfo />
        <section className={styles.isDesktop}>
          <section>amigos</section>
          <section>comunidade</section>
        </section>

        {/* Mobile */}
        <section className={`${styles.isMobile} ${styles.dois}`}>
          hahahah amigos
        </section>
        <section className={`${styles.isMobile} ${styles.quatro}`}>
          hoohohoh comunidade
        </section>
      </main>
    </div>
  );
};
