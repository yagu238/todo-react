import { Injectable } from '@nestjs/common';
import { Todo } from '@todo/api-interfaces';

@Injectable()
export class TodoService {
  async findAll(): Promise<Todo[]> {
    return [
      {
        id: '1',
        title: 'todo1',
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: '2',
        title: 'todo2',
        completed: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: '3',
        title: 'todo3',
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    ];
  }
}
