// First Task

var getTravelTime = function(alreadyCompleted, distance, kmPerDay) {
    if (distance <= 0 || kmPerDay <= 0) {
        try {
            throw new Error("Error");
        } catch(err) {
            alert("Error");
        }
    } else {
        var allTime = (distance - alreadyCompleted) / kmPerDay;
        var days = Math.floor(allTime);
        var hours = Math.floor(((allTime%1)*24));
        var minutes = ((((allTime%1)*24)%1)*60).toFixed(0);

        return {
            "Days": days,
            "Hours": hours,
            "Minutes": minutes
        };

    }

};

function getTravelTimeText(obj) {
    var text = {
        day: "day",
        hour: "hour",
        minute: "minute"
    };

    if (obj["Days"] !== 1) {
        text.day += "s";
    }
    if (obj["Hours"] !== 1) {
        text.hour += "s";
    }
    if (obj["Minutes"] !== 1) {
        text.minute += "s";
    }

    return("The road will take: " + obj["Days"] + " " + text.day + " " + obj["Hours"] + " " + text.hour + " " + obj["Minutes"] + " " + text.minute);

}

var travelDistanceTime = getTravelTime(80,101,20);
var travelTimeText = getTravelTimeText(travelDistanceTime);
console.log(travelTimeText);


// Second Task

/**
 * Return Object Event
 *
 *
 * @param {String} name            Event name
 * @param {Date} start             Start date
 * @param {Date} end               End Date
 * @param {Object} members         Event Members
 *
 * @example
 *    Event("Party", new Date('2016-08-22T20:00:00'), new Date('2016-08-23T06:30:00'), ["Andrey", "Ivan", "Nasty"]);
 *
 * @return {Object}
 */

function validateEvent(name, start, end, members) {
    if (new Date() > start || new Date() > end || end < start){
        try {
            throw new Error("Error");
        } catch(err) {
            alert("Error");
        }
    } else if(Object.prototype.toString.call(name) == "[object String]" && Object.prototype.toString.call(start) == "[object Date]" && Object.prototype.toString.call(end) == "[object Date]" && Object.prototype.toString.call(members) == "[object Array]") {

        return [name, start, end, members];
    } else {
        try {
            throw new Error("Error");
        } catch(err) {
            alert("Error");
        }
    }
}

function Event(data) {
    return {
        "Name": data[0],
        "Start Date": data[1],
        "End Date": data[2],
        "Members": data[3]
    };
}


var newEventValidation = validateEvent("Party", new Date('2016-08-22T20:00:00'), new Date('2016-08-23T06:30:00'), ["Andrey", "Ivan", "Nasty"]);
var newEvent = new Event(newEventValidation);
console.log(newEvent);

