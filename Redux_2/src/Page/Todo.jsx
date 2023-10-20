import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchTodos } from "../Store/reducers/todo";
import { useEffect } from "react";


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
    dispatch(deleteTodo(index));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  console.log(todoStore)
  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="todoName"
          control={control}
          render={({ field }) => (
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
