var name = prompt("Welcome to GC mini golf! What is your name?")

var holes = prompt( `Hi, ${name}! Would you like to play 3 or 6 holes?`)

let par = 0
let total = 0;
let score = 0;
for( let i = 1; i <=holes; i++){
    par = Number( prompt (`How many putts for hole ${i}?(par is 3)`));
    total += par;
}

let para
if (holes === "3"){
    para = 9
}
else {
    para =18
}

score=total;
total-=para;

console.log(total);
console.log (par)
console.log(para)

if ( score > para){
 alert(`Nice try, ${name}... Your total par was: +${total}.`);  
}else if ( score < para){
    alert (`Great job, ${name}! Your total par was ${total}.`);
}else {
    alert (`Good game ${name}. Your total par was: 0`);
}
