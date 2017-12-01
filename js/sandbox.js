// JS-code voor section output (#js01)
//*******************************************************************
function mijn_alert() {
  alert('Deze alert komt vanuit een functie');
  alert('Hoi');
}

function niet_klikken() {
  document.write('Wanneer je document.write gebruikt nadat de pagina is geladen, wordt je bestaande pagina overschreven. Niet doen dus');
}

function printName() {
  var inputTag = document.getElementById("inputTekst");
  //alert("U heeft het volgende ingevuld: " + $inputTag.value);

  var outputPara = document.getElementById("outputParagraph");
  outputPara.innerHTML = "Mijn naam is: " + inputTag.value;
}   
// Einde section output (#js01)
//**********************************************************************    