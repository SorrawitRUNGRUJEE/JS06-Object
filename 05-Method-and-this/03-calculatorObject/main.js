// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// ```js
let calculator = {

    read() {
        this.a = +prompt("enter number 1")
        this.b = +prompt("enter number 2")

    },

    sum() {
        return this.a + this.b
    },

    mul() {
        return this.a * this.b
    }





};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());