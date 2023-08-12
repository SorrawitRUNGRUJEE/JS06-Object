// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)


function addItems(itemName, totalSale, pricePerItem, discount) {
    let obj = {
        itemName: itemName,
        totalSale: totalSale,
        pricePerItem: pricePerItem,
        discount: discount,
    }

    for (let k in obj) {
        if (obj.discount == 0) {
            delete obj.discount
        }
        sum = obj.totalSale * obj.pricePerItem
        if (typeof (obj.discount) == "undefined") {
            totalPrice = sum
            console.log(`the total price is ${totalPrice}`)
            return obj
            // console.log("here")
        }
        if (typeof (obj.discount != "undefined")) {
            totalPrice = sum - (sum * +obj.discount / 100)
            // console.log("here2")
        }
    }
    console.log(`the  toal price is ${totalPrice}`)
    return obj


}
// b = prompt("enter your product name")
// c = prompt("enter your product name")
// d = prompt("enter your product name")
// let a = {
//     name: b,
//     price: c,
//     isValid: d,
// }