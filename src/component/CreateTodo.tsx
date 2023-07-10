import { useState } from "react";
import { TodoTitle } from "../types";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSumit = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAddTodo({ title: inputValue });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(evt) => {
          setInputValue(evt.target.value);
        }}
        placeholder="Que quieres hacer?"
        autoFocus
      />
    </form>
  );
};
