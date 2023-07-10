import { useState } from "react";
import { Todos } from "./component/Todos";
import { Footer } from "./component/Footer";
import {
  FilterValue,
  TodoTitle,
  type TodoId,
  type Todo as TodoType,
} from "./types";
import { TODO_FILTERRS } from "./consts";
import { Header } from "./component/Header";

const mockTodos = [
  {
    id: "1",
    title: "Hacer Anki",
    completed: false,
  },
  {
    id: "2",
    title: "Leer el alquimista",
    completed: false,
  },
  {
    id: "3",
    title: "Aprendder React con TypeScript",
    completed: true,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERRS.ALL
  );

  const handleRemove = ({ id }: TodoId): void => {
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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERRS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERRS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
      <Footer
        completedCount={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        onClearCompeted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      ></Footer>
    </div>
  );
};

export default App;
