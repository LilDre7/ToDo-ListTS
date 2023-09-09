import { Filter } from "./Filter";
import { FilterValue } from "./types";

interface Props {
  handleFilterChange: (filter: FilterValue) => void;
  activeCount: number;
  completedCount: number;
  onCompleted: () => void;
  filterSelected: FilterValue;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onCompleted,
  handleFilterChange,
  filterSelected,
}) => {
  const singleActiveCount = activeCount === 1;
  const activeTodoWord = singleActiveCount ? "tarea" : "tareas";

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} pendiente
        {!singleActiveCount && "s"}
      </span>
      <Filter
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  );
};
