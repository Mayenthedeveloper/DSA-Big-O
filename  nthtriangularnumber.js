const nthTriangular = (num)=>{
    //base case

    if(num === 1){
        return 1
    }
    return num + nthTriangular(num-1)
}

console.log(nthTriangle(1))
console.log(nthTriangle(2))
console.log(nthTriangle(3))
console.log(nthTriangle(4))
console.log(nthTriangle(9))