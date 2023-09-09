import { TodoTitle } from "./types";
import React, { useState } from "react";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveTodo({ title: inputValue });
    setInputValue("");
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={() => {}}
        onKeyDown={() => {}}
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};
