import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDTO, UpdateTodoDTO } from '@todo/api-interfaces';
import { TodoService } from './todo.service';

@Controller('api/todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAllTodo() {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() dto: CreateTodoDTO) {
    return this.todoService.create(dto);
  }

  @Put(':id')
  updateTodo(@Param('id') id: number, @Body() dto: UpdateTodoDTO) {
    return this.todoService.update(id, dto);
  }
}
