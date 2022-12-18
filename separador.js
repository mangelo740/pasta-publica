var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha", "Cajá"];
var busca = "Cajá";

var contador = 0;

for (var i of listaDeFrutas) {  
    if (i == busca) {   
        contador += 1;
    }  
}

console.log(contador)
