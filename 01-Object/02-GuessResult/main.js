// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *
user = {};
console.log(user); // **

```
// /* will return emial: cc@gmial.com
                //   is active : false
//  /** will return undefiend ? ==. return error (reasigning const variable)
// 
