const kartenDaten = [
    {
        title: "Informtionssicherheit",
        deckblattText: "Deckblatt Infosicherheit",
        textVertical: "Datenschutz schützt personenbezogene Daten rechtlich und regelt, wer welche Daten zu welchem Zweck verwenden darf. Datensicherheit sorgt dafür, dass alle Daten technisch geschützt sind – z. B. vor Diebstahl, Verlust oder Manipulation.",
        textHorizontal: "Datenschutz: rechtlicher Schutz personenbezogener Daten, Zweckbindung. Datensicherheit: technischer Schutz aller Daten vor Verlust, Diebstahl, Manipulation.",
        ptext: "Technical protection of IT systems It concerns all information on paper or in an employee's head. The goal is to guarantee the protection objectives (confidentiality, integrity, availability) for all information. Confidential documents are kept in a locked cabinet. Office spaces are only accessible with a chip card. IT systems are encrypted and secured. Technical and organizational protection of all information"
    },
    {
        title: "Passwortschutz",
        deckblattText: "Deckblatt Passwortschutz",
        textVertical: "Passwörter schützen Zugänge zu IT-Systemen. Sie sollten sicher sein und regelmäßig geändert werden.",
        textHorizontal: "Regel: mind. 8 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen."
    }
];

quadraten = [];


function init() {
    render();
}



function render() {
    let contentID = document.getElementById("renderContainerId");
    contentID.innerHTML = '';

    kartenDaten.forEach((karte) => {
        contentID.innerHTML += `
            <div class="kartenClass">
                 <div class = "titleClass">${karte.title}</div>
                 <div class = "titleClass">${karte.ptext}</div>
                 <div class = "deckblatClass">${karte.deckblattText}</div>
                 <div class = "textverticalClass">${karte.textVertical}</div>
                 <div class = "textvertikalClass">${karte.textHorizontal}</div>
            </div>
        `;
    });
}















function toggleDeckblatt() {
    const deckblatt = document.getElementById("id-deckblatt");
    deckblatt.classList.toggle("hidden");
}

function toggleDeckblatt1() {
    const deckblatt1 = document.getElementById("id-deckblatt1");
    deckblatt1.classList.toggle("hidden");
}

