function User(name,){
    this.userName = name;
    this.admin = true;
}

let user = new User("john")
let user2 = new User("Mek")

console.log(user2.name)