let username =prompt("please enter your name:");
let age =prompt("please enter your age:");
let gender =prompt("please enter your gender(Male or Female):");

if(gender=="Male"){

    alert("Welcome Mr."+username);
}
else if(gender=="Female"){
    alert("Welcome Ms."+username);
}
else{
     alert("Welcome."+username);
}


if(age<16){
    alert("You are not eligible to place an order“");
}
else{
      alert("Continue with the order");
}


let order =prompt("please enter your order(Burger,Shawrma,Zinger):");
let  valid_list=["Burger","Shawrma","Zinger"];
let  valid;

if ( valid_list.includes(order)) {
    alert("Your order is being prepared");
     valid="valid";
}
else {
    alert("Invalid order. Please try again");
     valid="invalid";
}



if (age > 18 &&  valid == " valid") {
    alert("Order confirmed");
}
else if(age < 18 || valid == " invalid") {
    alert("Order requires verification");
}


console.log(username);
console.log(age);
console.log(gender);

document.write("Name:"+username+"<br>");
document.write("Age:"+age+"<br>");
document.write("Gender:"+gender+"<br>");
document.write("Order:"+order+"<br>");
document.write("Order status:"+ valid+"<br>");









