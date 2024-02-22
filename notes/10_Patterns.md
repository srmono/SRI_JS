# JavaScript Design Patterns (Singleton, Constructor, and Prototypal)

## 1. Singleton Pattern

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

### Example:

```javascript
// Singleton pattern in JavaScript

const Singleton = (function () {
  let instance;

  function createInstance() {
    // Private constructor logic goes here
    return {
      // Public methods and properties
      getInstance: function () {
        return instance;
      },
      // Other methods and properties
    };
  }

  return {
    // Public method to get the singleton instance
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // true
```

## 2. Constructor Pattern

The Constructor pattern is a way to create and initialize objects using a constructor function.

### Example:

```javascript
// Constructor pattern in JavaScript

function Person(name, age) {
  // Constructor logic goes here
  this.name = name;
  this.age = age;
}

// Adding methods to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Usage
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

person1.sayHello(); // Hello, my name is John and I am 25 years old.
person2.sayHello(); // Hello, my name is Jane and I am 30 years old.
```

## 3. Prototypal Pattern

The Prototypal pattern is a pattern where objects can inherit properties and methods from another object, known as the prototype.

### Example:

```javascript
// Prototypal pattern in JavaScript

const Animal = {
  // Prototype object
  init: function (name) {
    this.name = name;
  },
  // Prototype method
  makeSound: function () {
    console.log("Generic Animal Sound");
  },
};

// Create an object that inherits from Animal
const Dog = Object.create(Animal);

// Customize Dog object
Dog.init = function (name, breed) {
  Animal.init.call(this, name);
  this.breed = breed;
};

// Override the makeSound method for Dog
Dog.makeSound = function () {
  console.log("Woof!");
};

// Usage
const myDog = Object.create(Dog);
myDog.init("Buddy", "Labrador");
myDog.makeSound(); // Woof!
```

These design patterns are essential in JavaScript for creating scalable, maintainable, and organized code. Each pattern serves a specific purpose and can be adapted to various scenarios.
```
---

Real-time examples for each of the design patterns in JavaScript.

## 1. Singleton Pattern

```javascript
// Singleton pattern in JavaScript - Real-time Example

const Logger = (function () {
  let instance;

  function createLogger() {
    let logs = [];

    return {
      log: function (message) {
        logs.push(message);
        console.log(`Log: ${message}`);
      },
      displayLogs: function () {
        console.log("All logs: ", logs);
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createLogger();
      }
      return instance;
    },
  };
})();

// Usage
const logger1 = Logger.getInstance();
logger1.log("First log");

const logger2 = Logger.getInstance();
logger2.log("Second log");

logger1.displayLogs(); // Outputs: All logs: [ 'First log', 'Second log' ]
```

## 2. Constructor Pattern

```javascript
// Constructor pattern in JavaScript - Real-time Example

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.displayInfo = function () {
  console.log(`${this.year} ${this.make} ${this.model}`);
};

// Usage
const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2021);

car1.displayInfo(); // Outputs: 2022 Toyota Camry
car2.displayInfo(); // Outputs: 2021 Honda Civic
```

## 3. Prototypal Pattern

```javascript
// Prototypal pattern in JavaScript - Real-time Example

const Shape = {
  init: function (type) {
    this.type = type;
  },
  getType: function () {
    return this.type;
  },
};

// Create an object that inherits from Shape
const Circle = Object.create(Shape);

// Customize Circle object
Circle.init = function (radius) {
  Shape.init.call(this, "Circle");
  this.radius = radius;
};

// Add a method specific to Circle
Circle.calculateArea = function () {
  return Math.PI * this.radius ** 2;
};

// Usage
const myCircle = Object.create(Circle);
myCircle.init(5);

console.log(myCircle.getType()); // Outputs: Circle
console.log(myCircle.calculateArea()); // Outputs: 78.53981633974483
```

These examples showcase how each design pattern can be applied in real-world scenarios to enhance code structure and maintainability.