# JavaScript Functions Documentation

## 1. **What are Functions:**

In JavaScript, a function is a reusable block of code designed to perform a specific task or calculate a value. Functions help organize code, promote reusability, and improve maintainability.

## 2. **`function` Keyword:**

### Example:
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

**Explanation:** The `function` keyword is used to declare a function named `greet`. It takes a parameter `name` and logs a greeting message.

## 3. **Creating a Function:**

### Example:
```javascript
function addNumbers(a, b) {
  return a + b;
}
```

**Explanation:** This function `addNumbers` takes two parameters, `a` and `b`, and returns their sum.

## 4. **Calling a Function:**

### Example:
```javascript
let result = addNumbers(3, 5);
console.log(result); // Output: 8
```

**Explanation:** The `addNumbers` function is called with arguments `3` and `5`, and the result is stored in the `result` variable.

## 5. **Parameters in Functions:**

### Example:
```javascript
function multiply(a, b) {
  return a * b;
}

let product = multiply(4, 6);
console.log(product); // Output: 24
```

**Explanation:** `multiply` function takes two parameters, `a` and `b`, and returns their product.

## 6. **Arguments vs Parameters:**

**Parameters:** Variables listed in the function declaration.

**Arguments:** Values passed to the function when calling it.

### Example:
```javascript
function greet(personName) {
  console.log(`Hello, ${personName}!`);
}

greet("Alice"); // "Alice" is the argument passed to the function.
```

## 7. **Passing N Number of Parameters:**

### Example (Cart Total Calculation):
```javascript
function calculateCartTotal(...itemsPrices) {
  return itemsPrices.reduce((total, price) => total + price, 0);
}

let totalAmount = calculateCartTotal(20, 30, 15, 25);
console.log(totalAmount); // Output: 90
```

**Explanation:** The `calculateCartTotal` function uses the rest parameter (`...itemsPrices`) to accept any number of item prices and calculates the total.

## 8. **`arguments` Keyword:**

### Example:
```javascript
function displayArguments() {
  console.log(arguments);
}

displayArguments(1, "apple", true);
```

**Explanation:** The `arguments` keyword allows a function to accept any number of arguments, even if not defined in the function signature.

## 9. **Anonymous Functions:**

### Example:
```javascript
let square = function (num) {
  return num * num;
};

console.log(square(4)); // Output: 16
```

**Explanation:** An anonymous function is assigned to the variable `square`. It can be invoked just like a named function.

## 10. **Literal Way of Creating Functions:**

### Example:
```javascript
let subtract = (a, b) => a - b;

console.log(subtract(8, 3)); // Output: 5
```

**Explanation:** Using an arrow function to define a function in a more concise way.

## 11. **Self-Invoking Functions:**

### Example:
```javascript
(function () {
  console.log("I am a self-invoking function!");
})();
```

**Explanation:** This function is defined and immediately invoked without being stored in a variable. Useful for creating a private scope.

These examples cover various aspects of JavaScript functions, from basic function creation and invocation to handling parameters, arguments, and different function expressions.