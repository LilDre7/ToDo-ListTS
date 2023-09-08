import { useState } from "react";
import { Todos } from "./components/Todos";
import { type TodoId, type Todo as TodoType } from "./components/types";

const mockTodos = [
  {
    id: "1",
    title: "Aprender React con midudev",
    completed: true,
  },
  {
    id: "2",
    title: "Aprender Ingles con el teacher miguel",
    completed: false,
  },
  {
    id: "3",
    title: "Ir a patinar a las 4:40",
    completed: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoapp">
        <Todos
          onCompleted={handleCompleted}
          onRemoveTodo={handleRemove}
          todos={todos}
        />
      </div>
    </>
  );
};

export default App;
