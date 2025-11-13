import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  // IMAGES
  const images = [
    '/gallery/img1.jpg',
    '/gallery/img1.png',
    '/gallery/img2.jpg',
    '/gallery/img3.jpg',
    '/gallery/img4.jpg',
    '/gallery/img5.jpg',
    '/gallery/img6.jpg',
    '/gallery/img7.jpg',
    '/gallery/img8.jpg',
    '/gallery/img9.jpg',
    '/gallery/img10.jpg',
    '/gallery/img11.jpg',
    '/gallery/img12.jpg',
    '/gallery/img13.png',
    '/gallery/img14.jpg',
    '/gallery/image.png',
    '/gallery/image copy.png',
    ...Array.from({ length: 49 }, (_, i) => `/gallery/image copy ${i + 2}.png`),
  ].map((src) => ({ type: 'image', src }));

  // VIDEOS
  const videos = Array.from(
    { length: 12 },
    (_, i) => `/gallery/video${i + 1}.mp4`
  ).map((src) => ({ type: 'video', src }));

  // COMBINE
  const media = [...images, ...videos];

  // --------- BALANCED RANDOM SHUFFLE ----------
  function balancedShuffle(list) {
    const shuffled = [];
    const items = [...list];

    let lastType = null;
    let streak = 0;

    while (items.length > 0) {
      const possible = items.filter((item) =>
        streak >= 2 ? item.type !== lastType : true
      );

      const candidates = possible.length ? possible : items;

      const index = Math.floor(Math.random() * candidates.length);
      const selected = candidates[index];

      const realIndex = items.indexOf(selected);
      items.splice(realIndex, 1);

      shuffled.push(selected);

      if (selected.type === lastType) {
        streak++;
      } else {
        streak = 1;
        lastType = selected.type;
      }
    }

    return shuffled;
  }

  const shuffledMedia = balancedShuffle(media);

  return (
    <main className={styles.galleryPage}>
      <h1 className={styles.title}>My beautiful Darling 💖</h1>

      <section className={styles.gallery}>
        {shuffledMedia.map((item, index) => (
          <div key={index} className={styles.imageFrame}>
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={`Memory ${index + 1}`}
                width={300}
                height={300}
                className={styles.galleryImage}
              />
            ) : (
              <video controls className={styles.galleryVideo}>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
