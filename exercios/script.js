function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    //var data= new Date//
    var horas= 17
    msg.innerHTML= "agora sao "+ horas + " horas"
    if(horas>= 0 && horas<12) {
     img.scr= window.document.getElementById("img")
    } else if (horas>=12 && horas<18) {
     img="baixados.png"
    }



}
