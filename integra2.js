var nom=prompt("Ingrese su nombre");
document.write(" Hola " ,  nom);
var preg1=prompt("¿Como se llama el 1er dia de la primavera?\nA:Primer dia de primavera\nB:Equinoccio de primavera\nC:Equinoccio de invierno");
if (preg1=="B"){
   (preg1=25)
}
else{
     preg1=0
}
document.write(" Tienes " , preg1);

var preg2=prompt("¿Que sucede en el Polo Norte cuando llega la primavera?\nA:6 meses de luz\nB:6 meses de oscuridad\nC:6 meses de alternancia");
if (preg2=="A"){
   (preg2=25)
}
else{
     preg2=0
}
var total=preg1+preg2

 if (total>=50){
    document.write(nom," sabes de primavera ");
 }
else{
    document.write(nom," Te falta ")
}