import * as ReactDOM from "react-dom/client";

import { Todo } from "../../domain/entities/Todo";
import {
  DisplayMyTodos,
  RenderMyTodos
} from "../../domain/use-cases/DisplayMyTodos";
import { fetchMyTodos } from "../http/fetchMyTodos";

const TodoList = ({ todos }: { todos: Todo[] }) => (
  <ul>
    {todos.map((todo) => (
      <li style={{ listStyleType: "none" }}>{todo.title}</li>
    ))}
  </ul>
);

const renderMyTodos: RenderMyTodos = (todos) => {
  const htmlContainerElement = document.getElementById("app");

  if (htmlContainerElement === null) {
    console.error("Missing HTML container #app");
    return;
  }

  ReactDOM.createRoot(htmlContainerElement).render(<TodoList todos={todos} />);
};

export const DisplayMyTodosReact = DisplayMyTodos({
  fetchMyTodos,
  renderMyTodos
});
