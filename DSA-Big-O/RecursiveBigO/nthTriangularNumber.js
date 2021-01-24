function calculateTrianglularNamuber(num, prev=0) {
    if (num === 0) {
      return prev;
    }
  
    return calculateTrianglularNamuber(num - 1, num + prev);
  }
//   O(n) This function runs n times recursively with two O(1) expressions in each