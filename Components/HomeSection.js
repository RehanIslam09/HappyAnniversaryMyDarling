import Image from 'next/image';
import styles from './HomeSection.module.css';

export default function HomeSection() {
  return (
    <section className={styles.container}>
      <div className={styles.cardLeft}>
        <div className={styles.photoFrame}>
          <Image
            src="/her-photo.png" // <-- replace this with her actual photo path
            alt="Her beautiful picture"
            width={300}
            height={400}
            className={styles.photo}
          />
        </div>
        <p className={styles.message}>
          Every moment with you is magical, a blessing wrapped in the soft
          blooms of fate, a very happy first anniverysary to you, my sweetheart
        </p>
      </div>

      <div className={styles.cardRight}>
        <h2 className={styles.poemTitle}>My Love Poem for You</h2>
        <p className={styles.poem}>
          Your smile is my sunrise, <br />
          Your touch, my gentle breeze. <br />
          In your eyes, I find my home, <br />
          My heart forever at ease. 💞 <br />
          Your smile is my sunrise, <br />
          <br />
          Your touch, my gentle breeze. <br />
          In your eyes, I find my home, <br />
          My heart forever at ease. 💞 <br />
          Your smile is my sunrise, <br />
          Your touch, my gentle breeze. <br />
          <br />
          In your eyes, I find my home, <br />
          My heart forever at ease. 💞 <br />
          Your smile is my sunrise, <br />
          In your eyes, I find my home, <br />
          My heart forever at ease. 💞 <br />
          Your smile is my sunrise, <br />
        </p>
      </div>
    </section>
  );
}
