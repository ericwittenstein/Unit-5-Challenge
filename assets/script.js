// initialize variables from existing html and css
// var timeDisplayEl = $('#currentDay');

// array of objects to store hour value (for past/present/future color checking), time to display, and index. can moment take a 1pm and interpret it as 1300? answer: no. solution: one variable to count hours military style, one to display the time to the page
/* var todayAgenda = [
    {
        indexId: "0",
        hourOfTheDay: "09",
        timeToDisplay: "9am",
        task: ""
    },
    {
        indexId: "1",
        hourOfTheDay: "10",
        timeToDisplay: "10am",
        task: ""
    },
    {
        indexId: "2",
        hourOfTheDay: "11",
        timeToDisplay: "11am",
        task: ""
    },
    {
        indexId: "3",
        hourOfTheDay: "12",
        timeToDisplay: "12pm",
        task: ""
    },
    {
        indexId: "4",
        hourOfTheDay: "13",
        timeToDisplay: "1pm",
        task: ""
    },
    {
        indexId: "5",
        hourOfTheDay: "14",
        timeToDisplay: "2pm",
        task: ""
    },
    {
        indexId: "6",
        hourOfTheDay: "15",
        timeToDisplay: "3pm",
        task: ""
    },
    {
        indexId: "7",
        hourOfTheDay: "16",
        timeToDisplay: "4pm",
        task: ""
    },
    {
        indexId: "8",
        hourOfTheDay: "17",
        timeToDisplay: "5pm",
        task: ""
    },
]*/

// pulled this function from a stack answer after googling how to save to local storage and this seemed like the simplest answer. basically takes the value of the day array items and turns them into strings
// function saveAgenda() {
//     localStorage.setItem("Today's Agenda", JSON.stringify(todayAgenda));
// }

// this function *should* pull info from local storage and display it to the calendar. not sure how to run through a local storage array though, gonna check with tutoring for help
// function displayAgenda() {
//     todayAgenda.forEach(function (eachHour) {
//     });
// }

// EVERYTHING ABOVE THIS LINE CAN BE DELETED IF EVERYTHING BELOW THIS LINE WORKS

// displays the date at the top of the page
function displayDate() {
    var todaysDate = moment();
    $("#currentDay").text(todaysDate.format('dddd, MMMM Do'));
}

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

// sets the interval to 1 IRL sec for the date display, box coloring, 
setInterval(displayDate, 1000);
setInterval(boxColor, 1000);