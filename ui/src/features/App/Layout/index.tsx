import { css } from '@emotion/react';
import { Layout as AntLayout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../store';
import { selectIsAuthenticated } from '../../Auth/ducks/authSlice';
import ErrorHandler from '../ErrorHandler';
import Sider from './Sider';

const styles = {
  page: css({
    minHeight: '100vh',
  }),
  content: css({
    padding: 20,
  }),
};

function Layout() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return isAuthenticated ? (
    <>
      <AntLayout css={styles.page}>
        <Sider />
        <AntLayout css={styles.content}>
          <Outlet />
        </AntLayout>
      </AntLayout>
      <ErrorHandler />
    </>
  ) : (
    <Navigate to="login" />
  );
}

export default Layout;
