document.addEventListener('DOMContentLoaded', function () {
document.getElementById('calc').addEventListener('click', getTravelTime);
});

var getTravelTime = function() {
    var text = {
        day: 'day',
        hour: 'hour',
        minute: 'minute'
    };
    var distance = document.getElementById('distance').value;
    var alreadyCompleted = document.getElementById('alreadyCompleted').value;
    var distancePerDay = document.getElementById('distancePerDay').value;
    var departureCity = document.getElementById('departureCity').value;
    var destinationCity = document.getElementById('destinationCity').value;
    var list = document.getElementById('calcList');
    var li = document.createElement('LI');

    if (distance <= 0 || distancePerDay <= 0 ) {
        li.innerHTML = 'Data Error';
        list.appendChild(li);
        throw new Error('Error');
    } else {
        var allTime = ( distance - alreadyCompleted ) / distancePerDay;
        var days = Math.floor(allTime);
        var hours = Math.floor((allTime % 1) * 24);
        var minutes = ((((allTime % 1) * 24) % 1) * 60 ).toFixed(0);

        if (days !== 1) {
            text.day += 's';
        }
        if (hours !== 1) {
            text.hour += 's';
        }
        if (minutes !== 1) {
            text.minute += 's';
        }

        li.innerHTML = 'The trip form ' + departureCity + ' to ' + destinationCity + ' will take: ' + days + ' '  + text.day + ' ' + hours + ' ' + text.hour + ' ' + minutes + ' ' + text.minute;
        list.appendChild(li);
    }

};


