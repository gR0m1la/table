strany = ["Italy", "France", "Switzerland", "Hungary", "Romania", "Japan", "Afghanistan", "India", "Brazil", "Canada", "Argentina", "Colombia", "England", "Mexico"];

function makeTableFromCountry(country, i) {
    let div = "<div " + "id = " + '"' + strany[i] + '"' + "class = " + '"bg"' + " >";
    let h1 = "<h1 align='center'>";
    let tr = "<tr>";
    let td = "<td>";
    let tab = "<table width=50% align='center' style='table-layout: fixed'>";
    let tabmas1 = [];
    let tabmas2 = [];
    let tabmas3 = [];
    country.map(function (country) {
        if (typeof country == 'string') {
            tabmas1.push(country); // добавляет элемент в конец массива
        }
        else if(typeof country == 'object') {
            tabmas2.push(country);
        }
        else {
            tabmas3.push(country);
        }
    })
    h1 += tabmas1[0] + " - " + tabmas1[1] + "</h1>"; // "Государство", "Столица"
    td += h1 + "</td>";
    tr += h1 + "</tr>";
    tab += td;
    tab += "</table>";
    div += tab;
    tab = "<table width=50% align='center' style='table-layout: fixed;'>";
    for (let j = 2; j < 4; j++) { // "Континент", "Часть света"
        tr = "<tr>";
        td = "<td>" + about[j] + "</td>";
        tr += td;
        td = "<td>" + "<li>" + tabmas1[j] + "</li>" + "</td>";
        tr += td + "</tr>";
        tab += tr;
    }
    tr = "<tr>";
	td = "<td>" + about[4] + "</td>"; //"Разница во времени"
	tr += td;
	td = "<td>" + "<li>" + tabmas3[0] + "</li>" + "</td>";
	tr += td + "</tr>";
	tab+= tr;
    tr = "<tr>";
	td = "<td>" + about[5] + "</td>"; // "Денежная единица"
	tr += td;
	td = "<td>" + '<li>' + tabmas1[4] + "</li>" + "</td>";
	tr += td + "</tr>";
	tab+= tr;
    tabmas1 = [];
    tabmas2 = [];
    tabmas3 = [];
    country.map(function (country) {
        if (typeof country == 'object') {
            tabmas1.push(country);
        }
    })
    tabmas1.map(function (tabmas1, j) {
        if (typeof tabmas1[j] == 'string') {"<td>" + about[6] + "</td>";
            tabmas2.push(tabmas1);
        }
    })
    tabmas2[0].map(function (tabmas2, j) {
        if (j == 0) {
            tr = "<tr>";
            td = "<td>" + about[6] + "</td>"; // "Географические объекты"
            tr += td;
            td = "<td>" + '<li type="circle">' + tabmas2 + '</li type="circle">' + "</td>";
            tr += td + "</tr>";
            tab += tr;
        } 
        else {
            tr = "<tr>";
            td = "<td>" + "</td>";
            tr += td;
            td = "<td>" + '<li type="circle">' + tabmas2 + '</li type="circle">' + "</td>";
            tr += td + "</tr>";
            tab += tr;
        }
    })
    tabmas2 = [];
    tabmas1.map(function (tabmas1, j) {
        if (typeof tabmas1 == 'object') {
            tabmas2.push(tabmas1);
        }
    })
    tabmas1 = [];
    tabmas2.map(function (tabmas2, j) {
        if (typeof tabmas2[j] != 'string') {
            tabmas1.push(tabmas2);
        }
    })
    tabmas2 = [];
    tabmas1.map(function (tabmas1, j) {
        if (typeof tabmas1[j] == 'object') {
            tabmas2.push(tabmas1);
        } 
        else {
            tabmas3.push(tabmas1);
        }
    })
    tabmas2[0].map(function (tabmas2, j) {
        if (j == 0) {
            tr = "<tr>";
            td = "<td>" + about[7] + "</td>"; // "Литературные произведения"
            tr += td;
            td = "<td>" + '<li type="square">' + tabmas2[0] + ' "' + tabmas2[1] + '" ' + "(" + tabmas2[2] + ")" + "</td>";
            tr += td + "</tr>";
            tab += tr;
        } 
        else {
            tr = "<tr>";
            td = "<td>" + "</td>";
            tr += td;
            td = "<td>" + '<li type="square">' + tabmas2[0] + ' "' + tabmas2[1] + '" ' + "(" + tabmas2[2] + ")" + "</td>";
            tr += td + "</tr>";
            tab += tr;
        }
    })
    tab += "</table>"
    div += tab;
    tab = "<table class='ist1' width=50% align='center' style='table-layout: fixed;'>";
    td = "<th class='size'>";
    td += "<p>Исторические события: </p>"; // "Исторические события"
    td += "</th>";
    tab += td;
    tab += "</table>"
    tab += "<table class='ist2' width=50% align='center' style='table-layout: fixed;'>"
    tr = "<tr>";
    tabmas3.map(function (tubmas3, j) {
        for (let key in tubmas3) {
            td = "<td class='volga'>" + key + ': ' + tubmas3[key] + "</td>";
            tr += td;
        }
    })
    tr += "</tr>";
    tab += tr;
    tab += "</table>"
    div += tab;
    div += "</div>";
    return div;
}

var ptr = country.map((country, i) => {
    return makeTableFromCountry(country, i)
});

ptr.forEach(function (info, i, arr) {
    document.write(info + "<br>");
})