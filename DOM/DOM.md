# DOM (Document Object Model)

JavaScript DOM (Document Object Model) manipulation refers to the process of modifying or interacting with the HTML structure and elements of a web page using JavaScript. The DOM represents the web page as a hierarchical tree structure, where each HTML element is represented as a node.

Here are some common DOM manipulation tasks you can perform using JavaScript:

### Accessing Elements:
There are multiple ways to access elements in the HTML DOM (Document Object Model) using JavaScript. Here are some common methods:

- `getElementById()`: This method retrieves an element based on its unique ID.
```javascript
var element = document.getElementById("myElementId");
```

- `getElementsByClassName()`: This method returns a collection of elements that have a specific class name.
```javascript
var elements = document.getElementsByClassName("myClassName");
```

- `getElementsByTagName()`: This method returns a collection of elements based on the HTML tag name.
```javascript
var elements = document.getElementsByTagName("div");
```

- `querySelector()`: This method returns the first element that matches a specific CSS selector (#idName or .className).
```javascript
var element = document.querySelector("#myElementId");
var element = document.querySelector(".myElementId");
```

- `querySelectorAll()`: This method returns a collection of elements that match a specific CSS selector.
```javascript
var elements = document.querySelectorAll(".myClassName");
```

- `parentNode`: This property returns the parent node of an element.
```javascript
var parentElement = element.parentNode;
```

- `childNodes`: This property returns a collection of all child nodes (including elements, text nodes, and comments) of an element.
```javascript
var childNodes = element.childNodes;
```

- `children`: This property returns a collection of only the child elements of an element (excluding text nodes and comments).
```javascript
var childElements = element.children;
```

- `nextSibling` and `previousSibling`: These properties return the next and previous sibling nodes of an element.
```javascript
var nextSibling = element.nextSibling;
var previousSibling = element.previousSibling;
```

- `querySelector()` and `querySelectorAll()` can also be used with the context of a specific element to search for descendants within that element.
```javascript
var descendantElements = element.querySelectorAll(".myClassName");
```