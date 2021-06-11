const Calculate = {
  sum(inputArray) {
    if (inputArray.length === 0) {
     return 0 
    }; 
    return inputArray.reduce((sum, value) => {
      return sum + value;
    })
  },
  factorial(num) {
    if (num === 0) return 1;
    let multiplyRange = []
    for (let i=num;i>0;i--){
      multiplyRange.push(i);
    };
    return multiplyRange.reduce((total, current) => total*current)
  }
}

module.exports = Calculate;

