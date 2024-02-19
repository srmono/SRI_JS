# JavaScript Conditions and Control Flow Documentation

In JavaScript, control flow structures like conditions, loops, and switches help manage the flow of the program. Here, we'll explore various condition-related constructs along with real-world use cases and examples.

## 1. **If Statement:**

### Example:
```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's cold outside.");
}
```

**Use Case:** Determining the appropriate clothing based on the temperature.

## 2. **Switch Case:**

### Example:
```javascript
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  // ... more cases ...
  default:
    dayName = "Unknown";
}
console.log(`Today is ${dayName}.`);
```

**Use Case:** Mapping numerical values to corresponding weekdays.

## 3. **Ternary Operator:**

### Example:
```javascript
let age = 22;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(`Person is ${status}.`);
```

**Use Case:** Determining if a person is an adult or a minor based on their age.

## 4. **Break and Continue:**

### Example (Break):
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking the loop at i = 3");
    break;
  }
  console.log(i);
}
```

**Use Case (Break):** Exiting a loop prematurely when a specific condition is met.

### Example (Continue):
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping the loop iteration at i = 3");
    continue;
  }
  console.log(i);
}
```

**Use Case (Continue):** Skipping the current iteration of a loop when a specific condition is met.

These control flow structures are essential for creating dynamic and responsive JavaScript programs. Understanding when and how to use conditions, switches, and loop control statements is key to effective programming in JavaScript.