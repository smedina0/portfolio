import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import ProjectCard from '@/components/ProjectCard';
import projectData from '@/public/project-data';
import Form from '@/components/Form';

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
        <section
          className={`${styles.pageSection} ${styles.skillsSection} invert-svg`}
        >
          <h2>Skills</h2>
          <div>
            <Image src='/html5.svg' width={64} height={64} alt='HTML5 logo' />
            <Image src='/CSS.svg' width={64} height={64} alt='CSS3 logo' />
            <Image
              src='/javascript.svg'
              width={64}
              height={64}
              alt='javascript logo'
            />
            <Image src='/react.svg' width={64} height={64} alt='react logo' />
            <Image src='/nodejs.svg' width={64} height={64} alt='nodejs logo' />
            <Image
              src='/accessibility.svg'
              width={64}
              height={64}
              alt='accessibility logo'
            />
            <Image src='/python.svg' width={64} height={64} alt='Python logo' />
            <Image
              src='/database.svg'
              width={64}
              height={64}
              alt='Database logo'
            />
            <Image src='/github.svg' width={64} height={64} alt='Github logo' />
          </div>
        </section>
        <section className={styles.pageSection}>
          <h2>Projects</h2>
          <div className={styles.projectsWrapper}>
            {projectData.map((project, index) => {
              return (
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  key={index}
                />
              );
            })}
          </div>
        </section>

        <section className={styles.pageSection}>
          <h2>Contact</h2>
          <Form />
        </section>
      </main>
    </>
  );
}
