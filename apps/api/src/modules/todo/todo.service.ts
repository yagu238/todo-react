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
      where: { deleted: false },
      order: { createdAt: 'ASC' },
    });
  }

  async create(dto: CreateTodoDTO): Promise<Todo> {
    const todo = await this.todosRepository.create(dto);
    return await this.todosRepository.save(todo);
  }

  async update(id: number, dto: UpdateTodoDTO): Promise<void> {
    await this.todosRepository.update(id, {
      ...dto,
      updatedAt: new Date(),
    });
  }

  async delete(id: number): Promise<void> {
    await this.todosRepository.update(id, {
      deleted: true,
      updatedAt: new Date(),
    });
  }
}
