import { Container } from '@mui/material';
import Cards from '../../components/cards/Cards';
import Layout from '../../components/layout/Layout';

const Homepage = () => {
  const str = 'test';

  return (
    <Layout>
      <Container>
        <Cards />
      </Container>
    </Layout>
  );
};

export default Homepage;
