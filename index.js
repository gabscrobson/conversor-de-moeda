function Converter() {
  var element = document.getElementById("dolar");
  var value = parseFloat(element.value);
  console.log(value);
  var rvalue = parseFloat(value * 5).toFixed(2);
  

  var elementohtml = document.getElementById("valorConvertido");
  var texto = "U$ " + rvalue;
  elementohtml.innerHTML = texto;
}
function Converter2() {
  var element2 = document.getElementById("dolar");
  var value2 = parseFloat(element2.value);
  var rvalue2 = parseFloat(value2 * 0.16).toFixed(2);
  var elementohtml2 = document.getElementById("valorConvertido");
  var texto2 = "€ " + rvalue2;
  elementohtml2.innerHTML = texto2;

}
function Converter3() {
  var element3 = document.getElementById("dolar");
  var value3 = parseFloat(element3.value);
  var rvalue3 = parseFloat(value3 * 0.0000041);
  var elementohtml3 = document.getElementById("valorConvertido");
  var texto3 = "BTC " + rvalue3;
  elementohtml3.innerHTML = texto3;




}