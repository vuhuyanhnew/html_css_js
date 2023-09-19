function sumNumber(a, b) {
    return new Promise(
        (resolve, reject) => {
            if (typeof a == "number" && typeof b == "number") {
                let sum = a + b;
                resolve(sum);
            } else {
                reject("Not number");

            }
        }
    );
}
const getData = async (a, b) => {
    sumNumber(a, b)
        .then(val => {
            console.log(val)
        })
        .catch(err => {
            console.log(err)
        })
}
getData(1, "sd");