humberger = document.querySelector(".humberger");
        humberger.onclick = function(){
            nav = document.querySelector(".nav");
            nav.classList.toggle("active");

        }
function  verif(){
    nom = document.getElementById("name").value;
    if(nom == ""){
        alert("ecrire votre nom");
        return false
    } 
    email = document.getElementById("email").value;
    if(email == ""){
        alert("ecrire votre nom");
        return false
    } 
    num = document.getElementById("num").value;
    if(num == "" || num.length!=8){
        alert("ecrire votre numero");
        return false
    }
    gend1 = document.getElementById("gend1").checked;
    gend2 = document.getElementById("gend2").checked;
    if(gend1 == false && gend2==false){
        alert("svp choisir votre gendre");
        return false
    }
}