import styles from "./ProfileUser.module.css";
import imageUser from "../../assets/images/profileIcon.svg";
export const ProfileUser = () => {
  return (
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div id={styles.circle_image_user}>
          <img id={styles.image_user} src={imageUser} alt="" />
        </div>
        <p id={styles.name_user}>Iuri Silva</p>
        <p id={styles.desc_user}>Solteiro, Brasil</p>
      </div>
      <div id={styles.edit_profile}>
        <p id={styles.text_edit_profile}>Editar meu perfil</p>
      </div>
    </section>
  );
};
