var map = L.map('map');
map.setView([8.945326, 38.771768], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,

}).addTo(map);

var marker = L.marker([8.8981978, 38.7747308]).addTo(map);
var marker = L.marker([8.945326, 38.771768]).addTo(map);
var marker = L.marker([8.990853, 38.779147]).addTo(map);

var circle = L.circle([8.8981978, 38.7747308], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 500

}).addTo(map);
marker.bindPopup("<b>ARYAM COFFEE").openPopup();
circle.bindPopup("ARYAM COFFEE.");

function onMapClick(e) {
alert("You clicked the map at " + e.latlng);
}


var circle = L.circle([8.945326, 38.771768], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    
    }).addTo(map);
    marker.bindPopup("<b>ARYAM COFFEE").openPopup();
    circle.bindPopup("ARYAM COFFEE.");
    
    function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
    }


    var circle = L.circle([8.990853, 38.779147], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
        
        }).addTo(map);
        marker.bindPopup("<b>ARYAM COFFEE").openPopup();
        circle.bindPopup("ARYAM COFFEE.");
        
        function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
        }

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);

let list1 = document.querySelector('.list1')

document.querySelector('#menu').onclick = () =>{
    list1.classList.toggle('active');
}

map.on('click', onMapClick);

let login = document.querySelector('.login')

document.querySelector('#person').onclick = () =>{
    login.classList.toggle('active');
}

let serch = document.querySelector('.serch')

document.querySelector('#ser').onclick = () =>{
    serch.classList.toggle('active');
}


map.on('click', onMapClick);

let dow1 = document.querySelector('.dow1')

document.querySelector('#search-box').onclick = () =>{
    dow1.classList.toggle('active');
}


const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "leulaaaa12@gmail.com",
        Password : "6D029DD9AAC47315F7179262990D2EFFEBEA",
        To : 'leulaaa12@gmail.com',
        From : "leulaaaa12@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfuly!",
                icon: "success"
              });
        }
      }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});


