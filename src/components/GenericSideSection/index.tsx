import styles from "./GenericSideSection.module.css";
import iconPlaceholder from "../../assets/images/Heart.svg";

export function GenericSideSection({ dataSet, category }) {
  //renders data as elements
  const renderSectionContent = () => {
    return dataSet.map((element, key) => {
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