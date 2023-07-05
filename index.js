// let input = document.getElementById('question').value
// let option1 = document.getElementById('option1').value
// let option2 = document.getElementById('option2').value
// let option3 = document.getElementById('option3').value

// let container= document.querySelector('.container');
// let form = document.querySelector('form');
// form.addEventListener("submit" ,(e) =>{
   
    
// let newlist = document.createElement('div');
// newlist.className += "list";
// container.appendChild(newlist);



// })

let container = document.querySelector('.container');
let form = document.querySelector('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = document.getElementById('question').value;
  let option1 = document.getElementById('option1').value;
  let option2 = document.getElementById('option2').value;
  let option3 = document.getElementById('option3').value;

  let newlist = document.createElement('div');
  newlist.className = "list";

  let inputText = document.createTextNode("Question: " + input);
  let option1Text = document.createTextNode("Option 1: " + option1);
  let option2Text = document.createTextNode("Option 2: " + option2);
  let option3Text = document.createTextNode("Option 3: " + option3);

  newlist.appendChild(inputText);
  newlist.appendChild(option1Text);
  newlist.appendChild(option2Text);
  newlist.appendChild(option3Text);

  container.appendChild(newlist);
});
