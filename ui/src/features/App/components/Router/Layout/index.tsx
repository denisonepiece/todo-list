import { css } from '@emotion/react';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';

const styles = {
  page: css({
    minHeight: '100vh',
  }),
  content: css({
    padding: 20,
  }),
};

function Layout() {
  return (
    <AntLayout css={styles.page}>
      <AntLayout css={styles.content}>
        <Outlet />
      </AntLayout>
    </AntLayout>
  );
}

export default Layout;
