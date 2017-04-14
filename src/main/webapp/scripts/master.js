//alert("Carregando script num arquivo externo.");

function calcular() {
    var sex = document.formulario.sex.value;
    var weight = document.formulario.weight.value;
    var height = document.formulario.height.value;

    var imc = weight / (height * height);

    if (sex == 'Male') {
        if (imc < 20) {
            alert("Abaixo do peso!");
        } else if (imc < 26.4) {
            alert("Peso ideal, good job");
        } else {
            alert("Acima do peso!");
        }
    } else {
      if (imc < 19.1) {
          alert("Abaixo do peso!");
      } else if (imc < 25.8) {
          alert("Peso ideal, nice");
      } else {
          alert("Acima do peso!");
      }
    }
}
