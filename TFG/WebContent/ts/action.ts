var curso:String = "Bienvenido al simulador de planes de emergencia"
alert(curso);

class conectividad {
  secuencia(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    ctx.fillStyle = 'white';
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
  }
  mensaje(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    ctx.fillStyle = 'white';
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoMensaje.png';
  }
  asociacion(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    ctx.fillStyle = 'white';
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoAsociacion.png';
  }
}

var obj = new conectividad;
function conectar(element){
  if(element == 1){
      var button = document.getElementById('buttonConect');
      button.onclick = function(){
        obj.asociacion();
      }
  } else if (element == 2){
      var button = document.getElementById('buttonConect');
      button.onclick = function(){
        obj.mensaje();
      }
  } else if(element == 3){
      var button = document.getElementById('buttonConect');
      button.onclick = function(){
        obj.secuencia();
      }
  }
}

class decision {
  datos(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
  }
}
