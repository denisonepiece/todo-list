import { PlusOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Form, Input, theme } from 'antd';

type Props = {
  onAdd: ({ title }: { title: string }) => void;
};

function AddForm({ onAdd }: Props) {
  const [form] = Form.useForm();
  const { token } = theme.useToken();

  const style = {
    icon: css`
      font-size: 12px;
      color: ${token.colorTextPlaceholder};
    `,
  };

  return (
    <Form
      form={form}
      onFinish={({ title }) => {
        onAdd({ title });
        form.resetFields();
      }}
    >
      <Form.Item name="title">
        <Input
          prefix={<PlusOutlined css={style.icon} />}
          placeholder="Добавить задачу"
        />
      </Form.Item>
    </Form>
  );
}

export default AddForm;
