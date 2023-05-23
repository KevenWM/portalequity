
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)

    token_name = data.name
    token_email = data.email
    token = data.sub


    localStorage.setItem('token', token)

    document.getElementById("userLabel").style.color = "green"
    document.getElementById("senhaLabel").style.color = "green"
    document.getElementById("usuario").style.borderColor = "green"
    document.getElementById("senha").style.borderColor = "green"
    document.getElementById("msgError").style.display = "none"
    document.getElementById("msgAcerto").style.display = "block"
    msgAcerto.innerHTML = 'Validando acesso ...'

    setTimeout(() => {


        window.location.href = "https://kevenwm.github.io/Portal--RF/index.html"

    }, 2000)

}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "130374127971-rnsf3honfs28i146edp8mf2vgq1d2cqq.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
            theme: "filled_black",
            size: "large",
            type: "standard",
            shape: "pill",
            text: "continue_with",
            logo_alignment: "left"
        }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}
