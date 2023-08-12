// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0


// ```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
// validate before calculate
function calcSalary(object){
    // validate =>
    if(isEmpty(object)) return 0;
    // calculate
    let sum = 0
    for(let key in object){
        sum += object[key];

    }
    return sum
}

function isEmpty(obj){
    let emptyObject = true
    for( key in obj){
        emptyObject = false
    }
    return emptyObject;
}