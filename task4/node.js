
let nAme = document.getElementById('user-name');                 
let oRder = document.getElementsByTagName('select')[0];  
let but = document.querySelector('.button'); 

but.onclick = function() {
   
    let Name = nAme.value;
    let Order = oRder.value;

    document.write("Hello " + Name + "! Your order is " + Order);
};


but.onmouseover = function(){
    but.style.backgroundColor='red';
}
but.onmouseout = function(){
      but.style.backgroundColor='white';
}





let fontFamily = document.getElementById('font');  
let fontSize = document.getElementById('size');  
let fontdeco = document.querySelectorAll('.font-style');
let text = document.querySelector('.cont2 p');

function updateStyle() {
    
    text.style.fontFamily = fontFamily.value;
    text.style.fontSize = fontSize.value;

   
    if (fontdeco[0].checked) {
        text.style.fontStyle = 'italic';
    } else {
        text.style.fontStyle = 'normal';
    }

   
    if (fontdeco[1].checked) {
        text.style.fontWeight = 'bold';
    } else {
        text.style.fontWeight = 'normal';
    }

    
    if (fontdeco[2].checked) {
        text.style.textDecoration = 'underline';
    } else {
        text.style.textDecoration = 'none';
    }
}


fontFamily.onchange = updateStyle;
fontSize.onchange = updateStyle;
fontdeco[0].onclick = updateStyle;
fontdeco[1].onclick = updateStyle;
fontdeco[2].onclick = updateStyle;








let image = document.getElementsByClassName('cat')[0];
let buttons = document.querySelectorAll('.button'); 


buttons[0].onclick = function() {
    image.style.borderRadius = '0';
    
};

buttons[1].onclick = function() {
    image.style.borderRadius = '50%';
};



