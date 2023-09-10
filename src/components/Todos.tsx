import { Todo } from "./Todo";
import { type Todo as TodoType, type ListOfTodos, type TodoId } from "./types";

interface Props {
  todos: ListOfTodos;
  onCompleted: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onCompleted,
}) => {
  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onCompleted={onCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
