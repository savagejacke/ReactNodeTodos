import CreateTodoForm from "./Components/CreateTodoForm";
import TodosContextProvider from "./Components/TodosContextProvider";
import TodosList from "./Components/TodosList";

function App() {
  return (
    <TodosContextProvider>
      <TodosList />
      <CreateTodoForm />
    </TodosContextProvider>
  );
}

export default App;
