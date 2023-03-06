import {
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Button, Layout, Space } from 'antd';
import { useAppDispatch } from '../../../store';
import { logout } from '../../Auth/ducks/authSlice';

const styles = {
  wrap: css`
    padding: 20px;
  `,
  actions: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
};

function Sider() {
  const dispatch = useAppDispatch();

  return (
    <Layout.Sider width={300} theme="light" css={styles.wrap}>
      <Space>
        <UserOutlined /> selectFromUserHere
        <Button
          onClick={() => {
            dispatch(logout());
          }}
          icon={<LogoutOutlined />}
        />
      </Space>
    </Layout.Sider>
  );
}

export default Sider;
