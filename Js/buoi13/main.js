// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(1) 
//     }, 1000);
// }).then(function (result) {
//     alert(result) //1
//     return result * 2;
// }).then(function (result) {
//     alert(result) //2
//     return result * 2;
// }).then(function (result) {
//     alert(result) //4
//     return result * 2;
// });

// Arrow function
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(1) 
//     }, 1000);
// }).then(result=>{
//     alert(result);       //1
//     return result * 2;
// }).then(result =>{
//     alert(result);      //2
//     return result * 3
// }).then(result =>{
//     alert(result);     //6
//     return result * 2 //12
// });

//example 2
// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(1)
//     }, 1000);
// }).then(reslut =>{
//     alert(reslut);                           //1
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => reject(reslut*2)); //2
//     })
// }).then(reslut =>{
//     alert(reslut);                           //2
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => resolve(reslut*2));//4
//     }) 
// }).then(reslut =>{
//     alert(reslut);                          //4
// }).catch(e=> console.log(new Error(e)));

let postApi = 'https://jsonplaceholder.typicode.com/todos';
fetch(postApi)
.then(function(response){// Nhận về 1 response
    return response.json(); // từ response json ra 1 promise
    // JSON.parse: JSON =-> Javascrip types
})
// .then(posts => console.log(posts)) // Nhận lại cái json từ promise trên
// (.then(function(posts) {
//     console.log(posts);
// })
.then(function(posts) {
    var htmls = posts.map(function(post) {
        return `<li>
            <p>${post.id}<p>
            <h2>title: ${post.title}<h2>
            </li>`;
    });
    // var html = htmls.join('');
    document.getElementById('posta').innerHTML = htmls;
})

// // .then(data => appendNews(data))
// // .then(data => console.log(data))
// .catch(err => alert(err));


// Promise All
// Promise.all([
//     new Promise(resolve => setTimeout(() => {
//         resolve(1)
//     }, 1000)),
//     new Promise(resolve => setTimeout(() => {
//         resolve(2)
//     }, 2000)),
//     new Promise(resolve => setTimeout(() => {
//         resolve(3)
//     }, 3000)),
// ]).then(alert);

// example 2
// let urls = [
//     'https://api.github.com/users/thoaitv',
//     'https://api.github.com/users/tienvv'
// ];
// let requestApi = urls.map(urls => fetch(urls)); // requestApi trả về 1 mảng gồm 2 promise khi fetch urls
// //urls là 1 mảng gồm 2 phần tử urls
// Promise.all(requestApi).then(responese => responese.forEach( // Nhận lại respon
//     res => console.log((`${res.url}: ${res.status}`)),
// ))


// ==========async / await==================
// //example
// async function syncAwait() {
//     let promise = new Promise((res, rej) =>{
//         setTimeout(() => {
//             res("thoai")
//         }, 1000);
//     })
//     let result = await promise;
//     console.log(result);
// }
// syncAwait();

// let urls = [
//     'https://api.github.com/users/thoaitv',
//     'https://api.github.com/users/tienvv'
// ];


// async function showAvatar(params) {
//     let respon = await fetch(`https://api.github.com/users/${params}`); // đọc và lấy ra API
//     if(respon.status === 404) alert("Khong tim thay")
//     console.log(respon);
//     let user = await respon.json(); // trả về dạng json
//     console.log(user);
//     let img = document.createElement('img');
//     img.src = user.avatar_url;
//     img.clasName = "demoAvt";
//     document.body.append(img);
//     return user;
// }
// showAvatar('thoaitv');
// showAvatar('vuvantienhd96');
// showAvatar('404');


