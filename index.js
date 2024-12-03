console.log("----welcome in js----");
// const title =  document.getElementById("title");
// console.log(title);

// title.innerText = "hii i'm ......";


// const desc = document.getElementsByClassName("desc");
// console.log(desc);

// desc[0].innerText = "hey bro...";

const divEle = document.getElementsByClassName("heading");
// divEle[2].innerText = "First World";
for(let i = 0; i < divEle.length; i++) {
if(i % 2 === 0){
    divEle[i].innerText = "even";
}
else{
    divEle[i].innerText = "odd";
}
}
// divEle[3].innerText = "Second World";
// console.log(heading);

//select
// const h1Ele =  document.getElementById("heading");

//new content varible:
// const newContent = "-----12345----";

// Assign Value to Tag:
// h1Ele.innerText = newContent;
const Arr = [10,9,8,7,6,5,4,3,2,1]
for(let i=0; i<Arr.length; i++){
    console.log(Arr[i]);
}
// for(let i =0;i < Arr.length; i++){
//     if(i % 2 ===0){
//         console.log(i+"="+Arr[i]+"even");
// }
// else{
//     console.log(i+"="+Arr[i]+"odd");
// }
// }
for(let i=0; i<Arr.length; i++){
    console.log(add(Arr.length))
}
