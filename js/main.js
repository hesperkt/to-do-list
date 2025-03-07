document.querySelector(".addTask").addEventListener('click', addTask)

function addTask(){
    let input = document.querySelector(".taskInput").value //see text from input
    let li = document.createElement("li") //create list item
    let task = document.createTextNode(input) // assign value to and create text obtained from input
    li.appendChild(task) //append list 
    document.querySelector(".taskInput").value = "" // clear input
    if (input === ""){ //conditional to ensure input is not empty
        alert("Looks like you didn't add a task! Please add one.")
    } else {
        document.querySelector(".listOfTasks").appendChild(li)
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
    when button is clicked -> task is complete and line is put through task
*/

