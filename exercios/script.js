function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");

    var data = new Date();
    var horas = data.getHours();

    msg.innerHTML = "Agora são " + horas + " horas";

    if (horas >= 0 && horas < 12) {
        img.src = "Café e pôr do sol.jpg";
    } else if (horas >= 12 && horas < 18) {
        img.src = "Atardecer 🌅❤️.jpg";
    } else {
        img.src = "baixados.jpg";
    }
}
