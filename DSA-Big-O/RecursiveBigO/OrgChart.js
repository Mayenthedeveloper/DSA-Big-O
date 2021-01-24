function traverse(node, indent=0) {
    for (const key in node) {
      console.log(' '.repeat(indent), key);
      traverse(node[key], indent + 2);
    }
  }
//   O(n) This function runs n times recursively with expressions to work through the object one time