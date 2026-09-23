let menue=[
    {name:"pizza",price:"6$",category:"mainMeal",available:"yes"},
    {name:"zinger",price:"3$",category:"mainMeal",available:"NO"},
    {name:"burger",price:"6$",category:"mainMeal",available:"yes"},
    {name:"frize",price:"2$",category:"sideMeal",available:"yes"},
    {name:"Shawarma",price:"2.5$",category:"mainMeal",available:"yes"}
];





let foodname=prompt("enter your meal(pizza,zinger,burger,frize,Shawarma");
let i=0;
while (i < menue.length) {
    
  
    if (menue[i].name === foodname && menue[i].available === "NO") {
        alert("Sorry, " + foodname + " is not available!");
       foodname=prompt("enter your meal(pizza,zinger,burger,frize,Shawarma");
        i = 0;
        continue;
    }

    i++; 
    
}






function displayMenu(){
 document.write("<p> menue list</p> <hr>");
   for(let x of menue){
    if(x.name==foodname){
    document.write("<p> name:"+x.name+"<br></p>");
     document.write("<p> price:"+x.price+"<br></p>");
      document.write("<p> is it available:"+x.available+"<br></p>");
       document.write("<p> category"+x.category+"<br></p>");
    }

}
}

displayMenu();



