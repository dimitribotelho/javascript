function contar() {
    var ini = document.getElementById("txt1")
    var fim = document.getElementById("txt2")
    var pas = document.getElementById("txt3")
    var res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert("Tem algum erro")
        res.innerHTML = "Impossível contar"
    } else {
        res.innerHTML = "Contando... <br>"

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0) {
            window.alert("Seu passo está errado, considerando passo 1")
            p = 1
        }

        // Contagem crescente
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }
        } 
        // Contagem regressiva
        else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }

        res.innerHTML += `🏁`
    }
}
