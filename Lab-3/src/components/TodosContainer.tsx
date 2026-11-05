// This component will have a Todo list as a prop
// Then we will map into several TodoCard's

import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({
  todosList,
  handleOnCheck,
  handleOnDelete,
  handleOnEdit,
}: TodosContainerProps) {
  return (
    <div>
      {todosList.length > 0 || "Todo list is empty"}
      {todosList.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          handleOnCheck={handleOnCheck}
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />
      ))}
    </div>
  );
}
