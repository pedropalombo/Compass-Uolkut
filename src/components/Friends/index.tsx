import styles from "./Friends.module.css";

export function Friends() {
  interface DataStandard {
    title: string;
    src: string;
  }

  const sectionContent: DataStandard[] = [
    {
      title: "Fernando",
      src: "https://i.imgur.com/g00WRng.png",
    },
    {
      title: "Ana",
      src: "https://i.imgur.com/smEE1fr.png",
    },
    {
      title: "Carlos",
      src: "https://i.imgur.com/zGWdEfN.png",
    },
    {
      title: "Vitor",
      src: "https://i.imgur.com/NCNMWMq.png",
    },
    {
      title: "Matheus",
      src: "https://i.imgur.com/OZzAEqY.png",
    },
    {
      title: "Ramos",
      src: "https://i.imgur.com/rZ8fCOP.png",
    },
    {
      title: "Eiji",
      src: "https://i.imgur.com/iXETVnZ.png",
    },
    {
      title: "Julia",
      src: "https://i.imgur.com/AFJ9Uhs.png",
    },
    {
      title: "Carol",
      src: "https://i.imgur.com/NrsHF8b.png",
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
        <span className={styles.categoryName}>Amigos (number)</span>

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
