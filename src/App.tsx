import { Container } from '@mui/material';
import Layout from './components/layout/Layout';
import Homepage from './views/homepage/Homepage';

const App = () => (
  <Layout>
    <Container sx={{ my: 'auto', mx: 'auto' }}>
      <Homepage />
    </Container>
  </Layout>
);

export default App;
