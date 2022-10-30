import axios from "axios";
import { from, map, Observable } from "rxjs";

type GetOptions = {
  url: string;
};

function get<T>({ url }: GetOptions): Observable<T> {
  return from(axios.get<T>(url)).pipe(map((response) => response.data));
}

export const httpClient = {
  get
};
