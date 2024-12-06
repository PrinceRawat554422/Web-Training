
// function sum(a,b){
//     for(let i=0;i<20;i++){
//         sum(0+i)
//         console.log(sum);
//     }

    // const sum = a+b;
    // console.log(sum);
// }
// const sum = (a+b) => {
//     console.log(a+b)
// }
const counter = document.getElementById("counter");
let count = 0;
function incrementValue(){
    count++;
    counter.innerText = count;
}
function decrementValue(){
    count--;
    counter.innerText = count;
}

// const a = 5;
// const b = 7;
// console.log("value1:",a)
// try{
// a = 6;
// console.log("value2:",b);
// }catch(error){
//     console.log(error);
// }

// console.log("value3:",b);
// function myPromiseFun(res,rej){}
// const myPromise = new Promise(myPromiseFun);

// console.log(myPromise);

const myPromise = new Promise(solve);
function solve(fun1,fun2){
    let n=9999;
    while(n--);
    fun1("Data");
}
console.log("------bro-----");
console.log(myPromise);
console.log("------yes------");

// H.W
// setTimeout
// setInterval