# JavaScript Document Object and CRUD Operations

## Document Object Model (DOM)

The Document Object Model (DOM) is a programming interface for web documents. In JavaScript, the DOM represents the structure of an HTML or XML document as a tree of objects. The top-level object in this tree is the `document` object.

## CRUD Operations with the Document Object

### 1. **Create (C)**

#### a. **createElement:**
Creates a new HTML element.

**Example:**
```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';
document.body.appendChild(newDiv);
```

#### b. **createTextNode:**
Creates a text node.

**Example:**
```javascript
const newText = document.createTextNode('This is some text.');
const paragraph = document.createElement('p');
paragraph.appendChild(newText);
document.body.appendChild(paragraph);
```

### 2. **Read (R)**

#### a. **getElementById:**
Retrieves an element by its ID.

**Example:**
```javascript
const myElement = document.getElementById('myId');
```

#### b. **getElementsByClassName:**
Retrieves elements by their class name.

**Example:**
```javascript
const elementsByClass = document.getElementsByClassName('myClass');
```

#### c. **getElementsByTagName:**
Retrieves elements by their tag name.

**Example:**
```javascript
const paragraphs = document.getElementsByTagName('p');
```

### 3. **Update (U)**

#### a. **innerHTML:**
Modifies the HTML content of an element.

**Example:**
```javascript
document.getElementById('myId').innerHTML = 'New content.';
```

#### b. **setAttribute:**
Sets the value of an attribute on the specified element.

**Example:**
```javascript
const myElement = document.getElementById('myId');
myElement.setAttribute('class', 'newClass');
```

### 4. **Delete (D)**

#### a. **removeChild:**
Removes a child element from the DOM.

**Example:**
```javascript
const parent = document.getElementById('parentElement');
const child = document.getElementById('childElement');
parent.removeChild(child);
```

### Other Useful Methods

#### a. **querySelector:**
Returns the first element that matches a specified CSS selector.

**Example:**
```javascript
const firstParagraph = document.querySelector('p');
```

#### b. **addEventListener:**
Attaches an event handler to an element.

**Example:**
```javascript
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  alert('Button clicked!');
});
```

#### c. **querySelectorAll:**
Returns a static NodeList representing a list of elements that match a specified CSS selector.

**Example:**
```javascript
const allParagraphs = document.querySelectorAll('p');
```

This covers the basics of CRUD operations and other common methods used with the JavaScript Document Object. The DOM provides a powerful interface for dynamically interacting with and manipulating web documents.