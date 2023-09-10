import { TodoId, type Todo as TodoType } from "./types";

interface Props extends TodoType {
  onCompleted: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: (todo: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onCompleted,
}) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={() => {
          onCompleted({ id, completed: !completed });
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      ></button>
    </div>
  );
};
