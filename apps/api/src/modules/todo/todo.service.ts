import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo, CreateTodoDTO, UpdateTodoDTO } from '@todo/api-interfaces';
import { Repository } from 'typeorm';
import { TodoEntiry } from '../../entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntiry)
    private todosRepository: Repository<TodoEntiry>
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todosRepository.find({
      order: { createdAt: 'ASC' },
    });
  }

  async create(dto: CreateTodoDTO): Promise<void> {
    await this.todosRepository.insert(dto);
  }

  async update(id: number, dto: UpdateTodoDTO): Promise<void> {
    await this.todosRepository.update(id, {
      ...dto,
      updatedAt: new Date(),
    });
  }
}
