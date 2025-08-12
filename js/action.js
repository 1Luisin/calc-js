document.getElementById("Form").addEventListener("submit", function (event) {
event.preventDefault();
  const InputValue = document.getElementById("valor");
  const InputDate = document.getElementById("time");
  const InputBottom = document.getElementById("bottom");

  const Valor = InputValue.value;
  const Tempo = InputDate.value;
  const Botao = InputBottom.value;

  var Resultado = Valor * Tempo;
  document.getElementById("resultado").textContent = "A quantia que você juntará será de: R$" + Resultado;

  
});
