import styles from "./ImageLogin.module.css";

export const ImageLogin = () => {
  return (
    <section className={styles.section_image}>
      <img
        id={styles.image_walpaper}
        src="src\assets\images\wallpaper.svg"
        alt=""
      />
      <div className={styles.contaner_text}>
        <h2>
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </h2>
      </div>
    </section>
  );
};
