// displays the date at the top of the page
function displayDate() {
    var todaysDate = moment();
    $("#currentDay").text(todaysDate.format('dddd, MMMM Do'));
}

// this function handles the color of the agenda boxes; it pulls the current hour and sets it as an integer, and then finds each column element and checks the id of that column element against the current hour, setting it to gray if less than, red if equal to, and green if greater than
function boxColor() {
    var currentHour = parseInt(moment().hour());
    // console.log(currentHour);
    $(".col").each(function () {
        var agendaHour = parseInt($(this).attr("id"));
        if (agendaHour < currentHour) {
            $(this).addClass("past");
        }
        else if (agendaHour == currentHour) {
            $(this).addClass("present");
        }
        else if (agendaHour > currentHour) {
            $(this).addClass("future");
        }
    })
}

// save button handler
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    // targets the button's sibling text area, saves the id of that text area which is the time, then saves the value of the textarea, which is the task itself
    var saveTime = $(this).siblings("textarea").attr("id");
    var saveTask = $(this).siblings("textarea").val();
    // save these variables to local storage as a key and value pairing
    localStorage.setItem(saveTime, saveTask);
})

// sets the interval to 1 IRL sec for the date display, box coloring, 
setInterval(displayDate, 1000);
setInterval(boxColor, 1000);

// function to pull items from local storage
function updateTasks () {
    // for each column element, which targets the text box area
    $(".col").each(function () {
        // get the current hour id
        var hourToUpdate = $(this).attr("id");
        // get the local storage item at that key, using the id as the key
        var taskToUpdate = localStorage.getItem(hourToUpdate);
        // if there is nothing there, it returns a null, so as long as something is there, set the current text box area to the value pulled from local storage
        if (taskToUpdate != null) {
            $(this).text(taskToUpdate);
        }
    })
}

// function to run on page ready
$(document).ready(function() {
    updateTasks();
})