const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())

}
const getComment = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/comments' + id)
        .then(response => response.json())

}
const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
}
const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

export {getComments, getComment, getPosts,getUsers}