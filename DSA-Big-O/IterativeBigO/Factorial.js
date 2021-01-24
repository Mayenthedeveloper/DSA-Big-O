function factorialIt(num) {
    let result = 1;
    for (let i = 2; i <= num; i++ ) {
      result *= i;
    }
    return result;
  }
//   O(n) This function iterates n times