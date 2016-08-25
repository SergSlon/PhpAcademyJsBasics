// Задание №1
"use strict"
/**
 * This function counts how many days, hours and minutes left to complete the path.
 * @param totalPath is the total number of km that are left to the point of destination
 * @param completedPath is the number of km of completed path (how many km a person has already gone)
 * @param speed is a speed (km/h) of a person (either he walks or drives)
 * @returns time this is the object which has the properties with days, hours and minutes values
*/
 
function timeCounter(totalPath, completedPath, speed) {
var time = new Object;
    if (completedPath > totalPath || totalPath == 0) { 
        time.days = 0;
        time.hours = 0;
        time.minutes = 0;
    } else {
        var remainingTime = ((Math.abs(totalPath) - Math.abs(completedPath))/speed);
        time.days = Math.floor(remainingTime/24);
	    time.hours = Math.floor(remainingTime - time.days * 24);
	    time.minutes = Math.floor((remainingTime - Math.floor(remainingTime)) * 60);
    }
return time;
};

/**
 * This function prints into the console how many days, hours and minutes are left to complete the path.
 * @param time takes an object created with a constructor 
 * @returns {object} that has the properties of days, hours and minutes.
*/
 
function output(time) {
    console.log ("There are " + time.days + " days, " + time.hours + " hours, " + time.minutes + " minutes left.");
};

output(timeCounter(1600, 600, 7));
	    
	

// Задание №2 
/**
  * @constructor
  * @param name The name of the event
  * @param date The date of the event
  * @param place The location where the event takes place
  * @param attendees People that are present on the event
*/
  
function Event (name, date, place, attendees) {
    validate (name, date, place, attendees);
    this.name = name;
    this.date = new Date (date);
    this.place = place;
    this.attendees = attendees;
};	

/**
  * This is a validator which checks each input string for compliance with some rules
  * @param name The name of the event
  * @param date The date of the event
  * @param place The location where the event takes place
  * @param attendees People that are present on the event
  * @throws "invalid name entry" error if the name input is incorrect
  * @throws "invalid date entry" error if the date input is incorrect
  * @throws "invalid place entry" error if the place input is incorrect
  * @throws "invalid attendees entry" error if the attendees input is incorrect
  * @returns true if there are no input errors
  * @returns false if input errors are present
*/
  
function validate (name, date, place, attendees){
    var validName = (name.length > 3 && name.length < 20);
    var validDate = (date.length === 10);
    var validPlace = (place.length > 3 && place.length < 10);
    var validAttendees = (attendees.length > 3 && attendees.length < 50);
    if (!validName || !validDate || !validPlace || !validAttendees) {
       throw new TypeError('invalid params');
    }
};

/**
 * @param meeting is a new object created with the Event constructor
 * @param teambuilding is a new object created with the Event constructor
*/

var meeting = new Event ("sprint", "01-09-2016", "Kiev", "Alexandr, Dmitry, Olga");
var teambuilding = new Event ("teambuilding", "02-09-2016", "Kiev", "Alexandr, Dmitry, Olga");
console.log (meeting, teambuilding);
