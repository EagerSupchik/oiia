import styles from '@/styles/Contact.module.css';
import MovingCat from '@/components/MovingCat';
import Head from 'next/head';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('OIIA OIIA! Form submitted!');
  };

  return (
    <>
      <Head>
        <title>Contact Us - OIIA OIIAOIIA</title>
        <meta name="description" content="Contact OIIA OIIAOIIA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>

        <MovingCat
          imageSrc="/images/guren_cat.gif"
          soundSrc="/sounds/meow.mp3"
          width={100}
          height={100}
          style={{ zIndex: 999 }}
        />
        
        <div className={styles.pageContent}>
          <h1>OIIA OIIAOIIA - Contact Us</h1>
          
          <p>Oiiaoiia oiia oiiaoiiaoiia oiiaa oiiaoiiaaiioo oiia oiioa oiia oiiioauaia oiia oiiaoio oiia oiuoau ooiia iiuaoia ai io aioioii oiaioia. Oioi aioi iiooinoia aaiaaaioiiiaiaii ooaiiaa a aioaiaaaai iaiia a.</p>
          
          <div className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">OIIA Name</label>
              <input type="text" id="name" name="name" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">OIIA Email</label>
              <input type="email" id="email" name="email" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">OIIA Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            
            <button type="submit" onClick={handleSubmit} className={styles.submitButton}>OIIA Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
