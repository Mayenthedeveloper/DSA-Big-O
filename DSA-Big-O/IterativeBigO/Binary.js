function binaryIt(num) {
    let result = '';
    while ( num > 0 ) {
      result = (num % 2).toString() + result;
      num = Math.floor(num / 2);
    }
    return result;
  }
//   O(log n) This iterates but each iteration divides by 2 instead of decrementing so it is log n