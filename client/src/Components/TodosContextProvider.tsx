import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { TodosContext } from "../Context/TodosContext";
import { BASE_API_URL } from "../Data/BaseApiUrl";
import { Todo } from "../Models/Todo";

const TodosContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = () => {
    axios
      .get(BASE_API_URL + "/todos")
      .then((response) => {
        const newTodos = response.data as Todo[];
        setTodos(newTodos);
      })
      .catch((e: Error) => console.error(e));
  };

  const addTodo = (message: string) => {
    axios.post(BASE_API_URL + "/todos", { message });
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
