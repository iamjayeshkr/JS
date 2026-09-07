/*
    *********** Before Function ****************


let length1 = 5, breadth1 = 3;
let area1 = length1 * breadth1;
console.log(area1);

let length2 = 10, breadth2 = 4;
let area2 = length2 * breadth2;
console.log(area2);

let length3 = 7, breadth3 = 2;
let area3 = length3 * breadth3;
console.log(area3);

*/

function calculateArea(length, breadth) {
    return length * breadth;
}

console.log(calculateArea(5, 3));   // 15
console.log(calculateArea(10, 4));  // 40
console.log(calculateArea(7, 2));   // 14

/*
   1. **Reusability** — write once, use many times.
   2. **Readability** — `calculateArea(5, 3)` tells you what's happening; `5 * 3` doesn't.
   3. **Maintainability** — fix a bug in one place, not ten.
   4. Accessibility
 */
