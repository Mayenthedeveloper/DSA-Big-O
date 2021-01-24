function anagram(str, result=[], prefix='') {
    if (str.length === 0) {
      result.push(prefix);
      return result;
    }
  
    for ( let i = 0; i < str.length; i++ ) {
      anagram((str.slice(0, i) + str.slice(i+1)), result, (prefix + str[i]));
    }
  
    return result;
  }
//   O(n!) The top level for loop will recursively call the function with a value of n - 1 and will continue to call it until n = 0 so it has O(n!)