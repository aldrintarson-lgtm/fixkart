const workers=[

{
name:"Arun",
job:"Electrician",
rating:4.9,
photo:"https://randomuser.me/api/portraits/men/32.jpg"
},

{
name:"Rahul",
job:"Plumber",
rating:4.6,
photo:"https://randomuser.me/api/portraits/men/44.jpg"
},

{
name:"Faisal",
job:"AC Repair",
rating:4.8,
photo:"https://randomuser.me/api/portraits/men/12.jpg"
}

]

function loadWorkers(){

let list=document.getElementById("workerList")

workers.forEach(w=>{

list.innerHTML+=`
<div class="card worker">
<img src="${w.photo}">
<h3>${w.name}</h3>
<p>${w.job}</p>
<p>⭐ ${w.rating}</p>
<button onclick="contact()">Contact</button>
</div>
`

})

}

loadWorkers()

function openBooking(service){

document.getElementById("serviceName").innerText=service

document.getElementById("bookingModal").style.display="block"

}

function closeBooking(){

document.getElementById("bookingModal").style.display="none"

}

function confirmBooking(){

alert("Booking request sent!")

window.open("https://wa.me/919000000000")

}