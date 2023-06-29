# Strings

There are several built-in string methods that allow you to manipulate and perform operations on strings. Here are some commonly used string methods:

1. `charAt(index)`: Returns the character at the specified index in a string.
```javascript
const str = 'Hello';
console.log(str.charAt(0)); // Output: "H"
```

2. `charCodeAt(index)`: Returns the Unicode value of the character at the specified index in a string.
```javascript
const str = 'Hello';
console.log(str.charCodeAt(1)); // Output: 101
```

3. `concat(str1, str2, ..., strN)`: Concatenates two or more strings and returns a new string.
```javascript
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Output: "Hello World"
```

4. `includes(searchString, position)`: Checks if a string contains the specified substring and returns true or false.
```javascript
const str = 'Hello World';
console.log(str.includes('World')); // Output: true
```

5. `indexOf(searchValue, fromIndex)`: Returns the index of the first occurrence of a specified value in a string, or -1 if not found.
```javascript
const str = 'Hello World';
console.log(str.indexOf('o')); // Output: 4
```

6. `lastIndexOf(searchValue, fromIndex)`: Returns the index of the last occurrence of a specified value in a string, or -1 if not found.
```javascript
const str = 'Hello World';
console.log(str.lastIndexOf('o')); // Output: 7
```

7. `length`: Returns the length of a string.
```javascript
const str = 'Hello World';
console.log(str.length); // Output: 11
```

8. `localeCompare(compareString)`: Compares two strings in the current locale and returns -1, 0, or 1.
```javascript
const str1 = 'Hello';
const str2 = 'hello';
console.log(str1.localeCompare(str2)); // Output: -1
```

9. `match(regexp)`: Searches a string for a match against a regular expression and returns an array of matches.
```javascript
const str = 'Hello World';
console.log(str.match(/o/g)); // Output: ["o", "o"]
```

10. `repeat(count)`: Returns a new string with a specified number of copies of the original string.
```javascript
const str = 'Hello ';
console.log(str.repeat(3)); // Output: "Hello Hello Hello "
```

11. `replace(searchValue, replaceValue) and replaceAll(searchValue, replaceValue)`: Searches a string for a specified value or regular expression and returns a new string where the specified value is replaced.
```javascript
const str = 'Hello World';
console.log(str.replace('World', 'JavaScript')); // Output: "Hello JavaScript"
```

12. `search(regexp)`: Searches a string for a specified value or regular expression and returns the index of the match.
```javascript
const str = 'Hello World';
console.log(str.search(/o/)); // Output: 4
```

13. `slice(startIndex, endIndex)`: Extracts a section of a string and returns a new string.
```javascript
const str = 'Hello World';
console.log(str.slice(6, 11)); // Output: "World"
```

14. `split(separator, limit)`: Splits a string into an array of substrings based on a specified separator.
```javascript
const str = 'Hello,World';
console.log(str.split(',')); // Output: ["Hello", "World"]
```

15. `startsWith(searchString, position)`: Checks if a string starts with the specified substring and returns true or false.
```javascript
const str = 'Hello World';
console.log(str.startsWith('Hello')); // Output: true
```

16. `substring(startIndex, endIndex)`: Extracts the characters from a string between two specified indices and returns a new string.
```javascript
const str = 'Hello World';
console.log(str.substring(6, 11)); // Output: "World"
```

17. `toLocaleLowerCase()`: Converts a string to lowercase based on the host's current locale.
```javascript
const str = 'Hello World';
console.log(str.toLocaleLowerCase()); // Output: "hello world"
```

18. `toLocaleUpperCase()`: Converts a string to uppercase based on the host's current locale.
```javascript
const str = 'Hello World';
console.log(str.toLocaleUpperCase()); // Output: "HELLO WORLD"
```

19. `toLowerCase()`: Converts a string to lowercase.
```javascript
const str = 'Hello World';
console.log(str.toLowerCase()); // Output: "hello world"
```

20. `toUpperCase()`: Converts a string to uppercase.
```javascript
const str = 'Hello World';
console.log(str.toUpperCase()); // Output: "HELLO WORLD"
```

21. `toString()`: Returns a string representation of an object.
```javascript
const str = 'Hello World';
console.log(str.toString()); // Output: "Hello World"
```

22. `trim()`: Removes whitespace from both ends of a string.
```javascript
const str = '   Hello World   ';
console.log(str.trim()); // Output: "Hello World"
```

23. `valueOf()`: Returns the primitive value of a string object.
```javascript
const str = new String('Hello World');
console.log(str.valueOf()); // Output: "Hello World"
```

24. `padStart(targetLength, padString)`: The padStart() method pads the current string with another string until it reaches the specified target length.
```javascript
const str = "Hello";
const paddedStr = str.padStart(10, "*");
console.log(paddedStr);  // Output: "*****Hello"
```

25. `padEnd(targetLength, padString)`: The padEnd() method pads the current string with another string until it reaches the specified target length.
```javascript
const str = "Hello";
const paddedStr = str.padEnd(10, "*");
console.log(paddedStr);  // Output: "Hello*****"
```