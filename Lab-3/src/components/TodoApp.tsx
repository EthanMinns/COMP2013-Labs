import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodosContainer";

// ===== Interfaces =====

export interface TodoCardProps {
  id: string;
  checked: boolean;
  title: string;
}

export interface TodoCardFunctions extends TodoCardProps {
  handleOnCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleOnDelete: (id: string) => void;
  handleOnEdit: (id: string) => void;
}

export interface TodosContainerProps {
  todosList: TodoCardProps[];
  handleOnCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleOnDelete: (id: string) => void;
  handleOnEdit: (id: string) => void;
}

export interface FormComponentProps extends TodoCardProps {
  handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}

export default function TodoApp() {
  // ===== States =====

  // A state to store the input change
  // Once the submit button is clicked, the state will be stored
  // As a todo entry in other state that will save a list of todos
  const [todo, setTodo] = useState<TodoCardProps>({
    id: "",
    title: "",
    checked: false,
  });

  // A state to store all the todo entries in one array
  const [todosList, setTodosList] = useState<TodoCardProps[]>([]);

  // ===== Handlers =====

  // Allow typing in input
  const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo((prevTodo) => ({ ...prevTodo, [e.target.name]: e.target.value }));
  };

  // Handle the onSubmit event for the form the ass the input to the todo list
  const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // To prevent the default refresh action when form is empty
    if (todo.id === "") {
      setTodosList((prevList) => [
        ...prevList,
        {
          id: crypto.randomUUID(),
          title: todo.title,
          checked: false,
        },
      ]);
      setTodo({
        id: "",
        title: "",
        checked: false,
      });
    } else {
      setTodosList((prev) =>
        prev.map((entry) =>
          entry.id === todo.id ? { ...entry, title: todo.title } : { ...entry },
        ),
      );
      setTodo({
        id: "",
        title: "",
        checked: false,
      });
    }
  };

  // Handle the checkbox toggle
  const handleOnCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setTodosList((prevList) =>
      prevList.map((entry) =>
        entry.id === id
          ? { ...entry, checked: e.target.checked }
          : { ...entry },
      ),
    );
  };

  // Handle delete button presses in TodoCard's
  const handleOnDelete = (id: string) => {
    setTodosList((prevList) => prevList.filter((entry) => entry.id !== id));
  };

  // Handle the editing of a todo entry title
  const handleOnEdit = (id: string) => {
    const todoEntry = todosList.find((entry) => entry.id === id) || {
      title: "",
      id: "",
      checked: false,
    };
    setTodo({ ...todoEntry });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <FormComponent
        {...todo}
        handleFormOnChange={handleFormOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <TodosContainer
        todosList={todosList}
        handleOnCheck={handleOnCheck}
        handleOnDelete={handleOnDelete}
        handleOnEdit={handleOnEdit}
      />
    </div>
  );
}
