import styles from "./Community.module.css";

export function Community() {
  interface DataStandard {
    title: string;
    src: string;
  }

  const sectionContent: DataStandard[] = [
    {
      title: "Carros",
      src: "src/assets/images/icons/community/cars.png",
    },
    {
      title: "Desenhos",
      src: "src/assets/images/icons/community/toons.png",
    },
    {
      title: "Crazy",
      src: "src/assets/images/icons/community/crazy.png",
    },
    {
      title: "Fofos",
      src: "src/assets/images/icons/community/cute.png",
    },
    {
      title: "Animes",
      src: "src/assets/images/icons/community/anime.png",
    },
    {
      title: "Leitura",
      src: "src/assets/images/icons/community/reading.png",
    },
    {
      title: "Meu ovo",
      src: "src/assets/images/icons/community/myEggs.png",
    },
    {
      title: "My books",
      src: "src/assets/images/icons/community/reading.png",
    },
    {
      title: "Cafeeee",
      src: "src/assets/images/icons/community/coffee.png",
    },
  ];

  //renders data as elements
  const renderSectionContent = () => {
    return sectionContent.map((element, key) => {
      return (
        <div key={key} className={styles.contentBox}>
          <img className={styles.contentIcon} src={element.src} />
          <p className={styles.contentTitle}>{element.title}</p>
        </div>
      );
    });
  };

  return (
    <section className={styles.communityContainer}>
      <section className={styles.topicSection}>
        <span className={styles.categoryName}>Comunidade (number)</span>

        <button
          className={styles.seeAllBtn}
          onClick={() => {
            alert("calma la ;)");
          }}
        >
          Ver todos
        </button>
      </section>

      <section className={styles.contentSection}>
        {renderSectionContent()}
      </section>
    </section>
  );
}
