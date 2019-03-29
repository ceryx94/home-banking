//Declaración de variables
var nombreUsuario = "Eros";
var password = 12345;
var saldoCuenta = 3800;
var limiteExtraccion = 1000;
var servicioAgua = 350;
var servicioLuz = 210;
var servicioTelefono = 425;
var servicioInternet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Por favor ingrese el nuevo limite."))
    if (nuevoLimite > 0 && nuevoLimite != limiteExtraccion) {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
    }
    else if (nuevoLimite == limiteExtraccion) {
        alert("Ingrese otro valor que no sea igual al que ya esta establecido.")
    }
    else {
        errorNumero();
    }
}

function extraerDinero() {
    var montoAExtraer = parseInt(prompt("Ingrese el monto que monto que desea extraer."));
    if (montoAExtraer > 0 && montoAExtraer <= limiteExtraccion && montoAExtraer % 100 == 0) {
        saldoCuenta -= montoAExtraer;
        actualizarSaldoEnPantalla();
    }
    else if (montoAExtraer % 100 != 0) {
        alert("Solo puedes extraer billetes de 100");
    }
    else if (montoAExtraer > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion.");
    }
    else if (montoAExtraer > saldoCuenta) {
        alert("No hay saldo disponible en su cuenta para extraer ese monto.");
    }
    else {
        errorNumero();
    }
}

function depositarDinero() {
    var montoADepositar = parseInt(prompt("Por favor ingrese el monto que desea depositar"));
    if (montoADepositar > 0) {
        saldoCuenta += montoADepositar;
        actualizarSaldoEnPantalla();
    }
    else {
        errorNumero();
    }
}
function pagarServicio() {
    var servicio = parseInt(prompt("Ingrese el número que corresponda con el servicio que quieres pagar \n 1 - Agua \n 2 - Luz \n 3 - Internet \n 4 - Teléfono"));
    switch (servicio) {
        case 1:
            if (saldoCuenta >= servicioAgua) {
                saldoCuenta -= servicioAgua;
                alert("Has pagado el servicio Agua. \nSaldo anterior: $" + (saldoCuenta + servicioAgua) + "\nDinero descontado: $" + servicioAgua + "\nSaldo actual: $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else if (servicioAgua > saldoCuenta) {
                saldoInsuficiente();
            }
            break;
        case 2:
            if (saldoCuenta >= servicioLuz) {
                saldoCuenta -= servicioLuz;
                alert("Has pagado el servicio Luz. \nSaldo anterior: $" + (saldoCuenta + servicioLuz) + "\nDinero descontado: $" + servicioLuz + "\nSaldo actual: $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else if (servicioLuz > saldoCuenta) {
                saldoInsuficiente();
            }
            break;
        case 3:
            if (saldoCuenta >= servicioInternet) {
                saldoCuenta -= servicioInternet;
                alert("Has pagado el servicio Internet. \nSaldo anterior: $" + (saldoCuenta + servicioInternet) + "\nDinero descontado: $" + servicioInternet + "\nSaldo actual: $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else if (servicioInternet > saldoCuenta) {
                saldoInsuficiente();
            }
            break;
        case 4:
            if (saldoCuenta >= servicioTelefono) {
                saldoCuenta -= servicioTelefono;
                alert("Has pagado el servicio Teléfono. \nSaldo anterior: $" + (saldoCuenta + servicioTelefono) + "\nDinero descontado: $" + servicioTelefono + "\nSaldo actual: $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else if (servicioTelefono > saldoCuenta) {
                saldoInsuficiente();
            }
            break;
        default:
            alert("Ese número no corresponde a ningún servicio.");
    }
}

function transferirDinero() {
    var montoATransferir = parseInt(prompt("Ingrese el monto que desea transferir"));
    if(montoATransferir <= saldoCuenta){
        var cuentaAmiga = parseInt(prompt("Ingrese el número de la cuenta amiga"));
        if(cuentaAmiga == cuentaAmiga1 || cuentaAmiga == cuentaAmiga2){
            alert("Se han transferido: $" + montoATransferir + "\nCuenta destino: " + cuentaAmiga);
            saldoCuenta -= montoATransferir;
            actualizarSaldoEnPantalla();
        }
        else{
            alert("Ingrese el numero de una cuenta amiga válido");
        }

    }
    else{
        saldoInsuficiente();
    }

}

function iniciarSesion() {
    var nombreIngresado = prompt("Ingrese nombre de usuario");
    var passwordIngresado = parseInt(prompt("Ingrese contraseña"));
    if(nombreIngresado == nombreUsuario && passwordIngresado == password){
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar tus operaciones.");
        cargarNombreEnPantalla();
    }
    else{
        alert("Usuario o código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        saldoCuenta = 0;
        nombreUsuario = "";
        limiteExtraccion = "";
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
}

function errorNumero() {
    alert("Ingrese un valor mayor a 0.");
}

function saldoInsuficiente() {
    alert("No hay suficiente saldo en tu cuenta para realizar esta operación.")
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}