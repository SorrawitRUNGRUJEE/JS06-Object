// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา
const log = (console.log) 

function newObject(){
        const terminate = "stop"
        let checkNull
        let checkString
        let object ={}
        let assign ={}
        // const assign ={}
        do{
            keyInput = prompt("enter key properties") || ""
            checkNull = keyInput == null
            checkString = keyInput.trim() == ""
            invalidInput = (checkNull || checkString)
            if(keyInput == terminate || invalidInput) break
            valueInput = prompt("enter value properties") || ""
            checkNull = valueInput == null
            checkString = valueInput.trim() == ""
            invalidInput = (checkNull || checkString)
            if(valueInput == terminate || invalidInput) break
            assign = {[keyInput]:valueInput}
            object = Object.assign(object,assign)
            
          
            // log(keyInput,valueInput)
            
            
            
            
            
        }while(valueInput!= terminate) return object
       
        
}






// function Calculator(){
   
//     this.read =  function () {
//         this.a = +prompt("enter first number")
//         this.b = +prompt("enter second number")
//     }

//     this.sum = function (){
//         return this.a + this.b
//     }

//     this.mul = function (){
//         return this.a * this.b
//     }

    
// }