setTimeout(function compload() {

    if (localStorage.getItem('user') == "acesso3a") {

        /*document.getElementById("logovnt").style.display = "block"*/


        let nav = document.querySelector('.menu2')
        let logo = document.querySelector('.logo')

        nav.innerHTML = `
        <ul>
        <li><a href="../index.html">Dynamic</a></li>
        <li><a href="../empresas.html">Empresas</a></li>
        <li><a href="../selecao3a.html">Seleção 3A</a></li>
        <li><a href="../arquivos.html">Arquivos</a></li>
        <li><a Onclick='sairlogin()' href="./login.html">Sair</a></li>
   </ul>
   `
        logo.innerHTML = `   <img src="../img/Logo3a.webp" alt="Logo" width="140" height="55" />`

    }

    document.getElementsByClassName("logo")[0].style.display = "block"
    document.getElementsByClassName("menu2")[0].style.display = "block"
    document.getElementById("rodape").style.display = "flex"

}, 1000)