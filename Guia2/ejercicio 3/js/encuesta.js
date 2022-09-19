var voto;
var opcion=true;
var cont1=cont2=cont3=0;
var total;
var per1, per2, per3;

document.write("<h1 align='center'>Encuesta para determinar cuántas personas están a favor de la portabilidad numérica de teléfonos celulares.</h1><hr>");
document.write("<b>Digite \"1\" si esta a favor</b><br>");
document.write("<b>Digite \"2\" si esta en contra</b><br>");
document.write("<b>Digite \"3\" si se abstiene de opinar</b><hr>");

while(opcion==true){
voto = parseInt(prompt('¿Cuál es su voto?',''));
switch (voto){
case 1:
cont1++;
break;
case 2:
cont2++;
break;
case 3:
cont3++;
break;
default:
alert('¡Voto no válido!');
}

opcion = confirm('¿Desea continuar s/n?');
}

total = cont1 + cont2 + cont3;

per1 = Math.round((cont1/total) * Math.pow(10,2))/Math.pow(10,2);

per2 = Math.round((cont2/total) * Math.pow(10,2))/Math.pow(10,2);
per3 = Math.round((cont3/total) * Math.pow(10,2))/Math.pow(10,2);

with(document){
write("<table class=\"zui-table zui-table-rounded\">");
write("<thead>");
write("<tr><th>Resultado de los votos</th>");
write("<th>Votos obtenidos</th>");
write("<th>Porcentaje</th></tr>");
write("</thead>");
write("<tbody>");
write("<tr><td>Votos a favor </td><td class=\"number\">" + cont1 + "</td>");
write("<td class=\"number\">" + per1*100 + " %</td></tr>");
write("<tr><td>Votos en contra </td><td class=\"number\">" + cont2 + "</td>");
write("<td class=\"number\">" + per2*100 + " %</td></tr>");
write("<tr><td>Se abstienen de opinar </td><td class=\"number\">" + cont3 + "</td>");
write("<td class=\"number\">" + per3*100 + " %</td></tr>");
write("</tbody>");
write("<tfoot>");
write("<tr><th>Totales</th>");
write("<th class=\"number\">" + parseInt(cont1+cont2+cont3) +"</th>");
write("<th class=\"number\">" + (parseFloat(per1+per2+per3))*100 + "%</th>");
write("</tfoot>");
write("</table>");
}
