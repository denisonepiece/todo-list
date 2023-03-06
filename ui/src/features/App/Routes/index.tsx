import { Route, Routes } from 'react-router-dom';
import Login from '../../Auth/containers/Login';
import Todo from '../../Todo';
import Layout from '../Layout';

export default function () {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Todo />} />
      </Route>
    </Routes>
  );
}
