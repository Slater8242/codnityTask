import Header from '../header/Header';
import Footer from '../footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
