import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
      <p>
        Copyright &copy; All Rights Reserverd {new Date().getFullYear()} Steven
        Medina
      </p>
      <section className='social-icons'>
        <a href='https://github.com/smedina0' target='_blank'>
          <FontAwesomeIcon icon={faGithub} className='icon' />
        </a>
        <a href='https://www.linkedin.com/in/smedinaa11y/' target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
