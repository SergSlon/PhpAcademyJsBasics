// First Task
var travelCalc = function(alreadyCompleted, distance, kmPerDay) {
    if (distance <= 0 || kmPerDay <= 0) {
        alert("Error");
    } else {
        var allTime = (distance - alreadyCompleted) / kmPerDay;
        var days = Math.floor(allTime);
        var hours = Math.floor(((allTime%1)*24));
        var minutes = ((((allTime%1)*24)%1)*60).toFixed(0);

        return [days, hours, minutes];
    }

}

var newTravel = travelCalc(50,225,45);


var textEdit = (function () {
    var daysText = "";
    var hoursText = "";
    var minutesText = "";
    if (newTravel[0] == 1) {
        daysText = "day";
    } else {
        daysText = "days";
    }

    if (newTravel[1] == 1) {
        hoursText = "hour";
    } else {
        hoursText = "hours";
    }

    if (newTravel[2] == 1) {
        minutesText = "minute";
    } else {
        minutesText = "minutes";
    }

    if(newTravel[2] == 0 && newTravel[1] == 0) {
        console.log("The road will take: " + newTravel[0] + " " + daysText);

        return;
    } if(newTravel[1] == 0 && newTravel[0] == 0) {
        console.log("The road will take: " + newTravel[2] + " " + minutesText);

        return;
    } if (newTravel[0] == 0 && newTravel[2] == 0) {
        console.log("The road will take: "  + newTravel[1] + " " + hoursText);

        return;
    } if (newTravel[0] == 0) {
        console.log("The road will take: " + newTravel[1] + " " + hoursText + ", " + newTravel[2] + " " + minutesText);

        return;
    } if (newTravel[1] == 0) {
        console.log("The road will take: " + newTravel[0] + " " + daysText + ", "  + newTravel[2] + " " + minutesText);

        return;
    } if (newTravel[2] == 0) {
        console.log("The road will take: " + newTravel[0] + " " + daysText + ", " + newTravel[1] + " " + hoursText);
    } else {
        console.log("The road will take: " + newTravel[0] + " " + daysText + ", " + newTravel[1] + " " + hoursText + ", " + newTravel[2] + " " + minutesText);
    }

})();

// Second Task

/**
 * Return Object Event
 *
 *
 * @param {String} name            Event name
 * @param {Date} start             Start date
 * @param {Date} end               End Date
 * @param {Object} members         Event Members
 * @param {String} address         Event address
 *
 * @example
 *    Event("Party", new Date('2016-08-22T20:00:00'), new Date('2016-08-23T06:30:00'), ["Andrey", "Ivan", "Nasty"], "Shevchenko str 35 kv 48");
 *
 * @return {Object}
 */


function Event(name, start, end, members, address) {
    if (new Date() > start || new Date() > end || end < start){
        alert("Invalid Date");
    } else if(typeof(name) == "string" && typeof(start) == "object" && typeof(end) == "object" && typeof(members) == "object" && typeof(address) == "string") {
        return {
            "Name": name,
            "Start Date": start,
            "End Date": end,
            "Members": members,
            "address": address
        };
    } else {
        alert("Error");
    }
}
var newEvent = Event("Party", new Date('2016-08-22T20:00:00'), new Date('2016-08-23T06:30:00'), ["Andrey", "Ivan", "Nasty"], "Shevchenko str 35 kv 48");
console.log(newEvent);

