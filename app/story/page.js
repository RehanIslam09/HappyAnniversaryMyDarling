import styles from './story.module.css';

export default function Story() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.slider} style={{ '--quantity': 10 }}>
            <div className={styles.item} style={{ '--position': 1 }}>
              <img src="/dragon_1.png" alt="Dragon 1" />
            </div>
            <div className={styles.item} style={{ '--position': 2 }}>
              <img src="/dragon_2.png" alt="Dragon 2" />
            </div>
            <div className={styles.item} style={{ '--position': 3 }}>
              <img src="/dragon_3.png" alt="Dragon 3" />
            </div>
            <div className={styles.item} style={{ '--position': 4 }}>
              <img src="/dragon_4.png" alt="Dragon 4" />
            </div>
            <div className={styles.item} style={{ '--position': 5 }}>
              <img src="/dragon_5.png" alt="Dragon 5" />
            </div>
            <div className={styles.item} style={{ '--position': 6 }}>
              <img src="/dragon_6.png" alt="Dragon 6" />
            </div>
            <div className={styles.item} style={{ '--position': 7 }}>
              <img src="/dragon_7.png" alt="Dragon 7" />
            </div>
            <div className={styles.item} style={{ '--position': 8 }}>
              <img src="/dragon_8.png" alt="Dragon 8" />
            </div>
            <div className={styles.item} style={{ '--position': 9 }}>
              <img src="/dragon_9.png" alt="Dragon 9" />
            </div>
            <div className={styles.item} style={{ '--position': 10 }}>
              <img src="/dragon_10.png" alt="Dragon 10" />
            </div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title} data-content="I LOVE YOU">
              I LOVE YOU
            </h1>
            <div className={styles.author}>
              <h2>Flowers for my Darling</h2>
            </div>
            <div className={styles.model}></div>
          </div>
        </div>
      </main>
    </>
  );
}
