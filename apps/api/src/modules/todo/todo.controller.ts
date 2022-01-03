import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('api/todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }
}