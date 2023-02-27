$("#menu").click(function() {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("nav").style.opacity = "1";
    document.getElementById("nav").style.pointerEvents = "auto";
  });

function tema_i(){
    document.getElementById("tort_center").style.display ="flex";
    document.getElementById("biscuiti_center").style.display='none';
    document.getElementById("d").style.display ="none";
}

function tema_e(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="flex";
    document.getElementById("bicuiti").style.display ="none";
}

function tema_f(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="none";
    document.getElementById("turte-dulci").style.display ="flex";
}


emailjs.send("service_vq7a1e1", "template_yv0wxul", date)
.them(function(raspuns){
    alert("Mesajul a fost trimis cu Succes!")
    f.reset();
}, function(error){
    alert("Eroare la transmitere.Va rugam incercati mai tarziu.")
})
function Trimete(){
    onclick==alert('Mesajul a fost trimis, pretul va fi ales de catre administratori')
}