import { Route, Routes } from 'react-router-dom';
import AboutUs from '../../components/about-us/AboutUs';
import ProductsView from '../../components/products/ProductsView';
import PageNotFound from '../../components/pageNotFound/PageNotFound';
import WeatherView from '../../components/weather/WeatherView';

const Homepage = () => (
  <Routes>
    <Route path="/" element={<ProductsView />} />
    <Route path="/Products" element={<ProductsView />} />
    <Route path="/About" element={<AboutUs />} />
    <Route path="/Weather" element={<WeatherView />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default Homepage;
