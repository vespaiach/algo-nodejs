# Problem Statement

You need to write a program that generates all valid strings up to a given length n.

# Definition of a Valid String

A valid string:

- Begins with an allowed starting character.
- Follows a defined set of rules specifying which characters can follow a given character.

# Input

You are given:

- A list of starting allowed characters (starting_characters).
- A dictionary (next_character_map) that maps each character to a list of allowed characters that can follow it.
- An integer n (n > 0), representing the maximum length of valid strings to generate.

# Output

- Print all valid strings directly to the console.
- Do not store the output in a list or any other collection.

# Example Cases

**Example 1**

```python
starting_characters = ['a', 'b', 'c']
next_character_map = {
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

```python
starting_characters = ['a']
next_character_map = {
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

```python
starting_characters = ['a']
next_character_map = {
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