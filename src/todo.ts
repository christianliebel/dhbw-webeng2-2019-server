export class Todo {
    constructor(
        public name: string,
        public done: boolean = false,
        public id?: number,
    ) {}
}

const x: Todo = { id: 0, name: 'Foo', done: true };
const newTodo = new Todo('Wäsche waschen');
