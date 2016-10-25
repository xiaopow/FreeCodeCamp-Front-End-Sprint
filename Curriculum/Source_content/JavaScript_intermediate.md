# JavaScript Intermediate

The following exercises are from Eloquent JavaScript Chapter [3](http://eloquentjavascript.net/03_functions.html#h_TcUD2vzyMe) and [4](http://eloquentjavascript.net/04_data.html#h_TcUD2vzyMe).

## Minimum

The [previous chapter](http://eloquentjavascript.net/02_program_structure.html#return_values) introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

```
// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```

Solution:
```
function min(a, b) {
  return a < b ? a : b
}
```

## Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

```
// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
```

Solution:
```
function isEven(a) {
  if (a < 0) return false
  else if (a == 1) return false
  else if (a == 0) return true
  else return isEven(a-2)
}
```

## Bean counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

```
// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```

Solution:
```
function countChar(str, cha) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === cha) count++;
  }
  return count;
}
```

## The sum of a range

The [introduction](http://eloquentjavascript.net/00_intro.html#intro) of this book alluded to the following as a nice way to compute the sum of a range of numbers:

```
console.log(sum(range(1, 10)));
```

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

```
// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```

Solution:
```
function range(start, end, step) {
  var arr = [];
  if (!step || step.isNaN) {
    if (start <= end) step = 1;
    else step = -1;
  }
  if (start <= end) {    
    for (start; start <= end; start += step) {
      arr.push(start);
    }
  } else {
    for (start; start >= end; start += step) {
      arr.push(start);
    }
  }
  return arr;
}

function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```

## Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the [previous chapter](http://eloquentjavascript.net/03_functions.html#pure), which variant do you expect to be useful in more situations? Which one is more efficient?

```
// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

Solution:
```
function reverseArray(arr) {
  var reversedArr = [], times = arr.length;
  for (var i = 0; i < times; i++) {
    reversedArr.push(arr.pop());
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  var times = Math.floor(arr.length/2);
  for (var i = 0; i < times; i++) {
    var val = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = val;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

## A list

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

```
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

The resulting objects form a chain, like this:

![objects chain](http://eloquentjavascript.net/img/linked-list.svg)

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

```
// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
```

Solution:
```
// Your code here.
function arrayToList(arr) {
  var list;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list || null};
  }
  return list;
}
function listToArray(list) {
  var arr = [];
  var fetchValue = function(list) {
    arr.push(list.value);
    if (list.rest) fetchValue(list.rest);
  }
  fetchValue(list)
  return arr;
}
function prepend(ele, list) {
  return {value: ele, rest: list};
}
function nth(list, lvl) {
  if (lvl == 0) return list.value;
  else return nth(list.rest, lvl-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
```

## Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

```
// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
```

Solution:
```
function deepEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    for (key in obj1) {
      if (typeof obj1[key] === "object") {
        if (obj2[key]) {
          return deepEqual(obj1[key],obj2[key]);
        } else {
          return false;
        }
      } else if (!(obj1[key] === obj2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({here: 1, object: {hello: 2}}, {here: 1, object: {hello: 3}}));
// → false
```
