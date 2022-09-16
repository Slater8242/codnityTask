import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './views/homepage/Homepage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Homepage />,
);
