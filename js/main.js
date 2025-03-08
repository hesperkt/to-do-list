document.querySelector(".addTask").addEventListener("click", addTask)
document.querySelector(".clearList").addEventListener('click', clearList)
document.querySelector(".clearCompleted").addEventListener('click', clearCompleted)

function addTask(){
    let li = document.createElement("li")//create list item
    let input = document.querySelector(".taskInput").value //typed text from input
    let task = document.createTextNode(input)// assign and create text from input
    li.appendChild(task) //append task to list
    if (input === ""){ //conditional to ensure input is not empty
        alert("Looks like you didn't add a task! Please add one.")
    } else {
        document.querySelector(".listInput").appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    document.querySelector(".taskInput").value = "" // clear input
}

let taskList = document.querySelector(".listInput")
taskList.addEventListener("click", checkClickSpace) 

function checkClickSpace(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.classList.add("remove")
    }
}

function clearList() {
    document.querySelector(".listInput").innerText = "" 
}

function clearCompleted() {
    let completed = document.getElementsByClassName("checked")
    // console.log(completed) <- for personal ref as to what completed looks like
    for(let i = 0; i < completed.length; i++){
      completed[i].classList.add("remove")
   }
}


/*What can the user do
What can they expect
What do they see


    user can add text to an input and click a button to submit task to list
        add eventListener -> calls function addToList

        function addToList
            get the text from input
            create li item
            nb: create list element (ul or ol) in html
            append li to list element
            clear input
    text is added to a list

    See a list of things they add

put their to-dos in an input
create a button to add task
    when button is clicked -> add/display task in to-do list
display to-do list in a form/ul
add delete button next to each task
    when button is clicked -> remove task in to-do list
add complete button that puts a line through a task when completed
    when button is clicked -> task is complete and line is put through task*/