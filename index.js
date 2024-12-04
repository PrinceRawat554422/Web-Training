// console.log("-----Wecome in JS-------");
// let arr = [1,2,3,4,5,6,7,8, "hello",true];
// for(let i = 0; i<arr.length;i++){
// console.log(arr[i]);
// }

// arr.push("prince");
// console.log(".............");
// arr.pop();
// // arr.splice(start,count,addon)
// arr.splice(2,1);
// for(let i=0;i<arr.length; i++){
//     console.log(arr[i]);
// }
// const newarr = [5,5,6,4,3,5,4,56,4,3];
// let count = 0;
// for(let i=0; i< arr.length; i++) {
//     console.log(arr[i])
//     if(arr[i] === 5) count++;
//     if(arr[i] % 2 === 0)count++;
// }
// console.log(count);
// let arr2 = [1,4,5,6,73,2,4];
// let sum = 0;
// for(let i = 0; i<arr2.length;i++){
//     console.log(arr2[i]);
//     if(arr2[i] === 5) {
//         arr2.splice(i,1);
// }

// let arr3 = [1,2,3,4,5,7,8,9];
// let missing = 0;
// for(let i = 0; i<arr3.length;i++){
//      console.log(arr3[i]);
//     if(arr3[i] === i) {
//        arr3.missing(i)
//     }
// }

let student_id_card = {
    name: "rohan",
    rollno : 2222,
    address : 'abc...',
    section: 'C',
    course : "B-Tech",
    BRANCH : "CSE",
    session : "2024 -2025"

}
console.log(student_id_card);
const name = student_id_card.name;
const  rollno = student_id_card.rollno;
const address = student_id_card.address;
const section = student_id_card.section;
const course = student_id_card.course;
const BRANCH = student_id_card.BRANCH;
const session = student_id_card.session;
// print :

console.log(name);
console.log(rollno);
console.log(address);
console.log(section);
console.log(course);
console.log(BRANCH);
console.log(session);
// add new key and value:

student_id_card.result = "pass";
student_id_card.id = "12";
// update :
student_id_card.section = "B";
// delete :
delete student_id_card.section;


console.log(student_id_card);

