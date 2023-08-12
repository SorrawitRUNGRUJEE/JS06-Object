const log = console.log
// log(`let's learn ref`)
// // primitive
// let message = "hello"
// let word =  message 
// log(message)
// log(word)

// // copy by value
// // each copy occupy new space in the memory
// // each primitive data's value remian the same until reassign
// message = "hi"
// log(message)
// log(word)

// object
// user  only keep the memory of the key and value of
// that object
// let user ={
//     name: "John",
// }

// copied by reference
// let employee = user;
// log(employee)

// user.name = `joe`
// log(user);
// log(employee);

let user = {
    name: "mek",
    isWeeb: "yes",
}

 let user2 = user
console.log(user.isWeeb)
console.log(user2.isWeeb)

user.isWeeb = "no"
console.log(user.isWeeb)
console.log(user2.isWeeb)


//
// 
// 
let boss = "weeb"
let mek = boss

log(boss)
log(mek)

boss = "not weeb"
log(boss)
log(mek)

