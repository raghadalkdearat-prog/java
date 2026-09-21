let Name=prompt("enter your name:");
let Age=prompt("enter your age:");
let Gender=prompt("your gender(male,female):");

if(Gender=="male"){
    alert("Welcome Mr."+ Name);
}
else if(Gender=="female"){
    alert("Welcome Ms."+ Name);
}
else{
    alert("Welcome."+ Name);
}
if(Age<"16" ){
    alert("You are not eligible to place an order");
}
else{
    alert("Continue with the order");

}
let Order=prompt("enter one of the following (Burger,Shawarma,Zinger");
let Valid;
if(Order=="Burger"||Order=="Shawarma"||Order=="Zinger"){
     alert("Your order is being prepared");
     Valid="valid";
}
else{
    alert("Invalid order. Please try again");
      Valid="invalid";
}
if(Age>="18" && Valid=="valid"){
    alert("Order confirmed“");

}
else if(Age<"18" || Valid=="invalid"){
    alert("Order requires verification");
}

console.log("Name"+Name);
console.log("Age"+Age);
console.log("Gender"+Gender);
console.log("Order"+Order);
console.log("Valid"+Valid);

document.write("<p> Name:"+Name+"</P>");
document.write("<p>Age:"+Age+"</P>");
document.write("<p>Gender:"+Gender+"</P>");
document.write("<p>Order:"+Order+"</P>");
document.write("<p>Valid:"+Valid+"</P>");

let isAvailable;
if (isAvailable=="available") {
    isAvailable=true;

}
else{
    isAvailable=false;
}