var c = 60;
var t;
var timer_is_on = 0;
var puntaje =0
var multiplicacion =0;


function timedCount() {
  document.getElementById("txt").value = c;
  c = c - 1;
  ocultarCorrectoEIncorrecto();
  t = setTimeout(timedCount, 1000);
  if(c==-1){
    stopCount();
    alert('¡Juego Finalizado! Se término el tiempo, su puntaje es: '+puntaje);
    c=60;
    puntaje=0;
    mostrarbtnIniciar();
    ocultarCasillas();
  }
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}


function GenerarRandomicos(){

  
  var num1 = Math.floor(Math.random() * 9) + 1;
  document.getElementById("num1").innerHTML = num1;
  var num2 = Math.floor(Math.random() * 9) + 1;
  document.getElementById("num2").innerHTML = num2;

  multiplicacion = num1*num2;

  var op= Math.floor(Math.random() * 4) + 1;

  switch(op) {
  case 1: document.getElementById("op1").innerHTML = multiplicacion;
          document.getElementById("op2").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op3").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op4").innerHTML = Math.floor(Math.random() * 99) + 1;
          
    break;
  case 2: document.getElementById("op1").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op2").innerHTML = multiplicacion;
          document.getElementById("op3").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op4").innerHTML = Math.floor(Math.random() * 99) + 1;
          
    break;
  case 3: document.getElementById("op1").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op2").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op3").innerHTML = multiplicacion;
          document.getElementById("op4").innerHTML = Math.floor(Math.random() * 99) + 1;
          
    break;
  case 4: document.getElementById("op1").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op2").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op3").innerHTML = Math.floor(Math.random() * 99) + 1;
          document.getElementById("op4").innerHTML = multiplicacion;
          
    break;
  default:
  } 
  
}

function verificar1(){
  if(multiplicacion==document.getElementById("op1").innerHTML){
    puntaje = puntaje +1;
    mostrarCorrecto();
    document.getElementById("puntajeT").innerHTML = puntaje;
  }
  else{
    mostrarIncorrecto();
  }
}
function verificar2(){
 if(multiplicacion==document.getElementById("op2").innerHTML){
    puntaje = puntaje +1;
    mostrarCorrecto();
    document.getElementById("puntajeT").innerHTML = puntaje;
  }
  else{
    mostrarIncorrecto();
  }
}
function verificar3(){
 if(multiplicacion==document.getElementById("op3").innerHTML){
    puntaje = puntaje +1;
    mostrarCorrecto();
    document.getElementById("puntajeT").innerHTML = puntaje;
  }
  else{
    mostrarIncorrecto();
  }
}
function verificar4(){
  
 if(multiplicacion==document.getElementById("op4").innerHTML){
    puntaje = puntaje +1;
    mostrarCorrecto();
    document.getElementById("puntajeT").innerHTML = puntaje;
  }
  else{
    mostrarIncorrecto();
  }
}

function ocultarbtnIniciar(){
document.getElementById('Iniciar').style.visibility = 'hidden';
}

function mostrarbtnIniciar(){
document.getElementById('Iniciar').style.visibility = 'visible';
}

function ocultarbtnReiniciar(){
document.getElementById('Reiniciar').style.display = 'none';
}

function mostrarbtnReiniciar(){
document.getElementById('Reiniciar').style.display = 'block';
}

function mostrarCasillas(){
  document.getElementById('op1').style.display = 'block';
  document.getElementById('op2').style.display = 'block';
  document.getElementById('op3').style.display = 'block';
  document.getElementById('op4').style.display = 'block';
}

function ocultarCasillas(){
  document.getElementById('op1').style.display = 'none';
  document.getElementById('op2').style.display = 'none';
  document.getElementById('op3').style.display = 'none';
  document.getElementById('op4').style.display = 'none';
}

function refresh()
  {
    location.reload(true);
  }

function mostrarCorrecto(){
  document.getElementById("correcta").style.display ="block";
}
function mostrarIncorrecto(){
  document.getElementById("incorrecta").style.display ="block";
}

function ocultarCorrectoEIncorrecto(){
  document.getElementById("correcta").style.display ="none";
  document.getElementById("incorrecta").style.display ="none";
}
