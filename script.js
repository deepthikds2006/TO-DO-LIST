function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    // mark complete
    li.onclick = function(){
        li.classList.toggle("completed");
    };

    // delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.onclick = function(e){
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    input.value="";
}