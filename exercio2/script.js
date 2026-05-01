function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");

    var ano = Number(fano.value);

    if (ano == 0 || ano > anoAtual || ano < 1900) {
        alert("Erro! Verifique os dados e tente novamente.");
        return;
    }

    var idade = anoAtual - ano;
    var fsex = document.getElementsByName("radsex");
    var genero = "";

    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
        genero = "Homem";

        if (idade < 10) {
            img.src = "bebe-m.jpg";
        } else if (idade < 21) {
            img.src = "jovem-m.jpg";
        } else if (idade < 50) {
            img.src = "adulto-m.jpg";
        } else {
            img.src = "velho-m.jpg";
        }

    } else {
        genero = "Mulher";

        if (idade < 10) {
            img.src = "bebe-f.jpg";
        } else if (idade < 21) {
            img.src = "jovem-f.jpg";
        } else if (idade < 50) {
            img.src = "adulta-f.jpg";
        } else {
            img.src = "velha-f.jpg";
        }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.style.textAlign = "center";
    res.appendChild(img);
}
