function filterArray (arr){
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 5){
            newArray.push(array[i])
        }
    }

    return newArray
}


let array = [1, 3, 4, 5,7,13,19,50]

console.log(filterArray(array))