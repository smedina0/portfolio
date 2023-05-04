import Image from 'next/image';
import styles from '@/styles/Header.module.css';

function Header() {
  return (
    <header className={`${styles.header} flex-ctr-centered`}>
      <div className='flex-ctr-centered'>
        <Image
          src='/steven-medina.jpg'
          height={200}
          width={200}
          alt='Steven Medina'
        />
        <h1>Hi, I'm Steven Medina</h1>
      </div>
    </header>
  );
}

export default Header;
