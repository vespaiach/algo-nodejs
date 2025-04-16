## Dynamic Array

Implement dynamic array and support these apis:
- **append(x)**: add element x to the end of the array
- **get(i)**: returns the element at index i.
- **set(i, x)**: updates the preexisting element at index i to be x.
- **size()**: return the number of elements in the array
- **popBack()**: removes the last element.
- **pop(i)**: removes the element at a specific index. Every element after that index should be shifted left by one index so that there are no gaps remaining in the fixed-size array. Return the element removed.
- **contains(x)**: takes an element and returns whether the element appears in the array.
- **insert(i, x)**: takes an index and an element, and add the element at the index, shifting right any preexisting elements at index i or greater.
- **remove(x)**: takes in an element and removes the first instance of that element in the array. Return the index of that element was at or -1 if the element was not found.

## Time Complexity

- append(x): O(1) Amortized time
- get(x): O(1)
- set(i, x): O(1)
- size(): O(1)
- popBack(): O(1) Amortized time
- pop(i): 0(n)
- containes(x): O(n)
- insert(i, x): O(n)
- remove(x): O(n)
