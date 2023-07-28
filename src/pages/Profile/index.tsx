// import { Header } from "../../components/Header";
import { Header } from "../../components/Header";
import { ProfileInfo } from "../../components/ProfileInfo";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <Header.Root className="header__profile">
        <Header.Profile />
      </Header.Root>

      <main className={styles.main}>
        <section>
          <section>Solteiro, Brasil</section>
          <button>Editar meu perfil</button>
        </section>

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
