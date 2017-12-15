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

function array_ordered_list() {
  var output = "<ol>";
  for ( var i = 0; i < fruit.length; i++) {
    output += "<li>" + fruit[i] + "</li>";
  }
  output += "</ol>";
  return output;
}

// https://www.w3schools.com/js/js_array_methods.asp

function show_array() {
  // alert("Hoi");  
  console.log(fruit);
  var p_tag = document.getElementById("outputArray");
  // console.log(p_tag.outerHTML);
  p_tag.innerHTML = "De inhoud van mijn fruit-array is: " + array_ordered_list();
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

var dbl_button = document.getElementById("dbl_button");
dbl_button.innerHTML = array_ordered_list();

function add_array_bottom() {
  var input_dbl_button = document.getElementById("input_dbl_button");
  fruit.push(input_dbl_button.value);
  dbl_button.innerHTML = array_ordered_list();
  input_dbl_button.value = "";
}

// Einde section output (#js03)
// *************************************************************************