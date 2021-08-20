// let linkApi = "https://gorest.co.in/public-api/users";
// let postApi = 'https://reqres.in/api/users?page=2';

// fetch(postApi)
// .then(function (resolve) {
//     return resolve.json();
// })
// // .then(posts => console.log("Thoai", posts));
// .then(function (posts) {
//     var htmls = posts.map(function (post) {
//         return `<p>${post.data[1].avatar}</p>`;
//     });
//     var html = htmls.join('');
//     document.getElementById('test').innerHTML = htmls
// })




async function showAvatar(params) {
    let respon = await fetch(`https://reqres.in/api/users?page=2/`); // đọc và lấy ra API
    let user = await respon.json(); // trả về dạng json
    let img = document.createElement('img');
    img.src = user.data[1].avatar;
    document.body.append(img);
    return user;
    console.log(user);
}showAvatar();



// let postApi = 'https://reqres.in/api/users?page=2';
// fetch(postApi)
// .then(function(response){// Nhận về 1 response
//     return response.json(); // từ response json ra 1 promise
//     // JSON.parse: JSON =-> Javascrip types
// })
// .then(function(posts) {
//     var htmls = posts.map(function(post) {
//         return `
//             <img src="${post.data[1].avatar}">`;
//     });
//     document.getElementById('test').innerHTML = htmls;
// })
