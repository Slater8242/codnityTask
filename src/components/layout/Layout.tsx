import Header from '../header/Header';
import Footer from '../footer/Footer';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
