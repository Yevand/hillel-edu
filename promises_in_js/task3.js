const fetchTodoById = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const body = await response.json()
        return await body
    }catch (error) {
        console.log(error)
    }
}

const fetchUserById = async (id) => {
try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const body = await response.json()
    return await body
} catch (error) {
    console.log(error)
}
}

Promise.all([
    fetchTodoById(5),
    fetchUserById(6)
])
    .then((values)=>{
        console.log(values)
    })
    .catch((e) => console.log(e.message))

Promise.race([
    fetchTodoById(8),
    fetchUserById(7)
])
    .then((values)=>{
        console.log(values)
    })
    .catch((e) => console.log(e.message))