global.fetch = require('node-fetch');
function getToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        var SingleToDo = res;
        var id = SingleToDo.id;
        var title = SingleToDo.title;
        var completed = SingleToDo.completed;
        logToDo(id, title, completed);
    })["catch"](function (err) { return console.log(err); });
}
getToDo();
var logToDo = function (id, title, completed) {
    console.log(id, title, completed);
};
