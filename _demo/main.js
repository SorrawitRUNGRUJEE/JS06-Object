// //DataTypes
// //  - primitive
// // - non-primitive : object

// let user ={
//     firstname: `Hoshino`,
//     lastname: `Ai`,
//     age:18,
//     isAdmin: true,
//     'like human': true,
// };


// // ACCESS MODIFY DELETE

// console.log(user)
// console.log(user.firstname)
// console.log(user.Firstname)
// console.log(user.lastname)
// console.log(user.age)
// console.log(user.isAdmin)
// console.log(user.salary)

// // `.` is only applicable with object only
// // if apply `.` with undefined will lead to error
// // use question mark sign to solve the  error problem
// // the question mark sign will check whether the prior pathis an object or not,
// // if it is an object, it will still functional
// //  > employee.addr?.village ==> still work use optional chaining method
// // 

// // nested object

// const employee = {
//     fullname: 'hoshino Aqauamarine',
//     salary: 500_000,
//     address: {
//         district: `phaya thai`,
//         province: `Bangkok`,
//         Country: `Thailand`,


//     }

// }

// console.log(employee.salary)
// console.log(employee.address.province)
// console.log(employee.address.district)
// console.log(employee.address.Country)


// const product = {
//     id:234,
//     name: "Iphone",
//     price: 50_000,
//     // discount:0.05
//     'is mobile': "yes",

// }


// // in operator
// // syntax: <key name> in <obj>

// // `name` in product
// console.log(product.discount)
// console.log('name' in product)
// console.log(`discount` in product)

// // method hasOwnProperty
// // Syntax: <obj>.hasOwnProperty(<key name>)
// console.log((product.hasOwnProperty('name')))
// console.log((product.hasOwnProperty('discount')))


// console.log(product.id)
// console.log(product['id'])


// // console.log(product. is mobile) ==> error
// console.log(product['is mobile'])


// product['name'] = 'Iphone 20'

// let aaaaa = 'name'
// console.log(product[aaaaa])/* access key value via variable*/  
// console.log(product.aaaaa)
// console.log(product['name'])


// loop
const user = {
    firstname: 'CodeCamp',
    lastname:'software park',
    age: 15,
}

// for in: loop through object
// for( let <key variable in <obj>)
for ( let a in user){
    
    // 
    console.log(a)
    // console.log(user.a)
    // to access a certain variable use  square bracket
    // console.log(user['lastname'])
}