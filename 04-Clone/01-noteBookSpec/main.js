// ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign


// ```js
const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};

let newObject1 = {}
let newObject2 = {}
// ```
    for(let k in notebook){
        newObject1[k] = notebook[k]
 }

 console.log(newObject1)

 Object.assign(newObject2,notebook)

 console.log(newObject2)