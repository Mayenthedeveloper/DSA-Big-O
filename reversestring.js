const reverseString = (string)=> {
    //base case
    if(string === ''){
        return '';
    }

    return reverseString(string.slice(1))+string[0];

}

const testString = 'lemon';
console.log(reverseString('lemon'));