# JavaScript Basics

The following exercises are from Eloquent JavaScript Chapter [2](http://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe).

## Looping A Triangle

Write a loop that makes seven calls to console.log to output the following triangle:

```
#
##
###
####
#####
######
#######
```

It may be useful to know that you can find the length of a string by writing .length after it.

```
var abc = "abc";
console.log(abc.length);
// → 3
```

```
// Your code here
```

Solution:
```
var triangle = "";
for (var i = 0; i < 7; i++) {
  triangle = triangle + "#";
  console.log(triangle);
}
```

## FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

```
// Your code here
```

Solution:
```
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

## Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

```
// Your code here
```

Solution:
```
var height = 8;
var width = 8;
var chessBoard = "";
for (var i = 0; i < height; i++) {
  for (var j = 0; j < width; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        chessBoard += " ";
      } else {
        chessBoard += "#";
      }
    } else {
      if (j % 2 !== 0) {
        chessBoard += " ";
      } else {
        chessBoard += "#";
      }
    }
    if (j === width - 1) {
      chessBoard += "\n";
    }
  }
}
console.log(chessBoard);
```
