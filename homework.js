/* Задание №1 */
	function solution1(totalPath, completedPath, speed){
	if (totalPath > completedPath)
	{
	var remainingTime = (totalPath - completedPath)/speed;
	var remainingDays = Math.floor(remainingTime/24);
	var remainingHours = Math.floor(remainingTime - remainingDays * 24);
	var remainingMinutes = Math.floor(((remainingTime - Math.floor(remainingTime)) * 60));
	return [remainingDays, remainingHours, remainingMinutes];
	}
	else {
	return [0, 0, 0];
}
}

/* Задание №2 */
function CreateEvent(name, beginTime, endTime, place, rating, attendees) {
       var regex1 = /^[a-zA-Z ]{2,30}$/;
       var regex2 = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
       var regex3 = /^([1-9]|10)$/;
        if (regex1.test(name) && regex1.test(place)) {
       this.name = name;
       this.place = place;
           if (regex2.test(beginTime) && regex2.test(endTime)){
           this.beginTime = beginTime;
           this.endTime = endTime;
               if (regex3.test(rating)){
               this.rating = rating;
               }
               else {window.alert ("Invalid rating!");}
           }
           else {window.alert ("Invalid time!");}
       }
       else {window.alert ("Invalid name or place!");}
       this.attendees = attendees;
}

    var MyEvent = CreateEvent ("meeting", "11.12.2016", "11.12.2016", "Kiev", 5, ["Olga", "Ivan"]);