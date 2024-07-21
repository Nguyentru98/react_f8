// vs obj
const person = {
    Name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };

const {Name, age, ...rest} = person; // cú pháp destructuring , rest là phần còn lại của obj
console.log(Name) // John Doe
console.log(age) // 30
console.log(rest) // {email: 'john.doe@example.com'} 

// vs mảng 

const arr = [1,2,3,4,5]
const [el1, el2, ...conLai] = arr
console.log(el1) // 1
console.log(el2) // 2
console.log(conLai) // [3,4,5]

// sử dụng toán tử (...) hợp nhất arr vs arr , obj vs obj
var obj1 = {
    API :"https// domain/trang-chu",
    apiVersion :"v1",
    other:"khác"
};
var obj2 = {
    ...obj1, // thừa kế thuộc tính của obj1
    API:"https// domain/trang-con" // ghi đè API obj1 (vì trùng key vs obj1 , nếu trùng sẽ lấy key đc định nghĩa sau)
};
console.log(obj2) // {API :"https// domain/trang-con",apiVersion :"v1", other:"khác"};
    
    
   
