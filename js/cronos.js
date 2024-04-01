function iniciarCronometroUno(){
    let tiempoUno = document.getElementById('time_1').value;
    tiempoIngresadoUno.innerHTML = tiempoUno;
    let segundosIngresados = document.getElementById('segundos_1')
    let mensajeCrono_1 = document.getElementById('Texto-crono-uno');
    
    let conteo = setInterval(()=>{
        segundosIngresados.innerHTML= tiempoUno;
        mensajeCrono_1.innerHTML = "En ejecución";
        tiempoUno--;
        if(tiempoUno == -1){
            clearInterval(conteo);
            mensajeCrono_1.innerHTML = "Pause"

        }
        
    },1000)

}
function iniciarCronometroDos(){
    let tiempoDos = document.getElementById('time_2').value;
    tiempoIngresadoDos.innerHTML = tiempoDos;
    let segundosIngresados = document.getElementById('segundos_2')
    let mensajeCrono_2 = document.getElementById('Texto-crono-dos');
    
    let conteo = setInterval(()=>{
        segundosIngresados.innerHTML= tiempoDos;
        mensajeCrono_2.innerHTML = "En ejecución";
        tiempoDos--;
        if(tiempoDos == -1){
            clearInterval(conteo);
            mensajeCrono_2.innerHTML = "Pause"

        }
        
    },1000)
}
    function iniciarCronometroTres(){
        let tiempoTres = document.getElementById('time_3').value;
        tiempoIngresadoTres.innerHTML = tiempoTres;
        let segundosIngresados = document.getElementById('segundos_3');
        let mensajeCrono_3 = document.getElementById('Texto-crono-tres');

        let conteo = setInterval(() =>{
            segundosIngresados.innerHTML = tiempoTres;
            tiempoTres--;
            mensajeCrono_3.innerHTML = "En ejecución";

            if(tiempoTres == -1){
                clearInterval(conteo);
                mensajeCrono_3.innerHTML = "Pause";
            }
            
        },1000)

    }



function reset(){
    location.reload();
}