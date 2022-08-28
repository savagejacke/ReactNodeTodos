import { FormEvent, useContext, useState } from "react";
import { TodosContext } from "../Context/TodosContext";

const CreateTodoForm = () => {
  const { addTodo } = useContext(TodosContext);
  const [message, setMessage] = useState("");

  const onFormSubmit = (e: FormEvent) => {
    // e.preventDefault();
    addTodo(message);
    setMessage("");
  };

  const onFormChange = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <input
        type="text"
        value={message}
        onChange={(e) => onFormChange(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default CreateTodoForm;
