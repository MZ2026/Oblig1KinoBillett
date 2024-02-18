


const kjopBilletter = [];  // Array for å sette inn kjøpte billetter.

function kjopBillett() {       // Funksjon for å kjøpe billett.
    const film = document.getElementById("valgtFilm").value;
    const antall = document.getElementById("antallB").value;
    const forNavn = document.getElementById("fNavn").value;
    const etterNavn = document.getElementById("eNavn").value;
    const telefoner = parseInt(document.getElementById("tlf").value);
    const epost = document.getElementById("epost").value;

    let gyldigInput = true;
    //validerer film.
    if (film === '') {
        document.getElementById("feilInput").innerHTML = '';
        return  false;
    }
    document.getElementById("feilInput").innerHTML = '';


    //validerer antall
    if (isNaN(antall) || antall === '') {
        document.getElementById("feiltall").innerHTML = 'Antall må velges.'.fontcolor("red");
        gyldigInput = false;
    } else {
        document.getElementById("feiltall").innerHTML = '';
    }

    //validerer fornavn.
    if (forNavn === '') {
        document.getElementById("feilnNavn").innerHTML = 'Må skrive fornavn.'.fontcolor("red");
        gyldigInput = false;
    } else {
        document.getElementById("feilnNavn").innerHTML = "";
    }

    //validerer etternavn.
    if (etterNavn === '') {
        document.getElementById("feilEtternavn").innerHTML = 'Må skrive etternavn.'.fontcolor("red");
        gyldigInput= false;
    } else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }

    //for validering av telfoner, bruker en enkelt regex pattern på 8 digits(tilsvarer norske mobil nummer).

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

    //funksjonen avbryttes hvis input er ikke gyldig.
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

    //lagrer info om billetter.
    const billetInfo = {
        film: film,
        antall: antall,
        fornavn: forNavn,
        etternavn: etterNavn,
        telefoner: telefoner,
        epost: epost
    };

    //setter billet info i arrayet.
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

    //skriver ut alle info om billetten i en tabel på skjermen.
    document.getElementById("utskrift").innerHTML = utskrift;

    //nullstiller input felter.
    document.getElementById("valgtFilm").value = "";
    document.getElementById("antallB").value = "";
    document.getElementById("fNavn").value = "";
    document.getElementById("eNavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
}

//slette billetter
function slettBilletter() {
    kjopBilletter.length = 0;
    document.getElementById("utskrift").innerHTML = "";
}