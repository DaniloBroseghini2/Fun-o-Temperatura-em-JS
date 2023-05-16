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
  
    document.getElementById("resultado").innerHTML = resultado.toFixed(2);
  }
  