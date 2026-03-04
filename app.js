workers = [

{name:"Arun",job:"Electrician",rating:4.8},

{name:"Rahul",job:"Plumber",rating:4.5},

{name:"Faisal",job:"AC Repair",rating:4.7}

]


function loadWorkers(){

let container=document.getElementById("workerList")

workers.forEach(w=>{

container.innerHTML+=`
<div class="card">
<h3>${w.name}</h3>
<p>${w.job}</p>
<p>⭐ ${w.rating}</p>
<button onclick="contact()">Contact</button>
</div>
`

})

}

loadWorkers()


function book(service){

document.getElementById("bookingBox").style.display="block"

document.getElementById("serviceName").innerText=service

}


function confirmBooking(){

alert("Booking request sent via WhatsApp")

window.open("https://wa.me/919000000000")

}