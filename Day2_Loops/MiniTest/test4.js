/**
 * 🎯 Mini-project #4 — Grade Calculator

User se marks (0–100) lo.

Rules:

90–100 → A
80–89  → B
70–79  → C
60–69  → D
Below 60 → F

Example:

Input: 84
Output: B

Use:

prompt()
Number()
if / else if / else
 */

let marks = Number(prompt("Enter your marks: "));
let grade = null;


if(marks > 100 || marks < 0){
    console.log("Beta Baap se hoshiyari nhi bikul sahi marks enter karo");
// }else if (marks > 90){
//     console.log("A");
// }else if(marks > 80){
//     console.log("B");
// }else if(marks > 70){
//     console.log("C");
// }else if(marks > 60){
//     console.log("D");
}else{
    marks = Math.floor(marks/ 10)
    switch(marks){

        case 10:
        case 9 :
            grade = "A";
            break;
        case 8:
            grade = "B";
            break;
        case 7:
            grade = "C";
            break;
        case 6:
            grade = "D";
            break;
        
        default:
            grade= "F"
        }   
}


console.log(grade);
