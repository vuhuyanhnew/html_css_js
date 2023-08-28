var array = [1, 2, 3];
array.push(4);
console.log(array);
array.unshift(6, 5);
array = [1, 2, 3, 4, 5, 6];
console.log(array.splice(2, 1));
array = [1, 2, 3, 4, 5, 6];
console.log(array.splice(3, 0, 7, 8));
console.log(array);
function getSum(a, b, callback) {
    var result = a + b;
    callback(result);
}

function printResult(result) {
    console.log("sum: " + result);
}
getSum(2, 4, printResult);
for( x = 0; x < array.length; x++){
    console.log(array[x]);
}
const arr = [1, 4, 7];
const brr = arr.map(function(value, index, array){
    const a = value *2;
    return a;

});
console.log("new array", brr)

var myInfo = {
    name: "Huy Anh",
    age: 23,
};
console.log("hello " + myInfo.name)

function Person(name, age, address, speak){
    this.name= name;
    this.age = age;
    this.address = address;
    this.speak = function(){
        return "Im ${name}, im ${age} years old";
    };
    
}

 
    const sum = arr.reduce(function (preValue, currentValue){
        return  preValue + currentValue;
    });
    console.log("a:" + sum)