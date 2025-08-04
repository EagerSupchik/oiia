import styles from '@/styles/About.module.css';
import MovingCat from '@/components/MovingCat';
import Head from 'next/head';

export default function About() {
  return (
    <>  
      <Head>
        <title>About Us - OIIA OIIAOIIA</title>
        <meta name="description" content="About OIIA OIIAOIIA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.container}>
        <MovingCat
            imageSrc="/images/main_cat.gif"
            soundSrc="/sounds/meow.mp3"
            width={100}
            height={100}
            style={{ zIndex: 999 }}
        />
        
        <div className={styles.pageContent}>
          <h1>OIIA OIIAOIIA - About Us</h1>
          
          <p>Oiiaoiia oiia oiiaoiiaoiia oiiaa oiiaoiiaaiioo oiia oiioa oiia oiiioauaia oiia oiiaoio oiia oiuoau ooiia iiuaoia ai io aioioii oiaioia. Oioi aioi iiooinoia aaiaaaioiiiaiaii ooaiiaa a aioaiaaaai iaiia a.</p>
          
          <p>Oiia Oiia oiiaaaiooaiiaoii aaiaaaioiiiaiaii oiiaia ioiaaaiiiioi oiia aiioa ooiiaoiiooaiioa aaiaaaioiiiaiaii oioia ioaaaiiiiioi oaai oiiaaaiooiaiioai aaiaaaioiiiaiaii oiioia ioaaaiiiiioi.</p>
          
          <p>Iiuaoia ai io aioioii oiaioia ooiia iiuaoia ai io aioioii oiaioia oiiaoiia oiia oiiaoiiaoiia oiiaa oiiaoiiaaiioo oiia oiioa oiia oiiioauaia oiia oiiaoio oiia oiuoau. Oioi aioi iiooinoia aaiaaaioiiiaiaii ooaiiaa a aioaiaaaai iaiia a oiiaoiia oiia oiiaoiiaoiia oiiaa oiiaoiiaaiioo oiia oiioa oiia.</p>
          
          <p>Aaiaaaioiiiaiaii oiiaia ioiaaaiiiioi oiia aiioa ooiiaoiiooaiioa aaiaaaioiiiaiaii oioia ioaaaiiiiioi oaai oiiaaaiooiaiioai aaiaaaioiiiaiaii oiioia ioaaaiiiiioi oiia oiioa oiia oiiioauaia oiia oiiaoio oiia oiuoau ooiia iiuaoia ai io aioioii oiaioia.</p>
        </div>
      </div>
    </>
  );
}
