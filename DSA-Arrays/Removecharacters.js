function remove(str, vowels) {
    let newStr = ''
    let newVowels = []
    for(let j=0; j<vowels.length; j++){
      newVowels.push(vowels[j])
    }
    console.log(newVowels)
    for(let i=0; i<str.length; i++){
      if(!newVowels.includes(str[i])) {
        newStr += str[i]
      }
    }
    return newStr
  }
   console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))