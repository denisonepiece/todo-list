import { css } from '@emotion/react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../ducks/authApi';

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  form: css`
    width: 300px;
  `,
  buttons: css`
    width: 100%;
    justify-content: flex-end;
  `,
};

function Login() {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    login(values).then(() => {
      navigate('/');
    });
  };

  return (
    <div css={styles.wrapper}>
      <Space direction="vertical" align="center">
        <Typography.Title level={2}>COMPETITIVE TODO APP</Typography.Title>

        <Form css={styles.form} onFinish={onFinish}>
          <Form.Item name="username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Space css={styles.buttons}>
            <Button type="text">Sign up</Button>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Space>
        </Form>
      </Space>
    </div>
  );
}

export default Login;
