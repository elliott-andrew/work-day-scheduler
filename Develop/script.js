var m = moment();
var month = m.format('MMM');
var date = m.format('Mo');
var day = m.format('dddd');
var year = m.format('YYYY');
var hour = m.get('hour');
var minute = m.get('minute');
var dateTime = m.format("LLLL");

var todos = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
console.log(todos);

// Display the current day on top of the page
$("#currentDay").text(dateTime);
// Create table in container
function renderTodos() {
    // render new row for each todo
    for (let i = 0; i < todos.length; i++) {
        // create a variable to hold each to do
        var todo = todos[i];
        // create a tr element
        var trEl = document.createElement("tr");
        // create an element to hold the time slots
        var timeEl = document.createElement("td");
        // insert the time slot
        timeEl.textContent = todo;
        timeEl.setAttribute("id", "time-hour")
        // set an attribute to later compare
        var button = document.createElement("button");
        // add the word done to each button
        button.textContent = "Done";
        // append the button to the time element
        var inputEl = document.createElement("input");
        inputEl.setAttribute("name", "todo-text");
        inputEl.setAttribute("id", "todo-text");
        timeEl.appendChild(inputEl);
        timeEl.appendChild(button)
        // append the time element to the tr
        trEl.appendChild(timeEl);
        // append the tr to the to do list
        $(".todoList").append(trEl);
    }
}
// function renderForm() {
//     var formEl = document.createElement("form")
//     var inputEl = document.createElement("input");
//     inputEl.setAttribute("name", "todo-text");
//     inputEl.setAttribute("id", "todo-text");
//     formEl.appendChild(inputEl);
//     $("#time-hour").append(formEl);
// }


renderTodos();
// rows from 9am to 5pm
// columns for time, task, complete
// color code each row to time of day
// #00D462 for future, #2C6C6E for past, #D4B60B for current
// class each row based on time 
// allow user to enter task within a time block
// allow user to save that task in local storage