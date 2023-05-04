import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Steven Medina's Portfolio Page</title>
        <meta
          name='description'
          content="Welcome to Steven Medina's Portfolio Page; this is a site to showcase skills and projects"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className} ${styles['homeMain']}`}>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          veniam quas. Pariatur, sed nulla eaque dicta doloremque magnam
          laudantium ut, odio iste, quibusdam quo unde ducimus porro totam
          temporibus quaerat!
        </p>
        <section className={styles.pageSection}>
          <h2>Skills</h2>
        </section>
        <section className={styles.pageSection}>
          <h2>Projects</h2>
        </section>
        <section className={styles.pageSection}>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}
