Let's go through real-time examples and use cases for each loop in JavaScript.

## 1. **While Loop:**

### Example:
```javascript
let count = 0;

while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}
```

**Use Case:** Iterating until a specific condition is no longer true.

## 2. **Do-While Loop:**

### Example:
```javascript
let userInput;
do {
  userInput = prompt("Enter a number greater than 5:");
} while (parseInt(userInput) <= 5);

console.log(`You entered a number greater than 5: ${userInput}`);
```

**Use Case:** Ensuring that a block of code is executed at least once, regardless of the condition.

## 3. **For Loop:**

### Example:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}
```

**Use Case:** Iterating over a block of code for a known number of times.

## 4. **For-In Loop:**

### Example:
```javascript
const student = {
  name: "Alice",
  age: 20,
  grade: "A"
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
```

**Use Case:** Iterating over the properties of an object.

## 5. **For-Of Loop:**

### Example:
```javascript
const fruits = ["apple", "orange", "banana"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

**Use Case:** Iterating over the values of an iterable object, like an array.

## 6. **For-Each Loop (Note: Not native to JavaScript):**

### Example (Using Array forEach method):
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
```

**Use Case:** Iterating over the elements of an array using a callback function.

These examples showcase the versatility of different loop structures in JavaScript, providing solutions for various scenarios.