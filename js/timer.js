var data2 = new Date("September 1, 2023 00:00:00");
var timer = document.getElementById("timer");

setInterval(function() {
    let data1 = Date.now();
    var data = data2 - data1;

    let days = Math.trunc(data / 1000 / 60 / 60 / 24);
    data = data - days * 1000 * 60 * 60 * 24;

    let hours = Math.trunc(data / 1000 / 60 / 60);
    data = data - hours * 1000 * 60 * 60;

    let minutes = Math.trunc(data / 1000 / 60);
    data = data - minutes * 1000 * 60;

    let seconds = Math.trunc(data / 1000);
    let st = "<table id = 'table4'>";
    st += "<tr><span>До начала учебного года осталось</span></tr>";
    st += "<tr> <td>Дней</td> <td>Часов</td> <td>Минут</td> <td>Секунд</td> </tr>";
    st += "<tr><td>" + days + "</td><td>" + hours + "</td><td>" + minutes + "</td><td>" + seconds + "</td></tr>";
    st += "</table>";
    timer.innerHTML = st;
}, 1000);