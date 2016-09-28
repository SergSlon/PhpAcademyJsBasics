// Task 1

var showTime = function timing (traveledDistance, totalDistance, possibleDistance) {
    var timeLeft = (totalDistance-traveledDistance)/possibleDistance;
    var daysLeft = Math.floor(timeLeft);
    var hoursLeft = Math.floor((timeLeft - daysLeft)*24);
    var minutesLeft = Math.floor((((timeLeft - daysLeft)*24)-hoursLeft)*60);

   return("Left to go " + (daysLeft) + " day(s) " + (hoursLeft) + " hour(s) " + (minutesLeft) + " minute(s)!");

   console.log(showTime);
}

showTime(23, 130, 15);


// Task 2

/**
 * Возвращает объект Event
 *
 * @param {Number|Date} start             Начало события
 * @param {Number|Date} end               Конец события
 * @param {String}      [name="Событие"]  Имя события
 * @param {String}      [place="Место"]    Место проведения события
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "Совещание",
 *          "Офис № 315")
 *
 * @return {Object}
 */
function Event(start, end, name, place) {
    return {
        "start": start,
        "end": end,
        "name": name || "Событие",
        "place": place || "Уточните у организатора..."
    };
}

var party = new Event(new Date('2016-08-24T07:00:00'), new Date('2016-08-24T09:00:00'), 'Парад');
console.log(party);
