var a = "Anh"
var b = "Bảo"

var string = `${a} ${b}`
console.log(string)

let obj = { a: 'ngu', b: 'the' }
let { a: objA, b: objB } = obj;
console.log(objA)

let str = 'anh';

for (let char of str) {
    console.log(char);
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

const result = num => num * num;
result(4);

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log("hello world!");
    }
}

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Dữ liệu đã được tải thành công" };
            resolve(data);
        }, 2000);
    });
}

async function loadData() {
    try {
        console.log("Bắt đầu tải dữ liệu...");
        const result = await fetchData();
        console.log(result.message);
    } catch (error) {
        console.error("Đã xảy ra lỗi: " + error);
    }
}

loadData();