let result = document.getElementById("result");

fetch("data.json")
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            result.innerHTML +=`
            <p>name:${data[i].name}</p>
            <p>price:${data[i].price}</p>
            <p>avability:${data[i].availability}</p><hr>

            `
               
        }
  localStorage.setItem("content", JSON.stringify(data));

    });
    





    