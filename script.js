function Relogio (){
    var data = new Date();

    var Hora = data.getHours();
    var Minuto = data.getMinutes();
    var Segundo = data.getSeconds();

    let Tempo = Hora+ ':' + Minuto+ ':' + Segundo;

    let hora = window.document.getElementById('horas');
    hora.innerHTML=Hora;

    let minuto = window.document.getElementById('minutos');
    minuto.innerHTML=Minuto;

    let segundo = window.document.getElementById('segundos');
    segundo.innerHTML=Segundo;

    if(Hora < 10){
        hora.innerHTML= "0" + Hora;
    }

    if(Minuto < 10){
        minuto.innerHTML= "0" + Minuto;
    }

    if(Segundo < 10){
        segundo.innerHTML= "0" + Segundo;
    }



    }

    setInterval(Relogio,500);