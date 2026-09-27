let menu = [

    {name:"pizza", price:"6$", category:"mainMeal", available:"yes"},
    {name:"zinger", price:"3$", category:"mainMeal", available:"no"},
    {name:"burger", price:"6$", category:"mainMeal", available:"yes"},
    {name:"frize", price:"2$", category:"sideMeal", available:"yes"},
    {name:"Shawarma", price:"2.5$", category:"mainMeal", available:"yes"}
];


function showMenu(){

    document.write("<h2>Restaurant Menu</h2>");

    for(let i = 0; i < menu.length; i++){

        document.write("<hr>");

        document.write("<b>Meal:</b> " + menu[i].name + "<br>");
        document.write("<b>Price:</b> " + menu[i].price + "<br>");
        document.write("<b>Category:</b> " + menu[i].category + "<br>");
        document.write("<b>Available:</b> " + menu[i].available + "<br>");
    }

    document.write("<hr>");
}

showMenu();

let foodname = prompt(
    "please enter a meal (pizza, burger, zinger, frize, Shawarma)"
);


let i = 0;

while (i < menu.length) {

    if (foodname == menu[i].name) {

        if (menu[i].available == "no") {

            foodname = prompt(
                "please enter another meal (pizza, burger, frize, Shawarma)"
            );

            i = 0;
            continue;
        }

        else {
            break;
        }
    }

    i++;
}


let index;

for(index in menu){

    if(menu[index].available == "no"){
        continue;
    }

    console.log(menu[index]);
}


function displayMenu(){

    for(let Meal of menu){

        if(foodname == Meal.name){

            document.write(
                "<br>Meal: " + Meal.name +
                "<br>Price: " + Meal.price+
                 "<br>category: " + Meal.category+
                "<br> available:"+ Meal.available

            );

            break;
        }
    }
}



displayMenu();
