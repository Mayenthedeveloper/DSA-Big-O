function splitIt(str, predicate) {
    const result = [];
    let loop = true;
    while (loop) {
      let index = str.indexOf(predicate);
      if ( index === -1 ) break;
      result.push(str.slice(0, index));
      str = str.slice(index + predicate.length);
    }
    result.push(str);
    return result;
  }
//   O(n) This iterates through the entire string input once