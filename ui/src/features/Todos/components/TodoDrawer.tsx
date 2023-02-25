import { css } from '@emotion/react';
import { Button, Drawer, DrawerProps, Input } from 'antd';
import { useEffect, useState } from 'react';
import {
  useDeleteTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
} from '../services/todos';
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
      <Button
        icon={<DeleteOutlined />}
        onClick={() => deleteTodo(id).then(() => onClose())}
      />
    </Drawer>
  );
}

export default TodoDrawer;
