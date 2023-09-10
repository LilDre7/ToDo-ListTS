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
import { mockTodos } from "./Mocks/mocksFirts";

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    console.log(newTodos);
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
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          onCompleted={handleRemoveAllCompleted}
          onFilterChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default App;
