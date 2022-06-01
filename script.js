
let displayValue = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      displayValue = eval(displayValue);
      document.getElementById("display").value = displayValue;
      displayValue = ""
    }
    else if(e.target.innerHTML == 'AC'){
      displayValue = ""
      document.getElementById("display").value = displayValue;
    }
    else{ 
    displayValue = displayValue + e.target.innerHTML;
    document.getElementById("display").value = displayValue;
      }
  })
})

