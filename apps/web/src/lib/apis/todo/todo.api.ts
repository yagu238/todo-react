import { Todo, CreateTodoDTO, UpdateTodoDTO } from '@todo/api-interfaces';

export class TodoApi {
  constructor(private readonly baseUrl: string) {}

  fetchAll(): Promise<Todo[]> {
    const url = new URL(`${this.baseUrl}/todos`);
    return fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
  }

  create(todo: CreateTodoDTO): Promise<Response> {
    const url = new URL(`${this.baseUrl}/todos`);
    return fetch(url.toString(), {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res);
  }

  update(id: number, todo: UpdateTodoDTO): Promise<Response> {
    const url = new URL(`${this.baseUrl}/todos/${id}`);
    return fetch(url.toString(), {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res);
  }
}
