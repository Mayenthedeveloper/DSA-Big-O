function countSheep(numOfSheep){


    //Base case
    if(numOfSheep === 0){
        console.log(`All sheep jumped over the fence`)
    }

    //General case
    else{
        console.log(`${numOfSheep}: Another sheep jumps over the fence `);
        countSheep(numOfSheep - 1)
    }
}