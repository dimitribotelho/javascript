var a = new Date()
var dia = a.getDay()
switch (dia) {
 case 0 :
    console.log("domingo")
    break
 case 1:
    console.log("segunda")
    break
 case 2:
    console.log("terça-feira")
    break
 case 3:
    console.log("quarta-feira")
    break
 case 4:
    console.log("quinta-feira")
    break
 case 5:
    console.log("sexta-feira")
    break
 case 6:
    console.log("sabado") 
    break
 default:
    console.log(" dia invalido")
 break          
}