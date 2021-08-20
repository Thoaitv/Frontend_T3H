// glocal
var address = "HaNoi";
let address2 = 'TN';

function getAddress() {
    debugger
    console.log("get address here la nha" + this.address2);
    console.log("get address here " + this.address);
}
getAddress();

let Human = { // Human là object
    name: "thoaitv",
    age: 20,
    getName: function() {
        console.log(this.name + '===' + Human.name); // this ở đây là Human
    }
}

// run getName
// this Ở đây là object human
Human.getName(); //thoaitv === thoaitv


// var windownObject = "Hello Windown";
// obj = {
//     windownObject2: 'local',
//     name: function() {
//         thoai: function() {
//             setTimeout(function() {
//                 console.log("day la this" + this.windownObject);
//             }, 1000);
//         }
//     }
// }