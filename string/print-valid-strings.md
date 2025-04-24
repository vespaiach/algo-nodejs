# Problem Statement

You need to write a program that generates all valid strings up to a given length n.

# Definition of a Valid String

A valid string:

- Begins with an allowed starting character.
- Follows a defined set of rules specifying which characters can follow a given character.

# Input

You are given:

- A list of starting allowed characters (startingCharacters).
- A dictionary (nextCharacterMap) that maps each character to a list of allowed characters that can follow it.
- An integer n (n > 0), representing the maximum length of valid strings to generate.

# Output

- Store all valid strings to an array.
- Return the array.

# Example Cases

**Example 1**

```js
startingCharacters = ['a', 'b', 'c']
nextCharacterMap = {
    'a': ['b' , 'c'],
    'b': ['a'],
    'c': ['a', 'b']
}
n = 4

" Expected Output

'a'
'b'
'c'
'ab'
'ac'
'ba'
'ca'
'cb'
'aba'
'aca'
'acb'
...
...
'caca'
...
'cbac'
```

**Example 2**

```js
startingCharacters = ['a']
nextCharacterMap = {
    'a': ['b'],
    'b': ['a'],
}
n = 4

" Expected Output

'a'
'ab'
'aba'
'abab'

```

**Example 3**

```js
startingCharacters = ['a']
nextCharacterMap = {
    'a': [],
    'b': ['a'],
}
n = 40

" Expected Output

'a'
```

# Clarifications and Edge Cases to Consider

- If a character has no allowed following characters, the string terminates at that character.
- If n == 1, the output consists only of the starting characters.
- The function must generate strings recursively or iteratively while respecting the constraints in next_character_map.
- The output does not need to be sorted in any specific order.

# Pseudocode

**Solution 1**: backtracking

```
startingCharacters = ['a']
nextCharacterMap = {
    'a': [],
    'b': ['a'],
}
n = 40

printValidString(prefix, allowedFollowingCharacters)
    CONSOLE.LOG(prefix)

    IF len(prefix) === n
        RETURN

    FOR EACH character in allowedFollwingCharacters
        printValidString(prefix + character, nextCharacterMap[character])


FOR EACH character in startingCharacters
    printValidString(character, nextCharacterMap[character])
```

**Note**: Use array and push/pop operator to reduce time complexity from string concatenation O(n) to O(1)

**Solution 2**: BFS

```
printValidString(startChar)
    CREATE stringQueue QUEUE

    stringQueue ENQUEUE startChar

    WHILE stringQueue IS NOT EMPTY
        str = DEQUEUE stringQueue
        PRINT str

        IF LEN str < n
            GET lastChar FROM str
            FOR EACH char IN nextCharacterMap[lastChar]
                stringQueue ENQUEUE (str + char)

FOR EACH character IN startingCharacters
    printValidString(character)
```