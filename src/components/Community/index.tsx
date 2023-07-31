import styles from "./Community.module.css";

export function Community() {
  interface DataStandard {
    title: string;
    src: string;
  }

  const sectionContent: DataStandard[] = [
    {
      title: "Carros",
      src: "https://i.imgur.com/bX3Ifjp.png",
    },
    {
      title: "Desenhos",
      src: "https://i.imgur.com/ROqwqw4.png",
    },
    {
      title: "Crazy",
      src: "https://i.imgur.com/GejNWt4.png",
    },
    {
      title: "Fofos",
      src: "https://i.imgur.com/nrIosPU.png",
    },
    {
      title: "Animes",
      src: "https://i.imgur.com/qCvbyYR.png",
    },
    {
      title: "Leitura",
      src: "https://i.imgur.com/DCN6mIZ.png",
    },
    {
      title: "Meu ovo",
      src: "https://i.imgur.com/gwnknXd.png",
    },
    {
      title: "My books",
      src: "https://i.imgur.com/tBIGWCc.png",
    },
    {
      title: "Cafeeee",
      src: "https://i.imgur.com/7N7C9nu.png",
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
