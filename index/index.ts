global.fetch = require('node-fetch');

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

function getToDo() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())

    .then((res) => {
      const SingleToDo = res as ToDo;
      const id = SingleToDo.id;
      const title = SingleToDo.title;
      const completed = SingleToDo.completed;
      logToDo(id, title, completed);
    })
    .catch((err) => console.log(err));
}

getToDo();

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(id, title, completed);
};
