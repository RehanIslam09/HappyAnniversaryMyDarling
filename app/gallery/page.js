import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  // Array of your image filenames
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
  ];

  return (
    <main className={styles.galleryPage}>
      <h1 className={styles.title}>My beautiful Darling 💖</h1>

      <section className={styles.gallery}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageFrame}>
            <Image
              src={src}
              alt={`Memory ${index + 1}`}
              width={300} // Adjust size later in CSS
              height={300}
              className={styles.image}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
