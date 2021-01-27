function strRotate(str1, str2) {
    let newStr = str2
    for(let i=0; i<str1.length; i++){
      if(newStr === str1){
        return true
      }
      else{
        newStr = newStr.slice(1) + newStr.charAt(0)
      }
    }
    return false
  }
  console.log(strRotate('amazon', 'azonma'))