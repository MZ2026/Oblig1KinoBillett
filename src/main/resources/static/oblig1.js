const kjopBilletter = [];

function kjopBillett() {
    const film = document.getElementById("valgtFilm").value;
    const antall = document.getElementById("antallB").value;
    const forNavn = document.getElementById("fNavn").value;
    const etterNavn = document.getElementById("eNavn").value;
    const telefoner = parseInt(document.getElementById("tlf").value);
    const epost = document.getElementById("epost").value;

    let gyldigInput = true;

    if (film === '') {
        document.getElementById("feilInput").innerHTML = '';
        return  false;
    }
    document.getElementById("feilInput").innerHTML = '';


    if (isNaN(antall) || antall === '') {
        document.getElementById("feiltall").innerHTML = 'Antall må velges.'.fontcolor("red");
        gyldigInput = false;
    } else {
        document.getElementById("feiltall").innerHTML = '';
    }

    if (forNavn === '') {
        document.getElementById("feilnNavn").innerHTML = 'Må skrive fornavn.'.fontcolor("red");
        gyldigInput = false;
    } else {
        document.getElementById("feilnNavn").innerHTML = "";
    }

    if (etterNavn === '') {
        document.getElementById("feilEtternavn").innerHTML = 'Må skrive etternavn.'.fontcolor("red");
        gyldigInput= false;
    } else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }

    //for validering av telfoner, bruker en enkelt regex pattern på 8 digits(tilsvare norske mobil nummer).

    const gyldigTelegonnr=/^\d{8}$/;
    if (isNaN(telefoner) || telefoner === '' || !gyldigTelegonnr.test(telefoner)) {
        document.getElementById("feilTlf").innerHTML = 'Må skrive gyldig telefonnr.'.fontcolor("red");
        gyldigInput= false;
    } else {
        document.getElementById("feilTlf").innerHTML = "";
    }

    //bruker en regex pattern også for validering epost.
    const gyldigEpost= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (epost === '' || !gyldigEpost.test(epost)) {
        document.getElementById("feilEpost").innerHTML = 'Må skrive gyldig epost.'.fontcolor("red");
        gyldigInput = false;
    } else {
        document.getElementById("feilEpost").innerHTML = "";
    }

    if (!gyldigInput) {
        return;
    }

    // Fjern feilmeldinger når input er gyldig.
    document.getElementById("feilInput").innerHTML = '';
    document.getElementById("feiltall").innerHTML = '';
    document.getElementById("feilnNavn").innerHTML = '';
    document.getElementById("feilEtternavn").innerHTML = '';
    document.getElementById("feilTlf").innerHTML = '';
    document.getElementById("feilEpost").innerHTML = '';

    const billetInfo = {
        film: film,
        antall: antall,
        fornavn: forNavn,
        etternavn: etterNavn,
        telefoner: telefoner,
        epost: epost
    };

    kjopBilletter.push(billetInfo);

    // Printer ut
    let utskrift;
    utskrift = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";

    for (let i of kjopBilletter) {
        utskrift += "<tr><td>" + i.film + "</td><td>" + i.antall +
            "</td><td>" + i.fornavn + "</td><td>" + i.etternavn + "</td><td>" +
            i.telefoner + "</td><td>" + i.epost + "</td></tr>";
    }

    //tommer arrayet
    document.getElementById("utskrift").innerHTML = utskrift;
    document.getElementById("valgtFilm").value = "";
    document.getElementById("antallB").value = "";
    document.getElementById("fNavn").value = "";
    document.getElementById("eNavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
}

function slettBilletter() {
    kjopBilletter.length = 0;
    document.getElementById("utskrift").innerHTML = "";
}