function stringSplit(str, predicate, word='') {
    if (str === '') {
      return [word];
    }
  
    if (predicate(str[str.length - 1])) {
      return [...stringSplit(str.slice(0, -1), predicate), word];
    }
    word = str[str.length - 1] + word;
    return stringSplit(str.slice(0, -1), predicate, word);
  }
//   O(n) This function runs n times recursively with two O(1) expressions in each