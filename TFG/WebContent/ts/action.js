var curso = "Bienvenido al simulador de planes de emergencia";
alert(curso);
var conectividad = (function () {
    function conectividad() {
    }
    conectividad.prototype.secuencia = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    conectividad.prototype.mensaje = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoMensaje.png';
    };
    conectividad.prototype.asociacion = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoAsociacion.png';
    };
    return conectividad;
}());
var obj = new conectividad;
function conectar(element) {
    if (element == 1) {
        var button = document.getElementById('buttonConect');
        button.onclick = function () {
            obj.asociacion();
        };
    }
    else if (element == 2) {
        var button = document.getElementById('buttonConect');
        button.onclick = function () {
            obj.mensaje();
        };
    }
    else if (element == 3) {
        var button = document.getElementById('buttonConect');
        button.onclick = function () {
            obj.secuencia();
        };
    }
}
var decision = (function () {
    function decision() {
    }
    decision.prototype.datos = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    return decision;
}());
//# sourceMappingURL=action.js.map