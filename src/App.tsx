import { Container } from '@mui/material';
import Layout from './components/layout/Layout';
import Homepage from './views/homepage/Homepage';

const App = () => {
  const str = 'test';

  return (
    <Layout>
      <Container>
        <Homepage />
      </Container>
    </Layout>
  );
};

export default App;
