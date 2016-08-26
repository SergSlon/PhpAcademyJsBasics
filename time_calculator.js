"use strict"
/**
 * This expression adds eventListener to the button. The button triggers timeCounter function when clicked
 */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener('click', timeCounter);
});

/**
 * This function gets its value by comaring the inout result with departureCity and destinationCity
 * @returns totalPath: this is the number of kms to go
 */
function getTotalPath() {
    var dep = document.getElementById("departure_city");
    var departureCity = dep.options[dep.selectedIndex].value;
    var des = document.getElementById("destination_city");
    var destinationCity = des.options[des.selectedIndex].value;
    var totalPath;
    document.getElementById("departure_city").style.backgroundColor="white";
    document.getElementById("destination_city").style.backgroundColor="white";
    switch (departureCity) {
        case "Cherkasy":
            if (destinationCity === "Cherkasy") {
                totalPath = 0;
                break;
            } else if (destinationCity === "Chernihiv") {
                totalPath = 297.2;
                break;
            } else if (destinationCity === "Chernivtsy") {
                totalPath = 641.9;
                break;
            } else if (destinationCity === "Dnipropetrovsk") {
                totalPath = 280.9;
                break;
            } else if (destinationCity === "Donetsk") {
                totalPath = 573.6;
                break;
            } else if (destinationCity === "Ivano-Frankivsk") {
                totalPath = 688.7;
                break;
            } else if (destinationCity === "Kharkiv") {
                totalPath = 370.8;
                break;
            } else if (destinationCity === "Kherson") {
                totalPath = 378.4;
                break;
            } else if (destinationCity === "Kmelnytskyi") {
                totalPath = 459.3;
                break;
            } else if (destinationCity === "Kyiv") {
                totalPath = 188.9;
                break;
            } else if (destinationCity === "Kyrovohrad") {
                totalPath = 129.3;
                break;
            } else if (destinationCity === "Lviv") {
                totalPath = 727.3;
                break;
            } else if (destinationCity === "Lugansk") {
                totalPath = 710.6;
                break;
            } else if (destinationCity === "Lutsk") {
                totalPath = 605.3;
                break;
            } else if (destinationCity === "Mykolaiv") {
                totalPath = 320.2;
                break;
            } else if (destinationCity === "Odesa") {
                totalPath = 445.4;
                break;
            } else if (destinationCity === "Poltava") {
                totalPath = 233.2;
                break;
            } else if (destinationCity === "Rivno") {
                totalPath = 513.7;
                break;
            } else if (destinationCity === "Sevastopil") {
                totalPath = 724.0;
                break;
            } else if (destinationCity === "Sumy") {
                totalPath = 356.8;
                break;
            } else if (destinationCity === "Ternopil") {
                totalPath = 558.2;
                break;
            } else if (destinationCity === "Uzhhorod") {
                totalPath = 997.5;
                break;
            } else if (destinationCity === "Vinnytsia") {
                totalPath = 353.6;
                break;
            } else if (destinationCity === "Zaporizhia") {
                totalPath = 344.0;
                break;
            } else if (destinationCity === "Zhytomyr") {
                totalPath = 326.3;
                break;
            } else {
                alert("You have not selected the destination city");
                totalPath = 0;
                document.getElementById("destination_city").style.backgroundColor="red";
                break;
            }
        case "Kyiv":
            if (destinationCity === "Cherkasy") {
                totalPath = 198.3;
                break;
            } else if (destinationCity === "Chernihiv") {
                totalPath = 198.3;
                break;
            } else if (destinationCity === "Chernivtsy") {
                totalPath = 527.7;
                break;
            } else if (destinationCity === "Dnipropetrovsk") {
                totalPath = 476.6;
                break;
            } else if (destinationCity === "Donetsk") {
                totalPath = 729.5;
                break;
            } else if (destinationCity === "Ivano-Frankivsk") {
                totalPath = 604.8;
                break;
            } else if (destinationCity === "Kharkiv") {
                totalPath = 481.0;
                break;
            } else if (destinationCity === "Kherson") {
                totalPath = 545.9;
                break;
            } else if (destinationCity === "Kmelnytskyi") {
                totalPath = 345.1;
                break;
            } else if (destinationCity === "Kyiv") {
                totalPath = 0;
                break;
            } else if (destinationCity === "Kyrovohrad") {
                totalPath = 300.8;
                break;
            } else if (destinationCity === "Lviv") {
                totalPath = 541.0;
                break;
            } else if (destinationCity === "Lugansk") {
                totalPath = 820.8;
                break;
            } else if (destinationCity === "Lutsk") {
                totalPath = 418.9;
                break;
            } else if (destinationCity === "Mykolaiv") {
                totalPath = 479.1;
                break;
            } else if (destinationCity === "Odesa") {
                totalPath = 474.2;
                break;
            } else if (destinationCity === "Poltava") {
                totalPath = 343.4;
                break;
            } else if (destinationCity === "Rivno") {
                totalPath = 327.3;
                break;
            } else if (destinationCity === "Sevastopil") {
                totalPath = 891.5;
                break;
            } else if (destinationCity === "Sumy") {
                totalPath = 333.7;
                break;
            } else if (destinationCity === "Ternopil") {
                totalPath = 419.5;
                break;
            } else if (destinationCity === "Uzhhorod") {
                totalPath = 811.1;
                break;
            } else if (destinationCity === "Vinnytsia") {
                totalPath = 265.9;
                break;
            } else if (destinationCity === "Zaporizhia") {
                totalPath = 557.1;
                break;
            } else if (destinationCity === "Zhytomyr") {
                totalPath = 139.9;
                break;
            } else {
            	document.getElementById("destination_city").style.backgroundColor="red";
                alert("You have not selected the destination city");
                totalPath = 0;
                break;
            }
        default:
        	document.getElementById("departure_city").style.backgroundColor="red";
            alert("You have not selected the departure city");
            totalPath = 0;
            break;
    }
    return totalPath;
};

/**
 * This function gets the value from the input with id ="completed_path"
 * @returns completedPath: this is the number of kms that the driver has already gone
 */
function getCompletedPath() {
    var completedPath = document.getElementById("completed_path").value;
    if (completedPath > 1000) {
        alert("Please, enter a valid number of km");
    } else return completedPath;
};

/**
 * This function gets speed value from the input with id ="speed"
 * @returns speed that is the average speed of the driver
 */
function getSpeed() {
    var s = document.getElementById("speed");
    var speed = s.options[s.selectedIndex].value;
    return speed;
};

/**
 * This function counts how many days, hours and minutes left to complete the path
 * @returns time: the object which has the properties with days, hours and minutes
 * values and prints these values into the div with id = "output"
 */
function timeCounter() {
    var completedPath = getCompletedPath();
    var totalPath = getTotalPath();
    var speed = getSpeed();
    var time = new Object();
    
    if (completedPath > totalPath || totalPath === 0) {
        time.days = 0;
        time.hours = 0;
        time.minutes = 0;
    } else {
        var remainingTime = (totalPath - completedPath) /
            speed;
        time.days = Math.floor(remainingTime / 24);
        time.hours = Math.floor(remainingTime - time.days * 24);
        time.minutes = Math.floor((remainingTime - Math.floor(remainingTime)) *
            60);
    }
    
    if (time.days === 0 && time.hours === 0 && time.minutes === 0){
    document.getElementById("output").innerHTML = "";
    } else{
    document.getElementById("output").innerHTML = time.days + " days, " +
        time.hours + " hours, " + time.minutes + " minutes.";
    }
};
