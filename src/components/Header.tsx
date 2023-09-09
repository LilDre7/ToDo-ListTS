import { CreateTodo } from "./CreateTodo";
import { type TodoTitle } from "./types";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        Todo
        <img
          style={{ width: "60px", height: "60px" }}
          src="https://i.pinimg.com/564x/6c/c8/0f/6cc80f860df186cdd1736bd54012062b.jpg"
          alt="TypeScript"
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
