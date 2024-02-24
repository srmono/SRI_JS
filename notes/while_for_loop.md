Let's consider a real-time example where you might use a `while` loop and a `for` loop.

**Example: Calculating Factorial**

**Using `while` loop:**
```javascript
function calculateFactorialWhile(n) {
  let result = 1;
  let i = 1;

  while (i <= n) {
    result *= i;
    i++;
  }

  return result;
}

console.log(calculateFactorialWhile(5)); // Output: 120
```

In this example, we use a `while` loop to calculate the factorial of a number (`n`). The loop continues as long as `i` is less than or equal to `n`, and in each iteration, it multiplies the `result` by the current value of `i`.

**Using `for` loop:**
```javascript
function calculateFactorialFor(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(calculateFactorialFor(5)); // Output: 120
```

Here, the `for` loop is employed to achieve the same result. The initialization (`let i = 1`), condition (`i <= n`), and update (`i++`) are all contained within the `for` loop structure.

Both implementations calculate the factorial of 5, but you can see how the `for` loop provides a more compact and organized way to express the logic when the number of iterations is known in advance. The choice between `while` and `for` often comes down to readability and personal preference.