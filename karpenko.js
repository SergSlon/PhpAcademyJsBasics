/* Задание №1 */

/**
 * This function counts how many days, hours and minutes left to complete the path.
 * @param {number, number, number} input any number
 * @returns {object} that has the properties of days, hours and minutes.
 */

function timeCounter(totalPath, completedPath, speed) {
"use strict"

  if (completedPath > totalPath || totalPath == 0) { 
  
      var time = {
      days: 0,
      hours: 0,
      minutes: 0
      };
    
	function output(time) {
	    window.alert ("There are " + time.days + " days, " + time.hours + " hours, " + time.minutes + " minutes left.");
	};
    return time;
  }
  else {
	  var remainingTime = ((Math.abs(totalPath) - Math.abs(completedPath))/speed);
	  var remainingDays = Math.floor(remainingTime/24);
	  var remainingHours = Math.floor(remainingTime - remainingDays * 24);
	  var remainingMinutes = Math.floor(((remainingTime - Math.floor(remainingTime)) * 60));
	  
	  var time = {
	      days: remainingDays,
	      hours: remainingHours,
	      minutes: remainingMinutes
	  };
	
    function output(time) {
        window.alert ("There are " + time.days + " days, " + time.hours + " hours, " + time.minutes + " minutes left.");
    };
    return time;
  }
};
	    
	

/* Задание №2 */

var myEvent = {
	name: "meeting",
	beginTime: new Date("2016-09-05"),
	endTime: new Date("2016-09-06"),
	place: "Kiev",
	rating: 8,
	attendees: "Olga, Ivan, Petr"
};	

/**
 * This function validates the input values.
 * @param {object} input an object of an event in the calendar with the following properties: name, time when it begins, time when it ends, place (city), rating and attendees.
 * @returns {boolean} that indicates if the input has passed validation: returns "true" if the input is valid, and returns "false" if the input is not valid.
 */
	
function validateEvent(myEvent) {
    this.name = myEvent.name;
    this.beginTime = myEvent.beginTime;
	this.endTime = myEvent.beginTime;
	this.place = myEvent.place;
	this.rating = myEvent.rating;
	this.attendees = myEvent.attendees;
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var timeRegex = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;
    var ratingRegex = /^([1-9]|10)$/;
    if (nameRegex.test(name) && nameRegex.test(place)) {
        if (timeRegex.test(beginTime) && timeRegex.test(endTime)){
            if (ratingRegex.test(rating)){
		        return true;
            } else {
                throw new Error ("Invalid rating!"); 
                return false;
            } 
        } else {
            throw new Error ("Invalid time!"); 
            return false;
        }
    } else {
        throw new Error ("Invalid name or place!"); 
        return false;
    }
};