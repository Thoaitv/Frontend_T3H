new Promise(function(resolve, reject) { // *
    setTimeout(() => resolve(1), 1001)
}).then(function(result) { // **
    alert(result); //1
    return result * 2; //2
}).then(function(result) { //***
    alert(result); //2
    return result * 2; //4
}).then(function(result) { //****
    alert(result); //4
    return result * 2; //8
})



// example 2
let promise = new Promise(function(resolve, reject) { // *
    setTimeout(() => resolve(1), 1001)
});
promise.then(function(result) { // **
    alert(result); //1
    return result * 2; //2
});
promise.then(function(result) { // **
    alert(result); //1
    return result * 2; //
});
promise.then(function(result) { // **
    alert(result); //1
    return result * 2; //
});



// example 3
let promise = new Promise(function(resolve, reject) { // *
    setTimeout(() => resolve(1), 1000)
});
promise.then(function(result) { // **
    alert(result); //1
    return new Promise(function(resolve, reject) { // *
        setTimeout(() => resolve(result * 2))
    });
});
promise.then(function(result) { // **
    alert(result); //1
    return result * 2; //
});
promise.then(function(result) { // **
    alert(result); //1
    return result * 2; //
});


// fetch(promise)

let promiseFetchData = fetch(url); // url là link API