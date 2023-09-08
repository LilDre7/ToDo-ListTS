export const Footer: React.FC = ({ todos, onCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong> Tareas pendientes
      </span>
      <Filters filterSelected={} onFilterChange={() => {}}></Filters>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};
