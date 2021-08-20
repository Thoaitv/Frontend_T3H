// overriding a method in class
// class Animal {
//     constructor(info) {
//         this.speed = 0;
//         this.info = info;
//     }
//     eat() {
//         console.log("Animail eatting");
//     }
//     fly(speed) {
//         this.speed = speed;
//         alert(`${this.eat.info} run with ${this.speed} !`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.info} this standby `);
//     }
// }
// class Bird extends Animal() {
//     constructor() {
//         // super();
//     }
//     hidden() {
//         alert(`${this.info} hidden`)
//     }
//     stop() {
//         // super.stop();
//         this.hidden()
//     }

//     eat() {
//         console.log("Birth eatting");
//     }
// }

// create a bird
// let bird = new Bird("angry bird");
// bird.eat(); //bird eatting
// bird.fly(10);
// bird.stop();

// example 2
// class BirdTwo extends Animal {
//     stop() {
//         setTimeout(() => {
//             super.stop();
//         }, 1000);
//     }
// }
// let birdTwo = new BirdTwo("Boom");
// birdTwo.stop(); // boom this standby


// btvn
// class Family {
//     static plant = "eats somethings";
//     constructor(name, speed) {
//         this.plant;
//         this.speed = speed;
//     }
//     run(speed = 0) {
//         this.speed += speed;
//         alert(`${this.name} run ${this.speed}`);
//     }
//     static compare(family1, family2) {
//         return family1.speed - family2.speed;
//     }
// }

// class Julia extends Family {
//     hidden() {
//         alert(`${this.name} is hiddens`);
//     }
// }

// let julias = [
//         new Julia("Julia is Junia", 10),
//         new Julia("not Junia", 5)
//     ]
    // julias.sort(Julia.compare);
    // Julia("not Junia", 5),  Julia("Julia is Junia", 10)
    // console.log(julias[0].run()); // not Junia run 5 //???
    // console.log(Julia.plant); // eatsomething


// CallBack
// function callBack(value) {
//     console.log("Hello", value);
// }

// function callSomething(param, callback) {
//     // do something
//     let sum = 2 + param;
//     return callback(sum);
// }
// console.log(callSomething(2, callBack));



//============= promise=======================

// ban đầu: state: "Pending"
// Khi resole được gọi: "Fulfilled"
//Khi reject được gọi: "Reject"
// let promise = new Promise(function(resole, reject){
//     setTimeout(() => {
//         resole('get success');// get success
//     }, 1000);
// }); 

// let promise = new Promise(function(resole, reject){
//     setTimeout(() => {
//         reject(new Error('get fail')); // ERROR
//     }, 1000);
// });

//both
// let promise = new Promise(function(resolve, reject){
//     resolve('Oke');
//     reject('get fail');
//         setTimeout(() => {
//             resolve('timeOUT');
//         }, 1000);
//     });
// promise.then(console.log)
// then, catch, finally
// promise
// .then(function(result){
//     // Xử lí khi oke
// },
// function(error){
//     // Xử lí khi fail
//     }
// );

// promise
// .then(result =>{
// // Xử lí khi oke
// },
// error=>{
// // Xử lí khi fail
//     }
// )

// example 2.2
// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(console.log("Oke promise2"));
//     }, 1000);
// });
// promise2.then(result => console.log(result),
// error=>{console.log("fail");});

//example 2.3
// let promise3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         reject(new Error("Fail"));
//     }, 1000);
// });
// promise3.then(result => console.log(result),
// error=>{console.log(error);
// });

//example 2.4
// let promise4 = new Promise(function(resolve){
//     setTimeout(() => {
//         resolve("oke promise4"); 
//     }, 1000);
// });
// promise4.then(console.log);

// //catch
// let promiseCatch = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         reject(new Error("fail promiseCatch1"));
//     }, 1000);
// });
// promiseCatch
// .catch(alert)

// finally
// let promiseFinally = new Promise(function(data, err){
//     data(console.log("finall oke"));
// })
// promiseFinally
// .then(respon =>console.log()),
// err => new Error("error").
// finally(()=> console.log("final"));

// fetch(Promise)
