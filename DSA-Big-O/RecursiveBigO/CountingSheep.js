function countSheep(numSheep) {
    if (numSheep === 0) {
      return;
    }
  
    console.log(`${numSheep} - Another sheep jump over the fence`);
    countSheep(numSheep - 1);
  }
//   O(n) This function runs n times recursively with an O(1) expression in each