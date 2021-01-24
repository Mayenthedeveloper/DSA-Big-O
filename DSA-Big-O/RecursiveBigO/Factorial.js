function factorial(num, result=1) {
    if (num < 1) { 
      return result;
    }
  
    return factorial(num - 1, result * num);
  }
//   O(n) This function runs n times recursively with two O(1) expressions in each
  
  