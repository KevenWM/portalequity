setTimeout(function loading() {

    if (localStorage.getItem('token') == null) {

        alert('Você precisa estar logado para acessar essa página, se você já logou e não consegue acessar, recomendo acessar via Google Chrome.')

        window.location.href = 'login.html'

    }

    $('#box-load').fadeOut();
    $('#box-load').delay(1000).fadeOut('slow');
    document.getElementById("box-load").style.display = "none"
    document.getElementById("load-page").style.display = "block"
    document.getElementById("rodape").style.display = "flex"
}, 1000)