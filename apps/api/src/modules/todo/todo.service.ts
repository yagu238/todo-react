import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '@todo/api-interfaces';
import { Repository } from 'typeorm';
import { TodoEntiry } from '../../entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntiry)
    private todosRepository: Repository<TodoEntiry>
  ) {}

  async findAll(): Promise<Todo[]> {
    const entities = await this.todosRepository.find();
    return entities.map((e) => {
      const todo: Todo = { ...e };
      return todo;
    });
  }
}
