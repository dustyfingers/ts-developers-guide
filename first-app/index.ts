import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
    // this interface defines how res.data should look below
    interface Todo {
        id: number;
        title: string;
        completed: boolean;
    }
    const todo = res.data as Todo;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`{id: ${id}, title: ${title}, completed: ${completed}}`)
}