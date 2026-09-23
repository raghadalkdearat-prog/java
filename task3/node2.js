

let number = prompt("enter num to reverse");
let reversed = "";

for (let i = 5; i >= 0; i--) {
    reversed += number[i];
}

console.log(reversed);





for(i=0;i<=15;i++){
if(i%2==0){
    console.log( i+" is even");
}
else{
console.log( i+" is odd");
}
}








let num=prompt("pleasw enter a number");
let string="";
for(i=0;i<num.length;i++){
    string+=num[i];
    if(num[i]%2==0&&num[i+1]%2==0){
        string+="-";
        
    }
    
}
console.log(string);









function Agechecker(){

let age=prompt("enter your age")
if( age>=18){
    console.log("The user is Adult");
}
else  {
 console.log("The user is minor");
}
}

Agechecker();