import { Checkbox, List as AntList, Space } from 'antd';
import { useState } from 'react';
import AddForm from '../components/AddForm';
import TodoDrawer from '../components/TodoDrawer';
import {
  useAddTodoMutation,
  useGetTodoListQuery,
  useUpdateTodoMutation,
} from '../ducks/todoApi';

function List() {
  const { data, isLoading } = useGetTodoListQuery();
  const [addTodo] = useAddTodoMutation();
  const [openTask, setOpenTask] = useState<number | null>(null);
  const [updateTodo] = useUpdateTodoMutation();

  return (
    <Space direction="vertical">
      <AntList
        loading={isLoading}
        size="large"
        dataSource={data}
        renderItem={({ _id, completed, title }) => (
          <AntList.Item
            onClick={() => {
              setOpenTask(_id);
            }}
          >
            <Checkbox
              onClick={(e: any) => {
                e.stopPropagation();
                updateTodo({
                  _id,
                  completed: e.target.checked,
                });
              }}
              checked={completed}
            />{' '}
            {title}
          </AntList.Item>
        )}
      />
      <AddForm onAdd={addTodo} />
      {openTask && (
        <TodoDrawer
          updateTodo={updateTodo}
          id={openTask}
          onClose={() => setOpenTask(null)}
        />
      )}
    </Space>
  );
}

export default List;
