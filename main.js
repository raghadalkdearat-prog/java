let Name = prompt("enter your name")
let Age=prompt("your age")
let Gender=prompt("your gender (male or female) ")
if (Gender=="male") {
    alert( " Welcome Mr."+Name);
    
}
else if (Gender=="female"){
      alert( " Welcome Ms. " + Name);
}
else {
      alert( " Welcome "+ Name);
}

let orderStuts;
let Dish = prompt("enter one of the following(Burger,Shawarma,Zinger")

if (Age<"16") {
   orderStuts= " You are not eligible to place an order";
    alert( " You are not eligible to place an order");
    
}

else {
     orderStuts= " Continue with the order";
      alert( " Continue with the order");
}




if(Dish=="Burger"||Dish=="Shawarma"||Dish=="Zinger"){
    orderStuts= "  Your order is being prepared ";
     alert( " Your order is being prepared ");
}
else{
   orderStuts= "  Invalid order. Please try again";
    alert( "Invalid order. Please try again"); 
}

if(Age>="18" && Dish=="Burger"||Dish=="Shawarma"||Dish=="Zinger"){

   orderStuts= " Order confirmed";
    alert( "Order confirmed"); 
}
else if(Age<"18" && Dish!=="Burger"||Dish!=="Shawarma"||Dish!=="Zinger"){
  orderStuts= " Order requires verification";
 alert( "Order requires verification");
}
console.log("user Name:"+Name);
console.log("user Age:"+Age);
console.log("user Gender:"+Gender);
console.log("user Order:"+Dish);
console.log("order status:"+orderStuts);

document.write("<p>user Name:"+Name+"</p>");
document.write("<p>user Age:"+Age+"</p>");
document.write("<p>user Gender:"+Gender+"</p>");
document.write("<p>user Order:"+Dish+"</p>");
document.write("<p>order status:"+orderStuts+"</p>");

