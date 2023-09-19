function onlyNumbers(array) {
    let checkNumber = true;
    array.map((element) => {
      if (typeof element != 'number') {
        checkNumber = false;
      }
    });
    return checkNumber;
  }
  
  function sumNumber(array) {
    return new Promise(
      (resolve, reject) => {
        if (onlyNumbers(array)) {
          let sum = 0;
          for (const value of array) {
            sum += value;
          }
          resolve(sum);
        } else {
          reject("Has a non-integer element");
        }
      }
    );
  }
  
  const getData = async () => {
    const allPromise = Promise.all([
      sumNumber([1, 2]),
      sumNumber([3, 4])
    ]);
    const results = await allPromise;
    console.log(results);
  };
  
  getData();