import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todos from '../../../Todos';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Todos /> }],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
