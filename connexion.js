function login() {
    let username = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;

    if (username.trim() == '' || password.trim() == '') {
        alert(`Vous devez entrez un mot de passe et un nom d'utilisateur `);
        return;
    }

    if (username.trim() == 'admin' && password.trim() == 'admin') {
        window.location.replace("accueil.html");
    }

    else {
        alert(`Nom d'utilisateur ou mot passe invalide.`);
        return;
    }
}