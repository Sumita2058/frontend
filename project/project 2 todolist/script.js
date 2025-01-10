document.getElementById("push").addEventListener("click",function(){
    const inputfield = document.querySelector("#newtask input")
    //validation input field
    if(inputfield.value.length===0){
        alert("please input the task");
        return;
    }
    // add new task
    const taskContainer = document.querySelector("#tasks");
    taskContainer.innerHTML +=`
    <div class="task"> 
    <span id="taskname">${inputfield.value}</span>
    <button class="delete"><i class="fa-solid fa-trash-can-arrow-up"></i></button>
    </div>`
    //delete task
    const deleteButton = document.querySelectorAll(".delete")
    deleteButton.forEach((button)=>{
        button.onclick=function(){
            this.parentNode.remove();
        };
    });
    //crossing/completed task
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task)=>{
        task.onclick = function(){
            this.classList.toggle("complete")
        }
    });
});