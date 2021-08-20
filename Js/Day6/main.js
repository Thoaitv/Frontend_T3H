// Destructuring assigment
// Sử dụng cho cả object và array
// let arr = ["A", "B"];
// // Khi làm bình thường
// let fName = arr[0] // A
// let sName = arr[1] // B

// // can do with DESTRUCTURING Assigment
// let [first, second] = arr;
// console.log("a: ", first);
// console.log("b: ", second);

// // example
// let [a, b, c] = "abc"; //"abc" <=>["a","b","c"]
// console.log(a); // a
// console.log(b); // b
// console.log(c); // c

// // example
// let [x, y, z, t] = "Ta van thoai".split(" ");
// console.log(x); // ta
// console.log(y); // van
// console.log(t); // undefined

// //merge destructuring with rest
// // not set value
// let[f,s] = [];
// console.log(f);// undefined
// console.log(s);// undefined

// let [f = "first name", s = "second name"] = ["Thoai"]
// console.log(f); // Thoai
// console.log(s); // second name


// object destructuring
// basic syntac: let{var1, var2} = {var1:..., var2:...}
// let Meo = {
//     chan: "4",
//     mau: "Den",
//     can: "2kg"
// }

// let { chan, mau, can } = Meo; //<=> let vb = Meo.chan //4
// console.log(chan); // 4

// let { chan: c, mau: m, can } = Meo; //<=> let vb = Meo.chan //4
// console.log(c); // 4
// console.log(m); // Den

//Default obj
// let Cho = {
//     de: "khong"
// };

// let { chan: c = "4", rang: r = 10, de, cao } = Cho;
// console.log(c); //4
// console.log(r); //10
// console.log(de); //khong
// console.log(cao); // und


// Nested Object
// let conCho = {
//     keu: {
//         meomeo: 0,
//         gaugau: 1.
//     }
// };
// //Nested destructuring
// let {
//     keu: {
//         meomeo,
//         gaugau
//     }
// } = conCho;
// console.log(meomeo);
// console.log(gaugau);



// class and function
// extend constructor
// syntax

//F.prototype
// let animal = {
//     eat: true
// }

// function Cat(name) {
//     this.name = name;
// }
// //prototype
// Cat.prototype = animal; //extend
// let cat1 = new Cat("ana");
// let cat2 = new Cat("hany");
// console.log(cat1.eat); // true
// console.log(cat1); // ana true

// //ex2
// function Dog(age) {
//     this.age = age;
// }
// let dog1 = new Dog(1);
// let dog2 = new dog1.constructor(2);
// console.log(dog2);
// // function có thể kế thừa và có phương thức khởi tạo

// // class basic syntax
// class MyClass {
//     // class method
//     // constructor{...}
//     // methods
//     // methods1(){...}
//     // methods2(){...}
// }

// example class with constructor
// class ListUser {
//     // constructor
//     constructor(name, age, address, phone) {
//             this.name = name;
//             this.age = age;
//             this.address = address;
//             this.phone = phone;
//         }
//         // methods
//     getNumber() {
//         console.log("name: ", this.name);
//     }
// }
// let user1 = new ListUser("Thoai", 18, "TN", 0123);
// user1.getNumber(); // Thoai

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 3) {
//             console.log("Tên quá ngắn");
//             return;
//         }
//         this._name = value;
//     }
// }
// let user = new User("Thoai");
// console.log(user.name); // Thoại
// user = new User("")
// console.log(user); // Tên quá ngắn


class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} fly with speed is ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} not run`);
    }
}
let animal = new Animal("Cat");

class Bird extends Animal {
    sleep() {
        console.log(`${this.name} sleeping`);
    }
}
let chimse = new Bird("Chim se");
chimse.run(20); // Chim se fly with speed is 20