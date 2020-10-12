var m = moment();
var month = m.get('month');
var date = m.get('date');
var day = m.format('dddd');
var hour = m.get('hour');
var year = m.get('year');
var minute = m.get('minute');

$("#currentDay").text(day).append("<br/>" + month + "/" + date + "/" + year);
