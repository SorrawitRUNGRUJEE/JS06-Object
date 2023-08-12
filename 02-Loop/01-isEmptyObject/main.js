// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่  
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

let a ={
    name: "",
}

let b={
    
}

function isEmpty(obj){
    let emptyObject = true
    for( key in obj){
        emptyObject = false
    }
    return emptyObject;
}

    
