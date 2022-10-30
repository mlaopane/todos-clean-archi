import { Todo } from "../../domain/entities/Todo";
import {
  DisplayMyTodos,
  RenderMyTodos
} from "../../domain/use-cases/DisplayMyTodos";
import { fetchMyTodos } from "../http/fetchMyTodos";

const mapHTMLTodoList = (todos: Todo[]) => `<ul>
  ${todos.map(
    (todo) => `<li style="list-style-type: none;">${todo.title}</li>`
  )}
</ul>`;

const renderMyTodos: RenderMyTodos = (todos) => {
  const htmlContainerElement = document.getElementById("app");

  if (htmlContainerElement === null) {
    console.error("Missing HTML container #app");
    return;
  }

  htmlContainerElement.innerHTML = mapHTMLTodoList(todos);
};

export const DisplayMyTodosVanilla = DisplayMyTodos({
  fetchMyTodos,
  renderMyTodos
});
