import { createContext } from "react";
import { Todo } from "../Models/Todo";

export const TodosContext = createContext<TodoContext>({
  todos: [],
  addTodo: (message: string) => {},
});

interface TodoContext {
  todos: Todo[];
  addTodo: (message: string) => void;
}
