// This component will contain
// 1. A body for the title of the todo message
// 2. A button for deleting this todo entry
// 3. A button to edit this todo entry
// 4. A checkbox that will be used to mark the entry as completed

import type { TodoCardFunctions } from "./TodoApp";

export default function TodoCard({
  id,
  checked,
  title,
  handleOnCheck,
  handleOnDelete,
  handleOnEdit,
}: TodoCardFunctions) {
  return (
    <div>
      <input
        type="checkbox"
        name="checked"
        id="checked"
        checked={checked}
        onChange={(e) => handleOnCheck(e, id)}
      />
      <span>{title}</span>
      <button onClick={() => handleOnDelete(id)}>Delete</button>
      <button onClick={() => handleOnEdit(id)}>Edit</button>
    </div>
  );
}
