import { Route, Routes } from 'react-router-dom';
import AboutUs from '../../components/about-us/AboutUs';
import Cards from '../../components/cards/Cards';
import PageNotFound from '../../components/pageNotFound/PageNotFound';

const Homepage = () => {
  const str = 'test';

  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/Products" element={<Cards />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Homepage;
