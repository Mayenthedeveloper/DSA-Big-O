function fib(num, result=[1, 1]) {
    if (num === 2) {
      return result;
    }
  
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fib(num - 1, result);
  }
//   O(n) This function runs n times recursively with O(1) expressions in each
  
  