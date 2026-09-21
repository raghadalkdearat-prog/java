let Name=prompt("enter your name: ");
let Age=prompt("enter your age:");
let Book=prompt("book name: ");

let User={
    userName:Name,
    userAge:Age,
    userBook:Book,
    stuts:"pending"
};

if( User.userAge<"13"){
    User.stuts="Rejected - Underage";
    alert("Rejected - Underage");

}
else{
   if(User.userBook=="Clean Code" ||User.userBook=="JavaScript Info"||User.userBook=="Atomic Habits"){
    User.stuts="Approved";
    alert("Approved");
   }
   else{
     User.stuts="Book Not Found";
     alert("Book Not Found");
   }
}
if( User.stuts=="Approved"){
   if(User.userAge<"18"){
    User.fee=0;
   }
   else{
    User.fee=5;
   }

}
if(User.userBook=="Clean Code"){
    User.isPremium=true;

}
else{
     User.isPremium=false;
}

for (let key in User) {
    console.log(key + ": " + User[key]);
}
for (let key in User) {
 document.write("<p><strong>" + key + ":</strong> " + User[key] + "</p>");
}

