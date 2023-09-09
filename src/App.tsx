import { useState } from "react";
import { Todos } from "./components/Todos";
import {
  FilterValue,
  TodoTitle,
  type TodoId,
  type Todo as TodoType,
} from "./components/types";
import { TODO_FILTERS } from "./consts/consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: "1",
    title: "Aprender React con midudev",
    completed: false,
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
  {
    id: "4",
    title: "Viva la LDA",
    completed: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

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

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ALL) return true;
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
  });

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodos = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };

    const newTodosList = [...todos, newTodos];
    setTodos(newTodosList);
  };

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo} />
        <Todos
          onCompleted={handleCompleted}
          onRemoveTodo={handleRemove}
          todos={filteredTodos}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
          onCompleted={handleRemoveAllCompleted}
          onFilterChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default App;
