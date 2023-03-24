// var text = [{
//     "id" : "1",
//     "message" : "hello"
// },
// {
//     "id" : "2",
//     "message" : "everyone"
// }];

// console.log(text[0]);
// console.log(text[1]);
// for(var i = 0; i<text.length; i++){
//     var obj = text[i];
//     console.log(obj.id + " " + obj.message);
// }

// console.log(obj.id + " " + obj.message);

var text = [{
    "id" : "1",
    "message" : "hello"
}];
var text1 = [{
    "id" : "1",
    "message" : "hello"
}];
var result = _.isEqual(text, text1);
console.log(result);

// console.log(text.id == text1.id);
// console.log(text.message == text1.message);
