import { Observable } from "rxjs";

import { UseCase } from "./types";
import { Todo } from "../entities/Todo";

export type FetchMyTodos = () => Observable<Todo[]>;
export type RenderMyTodos = (todos: Todo[]) => void;

type Dependencies = {
  fetchMyTodos: FetchMyTodos;
  renderMyTodos: RenderMyTodos;
};

export const DisplayMyTodos: UseCase<Dependencies> = ({
  fetchMyTodos,
  renderMyTodos
}) => ({
  execute() {
    fetchMyTodos().subscribe((todos) => {
      renderMyTodos(todos);
    });
  }
});
