import styles from '@/styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>OIIA OIIAOIIA - Home</title>
        <meta name="description" content="Welcome to OIIA OIIAOIIA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <audio id="oiia-sound" src="/sounds/oiia-oiia-sound.mp3" autoPlay loop></audio>
        
        <section className={styles.mainCat}>
          <h1>OIIA OIIAOIIA</h1>
          <img src="/images/main_cat.gif" alt="Main cat" />
        </section>
        
        <section className={styles.gallery}>
          <h2>Gallery</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <img src="/images/guren_cat.gif" alt="Gurrenn cat" />
              <p>OIIA OIIA Gurren Lagann</p>
            </div>
            <div className={styles.galleryItem}>
              <img src="/images/main_cat.gif" alt="Standard cat" />
              <p>OIIA OIIAOIIA Standard</p>
            </div>
            <div className={styles.galleryItem}>
              <img src="/images/ginger_cat.gif" alt="Ginger cat" />
              <p>OIIA OIIAOIIA Ginger</p>
            </div>
          </div>
        </section>
        
        <section className={styles.catDescription}>
          <h2>OIIA</h2>
          <div className={styles.descriptionContainer}>
            <div className={styles.catImage}>
              <img src="/images/main_cat.gif" alt="Cat description" />
            </div>
            <div className={styles.catText}>
              <h3>Oiia oiia</h3>
              <p>
                Oiiaoiia oiia oiiaoiiaoiia oiiaa oiiaoiiaaiioo oiia oiioa oiia oiiioauaia oiia oiiaoio oiia oiuoau ooiia iiuaoia ai io aioioii oiaioia. Oioi aioi iiooinoia aaiaaaioiiiaiaii ooaiiaa a aioaiaaaai iaiia a.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.catVariants}>
          <div className={styles.variant}>
            <h3>Oiia</h3>
            <p>Oiia Oiia oiiaaaiooaiiaoii aaiaaaioiiiaiaii oiiaia ioiaaaiiiioi</p>
          </div>
          <div className={styles.variant}>
            <h3>Aiioa</h3>
            <p>Oiia Oiia ooiiaoiiooaiioa aaiaaaioiiiaiaii oioia ioaaaiiiiioi</p>
          </div>
          <div className={styles.variant}>
            <h3>Oaai</h3>
            <p>Oiia Oiia oiiaaaiooiaiioai aaiaaaioiiiaiaii oiioia ioaaaiiiiioi</p>
          </div>
        </section>
      </div>
    </>
  );
}
