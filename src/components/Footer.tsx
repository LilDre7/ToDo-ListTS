import { Filter } from "./Filter";
import { FilterValue } from "./types";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onCompleted: () => void;
  handleFilterChange: (Filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  // completedCount = 0,
  // onCompleted,
  // handleFilterChange,
  filterSelected,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes
      </span>
      <Filter
        filterSelected={filterSelected}
        onFilterChange={() => {}}
      ></Filter>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};
