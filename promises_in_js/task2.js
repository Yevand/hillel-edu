function fetchTodoById(id) {
    return Promise.resolve(fetch(`https://jsonplaceholder.typicode.com/todos/${id}`))
        .then((value)=> value.json())
}

function fetchUserById(id) {
    return Promise.resolve(fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
        .then((value)=> value.json())
}

Promise.all([
    fetchTodoById(1),
    fetchUserById(2)
])
    .then((values)=>{
            console.log(values)
        })
    .catch((e) => console.log(e.message))

Promise.race([
    fetchTodoById(3),
    fetchUserById(4)
])
    .then((values)=>{
        console.log(values)
    })
    .catch((e) => console.log(e.message))