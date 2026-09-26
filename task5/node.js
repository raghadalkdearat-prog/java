let Name = document.getElementById("username");
let Password = document.getElementById("password");
let Phonenumber = document.getElementById("phonenumber");
let Order = document.getElementById("orderselect");
let Submitt = document.getElementById("submitt");
let Orderdata = document.getElementsByClassName("order-data");
let Container = document.getElementsByClassName("container");


Submitt.addEventListener("click", function () {

    let regex_name = /^\S+$/;
    let result_name = regex_name.test(Name.value);

    let regex_password = /^(?=.*\d).{8,}$/;
    let result_password = regex_password.test(Password.value);

    let regex_phone = /^07\d{8}$/;
    let result_phone = regex_phone.test(Phonenumber.value);

    console.log("Name:", result_name);
    console.log("Password:", result_password);
    console.log("Phone:", result_phone);


    if (result_name && result_password && result_phone) {

        localStorage.setItem("name", Name.value);
        sessionStorage.setItem("order", Order.value);

        let Saved_name = localStorage.getItem("name");
        let Saved_order = sessionStorage.getItem("order");

        Container[0].innerHTML =
            "Welcome ," + Saved_name +
            "<br> <br>Name: " + Saved_name +
            "<br><br>Saved Order: " + Saved_order;


        Name.value = "";
        Password.value = "";
        Phonenumber.value = "";
        Order.selectedIndex = 0;
    }
  

});