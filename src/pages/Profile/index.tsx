// import { Header } from "../../components/Header";
import { Community } from "../../components/Community";
import { Friends } from "../../components/Friends";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { ProfileInfo } from "../../components/ProfileInfo";
import { UserProfile } from "../../components/UserProfile";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <Header.Root>
        <Header.Profile />
      </Header.Root>

      <main className={styles.main}>
        <InputSearch className="isMobile" />

        <section>
          <UserProfile />
          <Button isNavigation path="edit" text="Editar Perfil" />

          <section className={`${styles.isMobile} ${styles.dois}`}>
            <Friends />
          </section>
        </section>

        <InputSearch className="isMobile" />

        <ProfileInfo />
        <section className={`${styles.isDesktop} ${styles.rightContainer}`}>
          <section className={styles.sideCategory}>
            <Friends />
          </section>

          <section className={styles.sideCategory}>
            <Community />
          </section>
        </section>

        {/* Mobile */}
        <section className={`${styles.isMobile} ${styles.dois}`}>
          <Community />
        </section>
      </main>
    </div>
  );
};
