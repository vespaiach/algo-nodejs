export function generateValidStringsWithBacktracking(startingCharacters, nextCharacterMap, n) {
  
  function printAllValidStrings(prefixArray, allowedFollowingCharacters) {
		console.log(prefixArray.join(''))

		if (prefixArray.length === n) {
			return;
		}

		for(let char of allowedFollowingCharacters) {
			prefixArray.push(char);
			printAllValidStrings(prefixArray, nextCharacterMap[char]);
			prefixArray.pop();
		}
  } 

  for(let startChar of startingCharacters) {
    printAllValidStrings([startChar], nextCharacterMap[startChar])
  }
}

export function generateValidStringsWithBFS(startingCharacters, nextCharacterMap, n) {
  
  function printAllValidStrings(startString) {
    const stringQueue = []
    stringQueue.push(startString)

    while(stringQueue.length > 0) {
      const currStr = stringQueue.shift()
      console.log(currStr)

      if (currStr.length < n) {
        const lastChar = currStr[currStr.length - 1]
        for(let char of nextCharacterMap[lastChar]) {
          stringQueue.push(currStr + char)
        }
      }
    }
  }	

  for(let startChar of startingCharacters) {
    printAllValidStrings(startChar, nextCharacterMap[startChar])
  }
}