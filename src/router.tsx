import { createBrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    element: <GlobalStyle />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
