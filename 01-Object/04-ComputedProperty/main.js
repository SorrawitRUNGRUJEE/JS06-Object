// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password  
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

let inputUserName = prompt("please enter your name")
let inputemail = prompt("please enter your email")
let inputpassword = prompt("please enter your password")

let user = {
    username: inputUserName,
    email: inputemail,
    password: inputpassword,
}

console.log(user.username)
console.log(user.email)
console.log(user.password)
