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
        <h2 className={styles.poemTitle}>I love you, my darling..!</h2>
        <p className={styles.poem}>
          A year has passed, my darling, yet your gaze still dawns in me, <br />
          Like sunlight breaking through dark clouds, falling on the silent sea.{' '}
          <br />
          <br />
          Do you recall the first soft hour we met..? <br />
          The world was still, as my eyes met yours, Fate wove a thousand tales,
          and since then, <br />
          Every moon has carried your name, Every wind has sought your scent, my
          darling.
          <br /> My nights have turned to gardens, watered by your memory,
          <br />
          And I am the traveler who never left your heart's gate.
        </p>
      </div>
    </section>
  );
}
