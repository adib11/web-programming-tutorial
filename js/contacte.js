function getRow(contact) {
    var id = contact.id || '';
    var phone = contact.phone || '';
    var firstName = contact.firstName || '';
    var lastName = contact.lastName || '';

    var row = '<tr><td>' + (firstName || '') + '</td><td>' + lastName + '</td><td>' + phone + '</td>' +
        '<td>[<a href="date/removed.html?id='+ id +'">x</a>]</td>' +
        '</tr>';
    return row;
}


var tableContent = '';

//for (var i = 0; i< contacte.length; i++) {
//     createRow(contacte[i]);

function createRow(contact) {
    tableContent += getRow(contact);
}
$.ajax('date/contacte.json').done(function (contacte) {
    console.info('contacte', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);

});


// 1. convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)


var person = {
    nume: "Adrian",
    prenume: "Budaca",
    age: 19,
    married: false,
    skills: ["html", "css", "js"],
    voiceCall: function () {
        console.info('te rog sa suni pe', nume);

    }
};