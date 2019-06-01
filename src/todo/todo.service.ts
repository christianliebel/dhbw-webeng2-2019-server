import { Todo } from './../todo';
import { Injectable } from '@nestjs/common';

let todoId = 0;

@Injectable()
export class TodoService {
    private store = new Map<number, Todo>();

    public get(id: number): Todo {
        return this.store.get(id);
    }

    public add(todo: Todo): Todo {
        todo.id = todoId++;
        this.store.set(todo.id, todo);
        return todo;
    }

    public getAll(): Todo[] {
        return Array.from(this.store.values());
    }

    public delete(id: number): void {
        this.store.delete(id);
    }

    public update(id: number, todo: Todo): void {
        this.store.set(id, todo);
    }
}
