var total = '0';

function AdicionarNoVisor(num) {
   var visor = document.getElementById("v").innerText;
    if(visor.length <=7){
        document.getElementById("v").innerHTML += num;
    }

    alert(visor.length);
    
    
}

function Somar() {
    total = total + num;    
    document.getElementById("v").innerHTML = total;    
}
 