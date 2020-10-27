var m = moment();
var month = m.format('MMM');
var date = m.format('Mo');
var day = m.format('dddd');
var year = m.format('YYYY');
var hour = m.get('hour');
var minute = m.get('minute');
var dateTime = m.format("LLLL");

// Display the current day on top of the page
$("#currentDay").text(dateTime);

// listener for the save button
$(document).ready(() => {
    $(".saveBtn").click(() => {
        // set the task
        var taskInput = $(this).siblings(".description").val();
        // set the time
        var time = $(this).parent().attr("id");
        // store the task and time
        localStorage.setItem(taskInput, time);
    });

    // loop through the local storage for any saved tasks
    for (let i = 0; i <= 8; i++) {
        $(i + "-hour .description").val(localStorage.getItem(i = "-hour"))
    }

    // Helper
    function trackTime() {
        // pull each text area
        $("textarea").each(() => {
            // if the time is less than the current hour
            if ($("textarea").attr("id") < hour) {
                $(".row").addClass("past");
                $(".row").removeClass("future");
                $(".row").removeClass("present");
                // if the time is equal to the current hour
            } else if ($("textarea").attr("id", i) === hour) {
                $(".row").removeClass("past");
                $(".row").addClass("future");
                $(".row").removeClass("present");
                // if the time is greate than the current hour
            } else if ($("textarea").attr("id", i) > hour) {
                $(".row").removeClass("past");
                $(".row").removeClass("future");
                $(".row").addClass("present");
            }
        })
    }
    trackTime();
});