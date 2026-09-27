
let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");

let array = JSON.parse(localStorage.getItem("todo_tasks")) || [];

addButton.addEventListener("click", function () {

    let text = inputText.value;

    listTask.innerHTML +=
        "<p><span>" + text + "</span><button onclick='deleteTask(this)'>Delete</button>" + "</p>";

    array.push(text);

    localStorage.setItem("todo_tasks", JSON.stringify(array));

    console.log(JSON.parse(localStorage.getItem("todo_tasks")));

    inputText.value = "";
});



function deleteTask(Delete) {


   let tasknum = Delete.parentElement.querySelector("span").textContent;


    Delete.parentElement.remove();

    let index = array.indexOf(tasknum);


       console.log(index);
       array.splice(index, 1);//يعني بحذف من الاندكس المشار اله عنصر واحد فقط

     console.log("tasknum:", tasknum);
    console.log("array:", array);
    console.log("index:", index);

      localStorage.setItem("todo_tasks", JSON.stringify(array));
    

}
 

















/*
Code Explanation:

1. The input field, Add Task button, and task list container are selected
   using getElementById().

2. The saved tasks are retrieved from localStorage using:
   localStorage.getItem("todo_tasks")

3. Because localStorage stores values as strings, JSON.parse() is used
   to convert the stored tasks back into an array.

4. If there are no saved tasks in localStorage, || [] creates an empty array.

5. When the Add Task button is clicked:
   - The value entered by the user is stored in the variable "text".
   - A new <p> element is added inside listTask.
   - The task name is placed inside a <span>.
   - A Delete button is added next to the task.
   - "this" is passed to deleteTask() so the function knows which
     Delete button was clicked.

6. array.push(text) adds the new task to the end of the array.

7. JSON.stringify(array) converts the array into a string so it can
   be stored in localStorage.

8. localStorage.setItem("todo_tasks", ...) saves or updates the tasks
   inside localStorage.

9. The tasks are retrieved again and printed in the console using
   JSON.parse() to check that they were saved correctly.

10. inputText.value = "" clears the input field after adding the task.

11. When the Delete button is clicked, deleteTask(Delete) is called.

12. Delete.parentElement accesses the <p> element that contains
    the task and its Delete button.

13. querySelector("span").textContent gets the name of the task
    from inside the <span> and stores it in tasknum.

14. Delete.parentElement.remove() removes the task and its Delete button
    from the page.

15. array.indexOf(tasknum) finds the index of the selected task
    inside the array.

16. array.splice(index, 1) removes one element from the array
    starting from the selected index.

17. console.log() is used to display the task name, array,
    and index for testing and checking the result.

18. Finally, localStorage.setItem() is used again to update
    localStorage after deleting the task from the array.
*/





