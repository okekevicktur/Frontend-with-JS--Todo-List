const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


addTask.addEventListener('click', function() {
    
    let task = document.createElement('div');
    task.classList.add('task');

    let li= document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkbtn= document.createElement('button');
    checkbtn.innerHTML = '<i class="fa-solid fa-check"></>';
    checkbtn.classList.add('checkTask');
    task.appendChild(checkbtn);

    let deletebtn= document.createElement('button');
    deletebtn.innerHTML = '<i class="fa-solid fa-trash-can"></>';
    deletebtn.classList.add('deleteTask');
    task.appendChild(deletebtn);

    if (inputTask.value === "") {
        alert("Please Enter a Task");        
    }else{
        taskContainer.appendChild(task);
    }

    inputTask.value="";

    checkbtn.addEventListener('click', function(){
        checkbtn.parentElement.style.textDecoration= "line-through";
    });

    deletebtn.addEventListener('click', function(e){
       let target = e.target;
       target.parentElement.parentElement.remove();
    });
})