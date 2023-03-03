import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from '../../../Todo';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Todo /> }],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
