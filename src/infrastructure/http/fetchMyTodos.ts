import { Todo } from "../../domain/entities/Todo";
import { FetchMyTodos } from "../../domain/use-cases/DisplayMyTodos";
import { httpClient } from "./client";

export const fetchMyTodos: FetchMyTodos = () =>
  httpClient.get<Todo[]>({
    url: `https://jsonplaceholder.typicode.com/todos`
  });
