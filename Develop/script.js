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


$(document).ready(() => {
    $(".saveBtn").click(() => {
        var taskInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(taskInput, time);
    });

    // loop through the local storage for any saved tasks
    for (let i = 0; i <= 8; i++) {
        $(i + "-hour .description").val(localStorage.getItem(i = "-hour"))
    }
    // Helper
    function trackTime() {
        for (let i = 9; i <= 17; i++) {
            if ($(".row").attr("id", i) < hour) {
                $(".row").addClass("past");
                $(".row").removeClass("future");
                $(".row").removeClass("present");
            } else if ($(".row").attr("id", i) === hour) {
                $(".row").removeClass("past");
                $(".row").addClass("future");
                $(".row").removeClass("present");
            } else if ($(".row").attr("id", i) > hour) {
                $(".row").removeClass("past");
                $(".row").removeClass("future");
                $(".row").addClass("present");
            }

        }
    }
    trackTime();
});