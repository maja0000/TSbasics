global.fetch = require('node-fetch');
function getToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        var toDo = res;
        var title = toDo.title;
        var completed = toDo.completed;
        console.log(title, completed);
    })["catch"](function (err) { return console.log(err); });
}
getToDo();
