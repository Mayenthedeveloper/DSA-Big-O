function doubleArray(arr) {
    if ( !arr.length ) {
      return [];
    }
  
    return [(arr[0] * 2), ...doubleArray(arr.slice(1))];
  }
//   O(n) This function runs n times recursively with an O(1) expression in each
  
  