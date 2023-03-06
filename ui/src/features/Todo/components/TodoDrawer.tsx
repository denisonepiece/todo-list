import { css } from '@emotion/react';
import { Button, Drawer, DrawerProps, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDeleteTodoMutation, useGetTodoQuery } from '../ducks/todoApi';
import { DeleteOutlined } from '@ant-design/icons';
import { Todo } from '../models';

const style = {
  input: css`
    border: none;
    padding-left: 0;

    &:focus {
      border: none !important;
      box-shadow: none;
    }
  `,
  header: css`
    & .ant-drawer-close {
      display: none;
    }
  `,
  body: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};

type Props = {
  id: number;
  onClose: VoidFunction;
  updateTodo: (args: Partial<Todo>) => void;
} & DrawerProps;

function TodoDrawer({ id, onClose, updateTodo, ...props }: Props) {
  const { data } = useGetTodoQuery(id);
  const [deleteTodo] = useDeleteTodoMutation();

  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    data && setTitle(data.title);
  }, [data]);

  return (
    <Drawer
      onClose={onClose}
      open
      css={style.header}
      {...props}
      title={
        <Input
          css={style.input}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={(e) => {
            updateTodo({ _id: id, title: e.target.value });
          }}
          value={title}
        />
      }
    >
      <div css={style.body}>
        <Input.TextArea />
        <Button
          icon={<DeleteOutlined />}
          onClick={() => deleteTodo(id).then(() => onClose())}
        />
      </div>
    </Drawer>
  );
}

export default TodoDrawer;
