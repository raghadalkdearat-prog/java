// 1. Create a menu array containing at least 5 food objects
let menu = [
    { name: "pizza", price: 6, category: "mainMeal", available: "yes" },
    { name: "zinger", price: 3, category: "mainMeal", available: "NO" },
    { name: "burger", price: 6, category: "mainMeal", available: "yes" },
    { name: "frize", price: 2, category: "sideMeal", available: "yes" },
    { name: "Shawarma", price: 2.5, category: "mainMeal", available: "yes" }
];

// 7. Simple function to check if item is available
function checkAvailability(foodName) {
    for (let item of menu) {
        // 5. Use continue to skip unavailable food items
        if (item.available === "NO") {
            continue;
        }
        
        if (item.name.toLowerCase() === foodName.toLowerCase()) {
            return item; // الوجبة موجودة ومتاحة
        }
    }
    return null; // غير موجودة أو غير متاحة
}

// 1. Create a showMenu() function using a for loop to display all food items
function showMenu() {
    document.write("<h2>--- Restaurant Menu ---</h2>");
    for (let i = 0; i < menu.length; i++) {
        document.write("<p><strong>" + menu[i].name + "</strong> - Price: $" + menu[i].price + " | Category: " + menu[i].category + " | Available: " + menu[i].available + "</p>");
    }
    document.write("<hr>");
}

// 7. Function to handle the customer ordering process
function processOrder() {
    // 2. Ask the customer to enter a food name using prompt()
    let foodInput = prompt("Enter the food name you want to order:");
    let selectedFood = checkAvailability(foodInput);

    // 3. Use a while loop to keep asking until the customer selects an available food
    while (!selectedFood) {
        alert("Sorry! '" + foodInput + "' is either not available or not on our menu.");
        foodInput = prompt("Please enter an AVAILABLE food name:");
        
        // 6. Use break logic / search check
        selectedFood = checkAvailability(foodInput);
        if (selectedFood) {
            break; // الخروج عند إيجاد الوجبة المتاحة
        }
    }

    // Bonus: Ask for quantity and calculate total price
    let quantity = prompt("How many " + selectedFood.name + "s would you like to order?");
    quantity = Number(quantity) || 1; // تحويل الإدخال لرقم (افتراضي 1 إذا أدخل خطأ)
    let totalPrice = selectedFood.price * quantity;

    // 4 & 8. Display the final order using for...in and document.write()
    document.write("<h2>--- Order Receipt ---</h2>");
    
    // 4. Use for...in to display the properties of the selected food object
    document.write("<h3>Selected Item Properties:</h3>");
    for (let key in selectedFood) {
        document.write("<p><strong>" + key + ":</strong> " + selectedFood[key] + "</p>");
    }

    document.write("<hr>");
    document.write("<h3>Order Summary:</h3>");
    document.write("<p><strong>Quantity:</strong> " + quantity + "</p>");
    document.write("<p><strong>Total Price:</strong> $" + totalPrice + "</p>");
}

// --- Execution ---
showMenu();
processOrder();