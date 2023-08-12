// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
// let fruitBasket = {
//         mango: 2,
// }

// function addS(object){
//     for(let key in object)
//     console.log(object.key)
// }
const terminate = "stop"
const fruit = {}
let key;
let value;

do{
     key = prompt(`Enter fruit`)
     value = prompt(`Enter Quantity`)
    if(value == 1){
        fruit[key] = value
    }

    if(value > 1){
        fruit[`${key}s`] = value;
    }

} while(key != terminate && value != terminate)