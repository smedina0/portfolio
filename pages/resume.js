import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Resume(props) {
  return (
    <>
      <Head>
        <title>Resume | Steven Medina's Portfolio Page </title>
        <meta
          name='description'
          content='Check out my resume to learn more about my professional experience'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <section>
          <a
            target='_blank'
            href='https://docs.google.com/document/d/1lw9PNamrJVgIt62zEIddGj6MtMp8n51ZayaEPlzdICU/edit?usp=sharing'
          >
            Download a copy of my resume
          </a>
        </section>
        <h1>Summary</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          porro eligendi architecto magnam tempora natus nisi, maiores cumque
          saepe repellat doloribus cupiditate maxime commodi minus harum
          laborum, nulla ad placeat.{' '}
        </p>
        <hr />
        <h2>Technical Skills</h2>

        <ul>
          <li>
            <strong>Languages:</strong> JavaScript, Python, HTML5, CSS3
          </li>
          <li>
            <strong>Framework Libraries:</strong> React, Next.js, Bootstrap,
            Materialize
          </li>
          <li>
            <strong>Databases/Backends:</strong>PostgreSQL, MongoDB, Google
            Firebase
          </li>
          <li>
            <strong>Methodologies:</strong>MVC, RESTful Architechture
          </li>
          <li>
            <strong>Tools:</strong> Git, VS Code, Postman
          </li>
        </ul>
        <hr />
        <h2>Tech-Related Experience</h2>
        <h3>
          JPMorgan Chase, Senior Accessibility Analyst - Jan 2022 - Present
        </h3>
        <ul>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <h3>
          JPMorgan Chase, Senior Accessibility Analyst - Jan 2022 - Present
        </h3>
        <ul>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <h3>
          The City University of New York, Accessibility Specialist - Markch
          2019 - January 2022
        </h3>
        <ul>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <hr />
        <h2>Other Experience</h2>
        <p>Add Experience Here</p>
        <hr />
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Test</strong>: Date 1-Date 2 - Degree title
          </li>
        </ul>
      </main>
    </>
  );
}
