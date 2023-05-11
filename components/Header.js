import Image from 'next/image';
import styles from '@/styles/Header.module.css';

function Header() {
  return (
    <header className={`${styles.header} flex-ctr-centered`}>
      <div className={`${styles.nameAndImage} flex-ctr-centered`}>
        <Image
          src='/steven-medina.jpg'
          height={200}
          width={200}
          alt='Steven Medina'
        />
        <div>
          <h1>Hi, I'm Steven Medina</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            veniam quas. Pariatur, sed nulla eaque dicta doloremque magnam
            laudantium ut, odio iste, quibusdam quo unde ducimus porro totam
            temporibus quaerat!
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
