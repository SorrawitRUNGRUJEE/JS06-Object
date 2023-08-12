// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator(){
   
    this.read =  function () {
        this.a = +prompt("enter first number")
        this.b = +prompt("enter second number")
    }

    this.sum = function (){
        return this.a + this.b
    }

    this.mul = function (){
        return this.a * this.b
    }

    
}

calculator = new Calculator()

// let calculator = new  Calculator()