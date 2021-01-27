const Array = require('./array')
const Memory = require('./memory')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

//What is the length, capacity and memory address of your array?

// length = 1
// capacity = 3
// ptr = 0
arr.push(5);
arr.push(15);
arr.push(19);
arr.push(45);
arr.push(10);
// length = 6
// capacity = 12
// ptr = 3
// address = memory[3] to memory[8]

arr.pop();
arr.pop();
arr.pop();

// length = 3
// capcity = 12
// ptr = 3
// memory = memory[3] to memory[5]


arr = new Array();
arr.push('tauhida');
console.log(arr.get(0));


//Purpose of resize()
//Have enough space to hold our array if things are added or modified
//So this causes us to copy it to a new space in memory, where
//there is enough space to store its contents for the time being