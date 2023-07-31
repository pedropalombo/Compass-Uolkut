import styles from "./Friends.module.css";

export function Friends() {
  interface DataStandard {
    title: string;
    src: string;
  }

  const sectionContent: DataStandard[] = [
    {
      title: "Fernando",
      src: "src/assets/images/icons/friends/fernando.png",
    },
    {
      title: "Ana",
      src: "src/assets/images/icons/friends/ana.png",
    },
    {
      title: "Carlos",
      src: "src/assets/images/icons/friends/carlos.png",
    },
    {
      title: "Vitor",
      src: "src/assets/images/icons/friends/vitor.png",
    },
    {
      title: "Matheus",
      src: "src/assets/images/icons/friends/matheus.png",
    },
    {
      title: "Ramos",
      src: "src/assets/images/icons/friends/ramos.png",
    },
    {
      title: "Eiji",
      src: "src/assets/images/icons/friends/eiji.png",
    },
    {
      title: "Julia",
      src: "src/assets/images/icons/friends/julia.png",
    },
    {
      title: "Carol",
      src: "src/assets/images/icons/friends/carol.png",
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
    <section className={styles.categoryContainer}>
      <section className={styles.topicSection}>
        <span className={styles.categoryName}>Amigos (20)</span>

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
