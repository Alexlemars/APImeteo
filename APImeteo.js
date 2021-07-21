const APIKEY = "5d004ab926f68bb800447a7252ae8658";
const erreur = document.querySelector('.erreur');
const form = document.querySelector('form');
let apiCall = ('submit', function(city){
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`

    fetch(url).then((responseville) => 
    responseville.json().then((data) => {
        console.log(data);
        document.querySelector(".ville").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = "<i class='fas fa-thermometer-three-quarters'></i>" + data.main.temp + "°";
        document.querySelector(".humid").innerHTML = '<i class="fas fa-tint"></i>' + data.main.humidity + "%";
        document.querySelector(".vent").innerHTML = '<i class="fas fa-wind"></i>' + data.wind.speed + "km/h";
        erreur.style.display = 'none'
    })).catch(err => {
        erreur.style.display = 'block'
        erreur.innerHTML = "Tu ne sais pas écrire une ville ?" 

        document.querySelector(".ville").innerHTML = "";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humid").innerHTML = "";
        document.querySelector(".vent").innerHTML = "";
    })
    
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    let ville = document.querySelector('#cp2').value
    apiCall(ville)
    form.reset();
})
apiCall("Paris")
