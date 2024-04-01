function iniciarCronometro(){
    let tiempo = document.getElementById('time').value;
    tiempoIngresado.innerHTML = tiempo;
    let segundosIngresados = document.getElementById('segundos');
    let mensajeCrono_1 = document.getElementById('Texto-crono-uno');
    let mensajeCrono_2 = document.getElementById('Texto-crono-dos');

    let contador1 = setTimeout(function contando(){
        segundosIngresados.innerHTML = tiempo;
        tiempo--;
        contador1 = setTimeout(contando, 1000);
        if(tiempo == -1){
            clearTimeout(contador1);
            mensajeCrono_1.innerHTML = "Pause";
            mensajeCrono_2.innerHTML = "En ejecución";
        }else{
            mensajeCrono_1.innerHTML = "En ejecución";
            mensajeCrono_2.innerHTML = "Pause";
        } 

        if(tiempo == 0){
            let tiempo = document.getElementById('time').value;
            tiempoIngresado.innerHTML = tiempo;
            let contador2 = setInterval(() => {
                segundos2.innerHTML = tiempo;
                tiempo--;
                if(tiempo == -1){
                    clearInterval(contador2);
                    mensajeCrono_2.innerHTML = "Pause";

                }
            },1000)
        }

    },1000)    
}

function reset(){
    location.reload();
}



