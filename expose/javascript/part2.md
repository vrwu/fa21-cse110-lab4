1. `i` would be be logged (3). Even though `i` is declared inside the for loop, it is declared with `var` so it can still be accessed anywhere in the function
2. `discountedPrice` (150) would be logged. Even though `discountedPrice` is declared inside the for loop, it is declared with `var` so it can still be accessed anywhere in the function
3. `finalPrice` (150) would be logged, no error would error because it was declared outside the for loop
4. The function will return the final `discounted` array, [50, 100, 150]. This is result we get after going through the entire for loop and applying the appropriate discount (0.5) It is declared using `var` therefore the variable will be allowed to be used throughout the function.
5. Error, because `i` is in the scope of the for loop declared using `let` and the console log is outside of the for loop
6. Error, because `discountedPrice` is in the scope of the for loop declared using `let`, so block scope will cause an error when console logging. 
7. `finalPrice` (150) would be logged, no error would error because `finalPrice` was declared with `let` and is in the same block as the console log
8. The function will return the final `discounted` array, [50, 100, 150]. This is result we get after going through the entire for loop and applying the appropriate discount (0.5) Although it is declared with `let` it is still in the same block. 
9. Error, because `i` is in the scope of the for loop declared using `let` and the console log is outside of the for loop
10. The length of prices (3) will be console logged. `length` was declared as a const so it should remain the same constant throughout the function
11. The function will return the final `discounted` array, [50, 100, 150]. his is result we get after going through the entire for loop and applying the appropriate discount (0.5). Although `discounted` is declared using `const`, conventions allow us to push to a `const` variable. 
12. 
```
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0]
``` 
13. 
```
A. 32 because '3' is a string and adding 2 would just append it and integers map to their exact string representation
B. 1 because you can't subtract strings in Javascript so the '3' became 3 and 3-2 = 1
C. 3 because 3 + null is the same as 3+0. null has 0 as its number value.
D. 3null because because '3' maps to exact string representation and + null would just append null to the '3'
E. 4 because true converts to 1, and 1+3 = 4
F. 0 because false converts to 0, and null converts to 0, so 0+0 = 0
G. 3undefinted because '3' maps to exact string representation '3' and + undefined would just append undefinied to the '3'
H. NaN because you can't subtract strings in Jacascript so the '3' becomes 3 and undefined becomes NaN, so 3-NaN = NaN
```
14. 
```
A. true, '2' becomes integer 2 and 2>1
B. false, because first character '2' is greater than first character of the second '1'
C. true, '2' becomes integer 2 and 2==2
D. false, no type conversion so '2' != 2
E. false because true converts to 1, and 1 != 2
F. true, because Boolean(2) is true since it's anything but 0, so true === true without type conversion
```
15. == checks equality with type conversion (ex. 0 to false vice versa) while === checks equality without type conversion (the literal value)
16. Found in part2-question16.js, console logs the values accordingly
17. Calling `modifyArray[1,2,3], doSomething)` first creates `newArr` array, then we iterate through the array `[1,2,3]` and push the result of the current array index value passed to the callback function `doSomething` to `newArr`. `doSomething` takes a given number and multiplies by 2, so we push `array[0] * 2` which is `1 * 2`. We proceed with the rest, leading to pushing `2 * 2`, and `3 * 2`. Our end result is `[2,4,6]`.
18. Found in part2-question18.js
19. 
```
1
2
3
4
```
