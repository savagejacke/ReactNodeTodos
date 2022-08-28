import { useContext } from "react";
import { TodosContext } from "../Context/TodosContext";

const TodosList = () => {
  const { todos } = useContext(TodosContext);

  const listItems = todos.map((todo) => <li key={todo.id}>{todo.message}</li>);

  return <ul>{listItems}</ul>;
};

export default TodosList;
