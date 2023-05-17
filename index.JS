function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var unidadeOrigem = document.getElementById("unidadeOrigem").value;
    var unidadeDestino = document.getElementById("unidadeDestino").value;
    var resultado;

    if (unidadeOrigem === "celsius") {
        if (unidadeDestino === "fahrenheit") {
            resultado = (temperatura * 9 / 5) + 32;
        } else if (unidadeDestino === "kelvin") {
            resultado = temperatura + 273.15;
        } else {
            resultado = temperatura;
        }
    } else if (unidadeOrigem === "fahrenheit") {
        if (unidadeDestino === "celsius") {
            resultado = (temperatura - 32) * 5 / 9;
        } else if (unidadeDestino === "kelvin") {
            resultado = (temperatura + 459.67) * 5 / 9;
        } else {
            resultado = temperatura;
        }
    } else if (unidadeOrigem === "kelvin") {
        if (unidadeDestino === "celsius") {
            resultado = temperatura - 273.15;
        } else if (unidadeDestino === "fahrenheit") {
            resultado = temperatura * 9 / 5 - 459.67;
        } else {
            resultado = temperatura;
        }
    } else {
        resultado = temperatura;
    }
    var body = document.querySelector("body");
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = resultado.toFixed(2);

    if (unidadeDestino === "celsius") {
        if (resultado > 28) {
            resultadoElement.style.backgroundColor = "red";
            body.style.backgroundColor = "red";


        } else if (resultado < 20) {
            resultadoElement.style.backgroundColor = "blue";
            body.style.backgroundColor = "blue";

        } else {
            resultadoElement.style.backgroundColor = "yellow";
            body.style.backgroundColor = "yellow";
        }
    }

    if (unidadeDestino === "fahrenheit") {
        if (resultado > 82.40) {
            resultadoElement.style.backgroundColor = "red";
            body.style.backgroundColor = "red";

        } else if (resultado < 68) {
            resultadoElement.style.backgroundColor = "blue";
            body.style.backgroundColor = "blue";

        } else {
            resultadoElement.style.backgroundColor = "yellow";
            body.style.backgroundColor = "yellow";
        }
    }

    if (unidadeDestino === "kelvin") {
        if (resultado > 301.15) {
            resultadoElement.style.backgroundColor = "red";
            body.style.backgroundColor = "red";

        } else if (resultado < 293.15) {
            resultadoElement.style.backgroundColor = "blue";
            body.style.backgroundColor = "blue";

        } else {
            resultadoElement.style.backgroundColor = "yellow";
            body.style.backgroundColor = "yellow";
        }
    }


}
