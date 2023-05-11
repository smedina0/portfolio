import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Layout(props) {

  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Nav />
        <Header />
      {props.children}
      <motion.div
        ref={footerRef}
        variants={footerVariants}
        initial='hidden'
        animate={footerInView ? 'visible' : 'hidden'}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default Layout;
