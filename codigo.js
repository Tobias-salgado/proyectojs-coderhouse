function convertir() {
    var continuar = true;
    var dolar = 350;
    var euro = 375;
    while (continuar){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de pesos a Dolares es: $" + resultado);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de pesos a euros es: " + resultado);
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
    var respuesta = prompt("¿desea realizar otra conversion? (Si/No)").toLowerCase();
    if (respuesta !== "si"){
        continuar = false;
    }
    }        
}