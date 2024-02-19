# JavaScript Data Types and Variables

## Data Types

### 1. **Primitive Data Types:**

#### a. **Number:**
Represents numeric values.
```javascript
let age = 25;
let price = 19.99;
```

#### b. **String:**
Represents textual data.
```javascript
let name = "John Doe";
let message = 'Hello, World!';
```

#### c. **Boolean:**
Represents logical values, `true` or `false`.
```javascript
let isStudent = true;
let hasLicense = false;
```

#### d. **Null:**
Represents the absence of a value.
```javascript
let emptyValue = null;
```

#### e. **Undefined:**
Represents a variable that has been declared but not assigned a value.
```javascript
let undefinedVar;
```

#### f. **BigInt:**
Represents integers larger than the maximum safe integer.
```javascript
let bigNumber = 123456789012345678901234567890n;
```

### 2. **Composite Data Types:**

#### a. **Object:**
Represents a collection of key-value pairs.
```javascript
let person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
```

#### b. **Array:**
Represents an ordered list of values.
```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "orange", "banana"];
```

#### c. **Function:**
Represents a reusable block of code.
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

## Variables

Variables are used to store and manipulate data.

```javascript
// Variable declaration and assignment
let score = 95;

// Variable reassignment
score = 100;

// Using variables in expressions
let bonusPoints = score + 20;

// Variables can hold different data types
let greeting = "Welcome!";
let isActive = true;
```

In JavaScript, you can use the `let`, `const`, or `var` keyword to declare variables. `let` and `const` are block-scoped, while `var` is function-scoped.

```javascript
const pi = 3.14; // Constant variable, cannot be reassigned
var counter = 0; // Avoid using 'var' for modern JavaScript
```

Remember to choose appropriate variable names that are descriptive and follow best practices for clean and maintainable code.
