// let ageGroup;
// const age = 25;
// if(age<18){
//     ageGroup = "Child";

// }else{
//     ageGroup="Adult";
// }
// console.log("ageGroup:", ageGroup);

let age = 18;
let ageGroup = age<18?"child":"adult";
console.log("ageGroup:", ageGroup);
const responseTimes = [350, 420, 510];
for (const time of responseTimes) {
console.log(`Response Time: ${time} ms`);
}
// Output:
// Response Time: 350 ms
// Response Time: 420 ms
// Response Time: 510 m



const trial = { id: 1, responseTime: 350, correct: true };
console.log(trial.id); 
console.log(trial["id"]);// this is another way to get value of id
for (const key in trial) {
console.log(`${key}: ${trial[key]}`);
}
// Output:
// id: 1
// responseTime: 350
// correct: tr
