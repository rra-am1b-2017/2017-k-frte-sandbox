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

// JS-code voor section Arrays (#js03)
// **********************************************************************
var fruit = ["banaan", "sinaasappel", "meloen", "peer"];

function show_array() {
  // alert("Hoi");  
  console.log(fruit);
  var p_tag = document.getElementById("outputArray");
  // console.log(p_tag.outerHTML);
  p_tag.innerHTML = "De inhoud van mijn fruit-array is: " + fruit;
}

function fruit_toevoegen() {
  // alert("Hoi");
  var nieuw_fruit = document.getElementById("fruitToevoegen").value;
  //alert(nieuw_fruit);
  fruit.push(nieuw_fruit);
  console.log(fruit);
  var output_fruit_toevoegen = document.getElementById("output_fruit_toevoegen");
  output_fruit_toevoegen.innerHTML = fruit;
}



// Einde section output (#js03)
// *************************************************************************