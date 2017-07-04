
function getRow(firstName, lastName, phone) {
    phone = phone || '';
    firstName = firstName || '';
    lastName = lastName || '';

    var row = '<tr><td>' + (firstName || '') + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
    return row;
}

var contacte = [
    {firstName:'Adrian',lastName: 'Budac',phone: '01' },
    {firstName:'Adrian',lastName: 'Buda',phone: '02'},
    {firstName:'Adrian',lastName: 'Bud',phone: '03'},
    {firstName:'Adrian',lastName: 'Bu',phone: '04'},
    {firstName:'Anca'},
    {lastName: 'Basescu'}
];

var tableContent = '';

//for (var i = 0; i< contacte.length; i++) {
//     createRow(contacte[i]);

function createRow(contact) {
    tableContent +=  getRow( contact.firstName, contact.lastName, contact.phone);
}

contacte.forEach(createRow);

 function pnetruToateContacteleApeleazaFunctia(){
     console.info
 }

$("#contacts-list tbody").html (tableContent);



// 1. convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)



var person = {nume:"Adrian",
    prenume:"Budaca",
    age: 19,
    married: false,
    skills:["html", "css", "js"],
    voiceCall: function () {
        console.info('te rog sa suni pe', nume);

    }
};