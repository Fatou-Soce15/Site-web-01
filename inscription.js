let form = document.getElementById("formulaire");

form.addEventListener("submit", function (e) {
    let myinput = document.getElementById("inputPassword5");
    let myinput2 = document.getElementById("jour");
    let myinput3 = document.getElementById("mois");
    let myinput4 = document.getElementById("one");
    let myinput5 = document.getElementById("inlineRadio1");
    let myinput6 = document.getElementById("inlineRadio2");
    let myinput7 = document.getElementById("inlineRadio3");
    let myinput8 = document.getElementById("inlineRadio4");

    if (myinput.value.trim() == "") {

        e.preventDefault();
    }
    else if (myinput2.value.trim() == "") {
        e.preventDefault();

    }
    else if (myinput3.value.trim() == "") {
        e.preventDefault();
    }

    else if (myinput4.value.trim() == "") {
        e.preventDefault();

    }

    else if (myinput5.value.trim() == "") {
        e.preventDefault();

    }
    else if (myinput6.value.trim() == "") {
        e.preventDefault();


    }
    else if (myinput7.value.trim() == "") {
        e.preventDefault();


    }
    else if (myinput8.value.trim() == "") {
        e.preventDefault();



    }
});