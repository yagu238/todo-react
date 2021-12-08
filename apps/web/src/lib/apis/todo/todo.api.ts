import { Todo } from "@todo/api-interfaces";

export class TodoApi {
  constructor(private readonly baseUrl: string) {}

  fetchAll(): Promise<Todo[]> {
    const url = new URL(`${this.baseUrl}/todos`);
    return fetch(url.toString(), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  }
}
