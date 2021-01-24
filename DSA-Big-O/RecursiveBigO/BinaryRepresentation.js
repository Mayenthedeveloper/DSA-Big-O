function binary(num, result='') {
    if (num === 0) {
      return result;
    }
  
    result = (num % 2).toString() + result;
    return binary(Math.floor(num / 2), result);
  }
//   O(log n) This function runs log n times recursively because the recursive call is divided by two each recursion with O(1) expressions in each