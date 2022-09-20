import Cards from '../../components/cards/Cards';
import Layout from '../../components/layout/Layout';

const Homepage = () => {
  const str = 'test';

  return (
    <Layout>
      <div className="content">
        <Cards />
      </div>
    </Layout>
  );
};

export default Homepage;
