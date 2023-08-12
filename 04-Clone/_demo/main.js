let log = console.log
log("let learn clone object")

let todo = {
    task: "do HW",
    status: "complete",
    due_date: "never"

}


// // method 1 use for loop
// const newToDo = {}

// for( key in todo){
//     // assign new key and value for newToDo
// newToDo[key] = todo[key]

// }


// log(newToDo)
// newToDo.status = "not complete"
// log(newToDo.status)
// log(todo.status)

// method 2 object.assign

const newToDo ={}
// merge overide
// if there are two identical key
// it will merge right over left
// merge from todo over newToDo
Object.assign(newToDo,todo)

log(newToDo)



// Object.assign
let permission1 = {isWeeb: true}
let permission2 = {isByou: true}
let user = { name: "mek",isWeeb: false,}
// Object.assign will merge from right to left
// for key with the same name
Object.assign(user, permission1,permission2)
log(user)

const user2 = Object.assign({}, user)
log(user2)