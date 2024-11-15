const ToDoList=[];

function loadFromLocalStorage()
{
  const savedData=JSON.parse(localStorage.getItem('ToDo'))||[]
    ToDoList.push(...savedData);
  displaytext();
}
function addToDo()
{
  let inputText=document.querySelector('.js-name');
  ToDoList.push(inputText.value);
   inputText.value='';
   saveOnLocalStorage()
  displaytext();
}

function saveOnLocalStorage()
{
  let saveData=JSON.stringify(ToDoList)
  localStorage.setItem('ToDo',saveData)
}
function displaytext()
{
  let content='';
  for(let i=0; i<ToDoList.length; i++)
  {
    content+=`<p>${ToDoList[i]}</p>`;
  }
  document.querySelector('.js-text').innerHTML=`${content}`;
}

function deleteData()
{
  ToDoList.length=0;
  localStorage.removeItem('ToDo')
  displaytext();
}

 window.onload=loadFromLocalStorage;