import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../Store/reducers/todo"; 

const Todo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      todoName: ""
    }
  });

  const dispatch = useDispatch();
  const todoStore = useSelector((state) => state.todo);

  const onSubmit = (values) => {
    dispatch(addTodo(values));
  };

  const handleDelete = (index) => {
    // Gọi action Redux để xoá công việc
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="todoName"
          control={control}
          render={(field) => (
            <input {...field} type="text" placeholder="Enter code" />
          )}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todoStore.todos.map((todo, index) => (
          <li key={index}>
            {todo.todoName}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
