import { Controller, Get, HttpCode, HttpStatus, Body, Post, Put, Param, NotFoundException, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from 'src/todo';

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {
    }

    // GET /todos
    @Get()
    public getAll(): Todo[] {
        return this.todoService.getAll();
    }

    // GET /todos/:id
    @Get(':id')
    public getSingle(@Param('id') id: string): Todo {
        const result = this.todoService.get(+id);
        if (!result) {
            throw new NotFoundException();
        }

        return result;
    }

    // POST /todos
    @Post()
    @HttpCode(HttpStatus.CREATED)
    public post(@Body('name') name: string, @Body('done') done: boolean) {
        return this.todoService.add(new Todo(name, done));
    }

    // PUT /todos/123
    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    public put(@Param('id') id: string, @Body('name') name: string,
               @Body('done') done: boolean) {
        this.todoService.update(+id, new Todo(name, done, +id));
    }

    // DELETE /todos/123
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    public delete(@Param('id') id: string) {
        this.todoService.delete(+id);
    }
}
