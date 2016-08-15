var solution1 = function(alreadyCompleted, distance, kmPerDay) {
    var allTime =  (distance - alreadyCompleted) / kmPerDay;
    var days = allTime.toFixed(0);
    // var hours = ((allTime%1)*24).toFixed(0);
    // var minutes = ((((allTime%1)*24)%1)*60).toFixed(0);
    var hours = Math.floor((allTime - days)*24);
    var minutes = Math.floor((((allTime - days)*24)-hours)*60);

    if (days == 1) {
        var daysText = "day";
    } else {
        var daysText = "days";
    }

    if (hours == 1) {
        var hoursText = "hour";
    } else {
        var hoursText = "hours";
    }

    if (minutes == 1) {
        var minutesText = "minute";
    } else {
        var minutesText = "minutes";
    }

    console.log("The road will take: " + days + " " + daysText + ", " + hours + " " + hoursText + ", " + minutes + " " + minutesText);


}

solution1(50,80,25);