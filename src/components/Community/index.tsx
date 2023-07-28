import styles from "./Community.module.css";
import iconPlaceholder from "../../assets/images/Heart.svg";

export function Community() {

  interface DataStandard {
    title: string,
    src: string
  }

  const sectionContent: DataStandard[] = [
    {
      title: 'Carros',
      src: iconPlaceholder,
    },
    {
      title: 'Desenhos',
      src: iconPlaceholder,
    },
    {
      title: 'Crazy',
      src: iconPlaceholder,
    },
    {
      title: 'Fofos',
      src: iconPlaceholder,
    },
    {
      title: 'Animes',
      src: iconPlaceholder,
    },
    {
      title: 'Leitura',
      src: iconPlaceholder,
    },
    {
      title: 'Meu ovo',
      src: iconPlaceholder,
    },
    {
      title: 'My books',
      src: iconPlaceholder,
    },
    {
      title: 'Cafeeee',
      src: iconPlaceholder,
    }
  ];

  //renders data as elements
  const renderSectionContent = () => {
    return sectionContent.map((element, key) => {
      return (
        <div key={key} className={styles.contentBox}>
          <img className={styles.contentIcon} src={element.src}/>
          <p className={styles.contentTitle}>{element.title}</p>
        </div>
      );
    });
  }

  return (
    <section className={styles.communityContainer}>

      <section className={styles.topicSection}>
        <span className={styles.categoryName}>
          Communidade (number)
        </span>

        <button className={styles.seeAllBtn} onClick={() => { alert('calma la ;)') }}>
          Ver todos
        </button>

      </section>

      <section className={styles.contentSection}>
        {renderSectionContent()}
      </section>

    </section>
  );
}
