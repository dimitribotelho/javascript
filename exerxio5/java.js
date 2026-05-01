var num = document.getElementById("txt1")
var lista = document.getElementById("sele")
var res = document.getElementById("res")
var valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isnumero(num.value) && !inlista(num.value , valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = "o valor " + num.value + " adicionado" 
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        if (Number(num.value) > 100) {
            alert("O número não pode ser maior que 100!")
        } else if (inlista(num.value, valores)) {
            alert("Esse número já está na lista")
        } else {
            alert("Digite um número válido entre 1 e 100!")
        }
    }

    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("adicione os valores antes de finalizar")
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot 

        res.innerHTML = ""
        res.innerHTML += "ao todo temos " + tot + " numeros cadastrados<br>"
        res.innerHTML += "o maior valor informado foi " + maior + "<br>"
        res.innerHTML += "o menor valor informado foi " + menor + "<br>"
        res.innerHTML += "somando todos os valores temos " + soma + "<br>"
        res.innerHTML += "a media dos valores digitados foi " + media
    }
}