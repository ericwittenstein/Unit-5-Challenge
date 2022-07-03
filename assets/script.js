// initialize variables from existing html and css
var timeDisplayEl = $('#currentDay');

// array of objects to store hour value (for past/present/future color checking), time to display, and index. can moment take a 1pm and interpret it as 1300?

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);