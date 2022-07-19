/*const { color } = require("highcharts")*/

function entrar() {

    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#UserLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let msgAcerto = document.querySelector('#msgAcerto')

    let listaUser = ['venetoasset', 'comercial123']

    if (usuario.value == 'venetoasset' && senha.value == 'comercial123') {

        let token = Math.random().toString(16).substring(2)

        localStorage.setItem('token', token)

        document.getElementById("userLabel").style.color = "green"
        document.getElementById("senhaLabel").style.color = "green"
        document.getElementById("usuario").style.borderColor = "green"
        document.getElementById("senha").style.borderColor = "green"
        document.getElementById("msgError").style.display = "none"
        document.getElementById("msgAcerto").style.display = "block"
        msgAcerto.innerHTML = 'Validando acesso ...'


        setTimeout(() => {

            window.location.href = "index.html"

        }, 2000)



    } else {

        document.getElementById("userLabel").style.color = "red"
        document.getElementById("senhaLabel").style.color = "red"
        document.getElementById("usuario").style.borderColor = "red"
        document.getElementById("senha").style.borderColor = "red"
        document.getElementById("msgError").style.display = "block"
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()


    }

}