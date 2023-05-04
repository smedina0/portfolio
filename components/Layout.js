import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Nav />
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
