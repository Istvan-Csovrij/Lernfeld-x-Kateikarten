const kartenDaten = [
    {
        title: "Informtionssicherheit",
        textVertical: "Datenschutz regelt die Nutzung personenbezogener Daten, Datensicherheit schützt sie technisch vor Diebstahl, Verlust oder Manipulation.",
        textHorizontal: "Datenschutz: rechtlicher Schutz personenbezogener Daten, Zweckbindung. Datensicherheit: technischer Schutz aller Daten vor Verlust, Diebstahl, Manipulation.",
        ptext: "Technical protection of IT systems It concerns all information on paper or in an employee's head. The goal is to guarantee the protection objectives (confidentiality, integrity, availability) for all information. Confidential documents are kept in a locked cabinet. Office spaces are only accessible with a chip card. IT systems are encrypted and secured. Technical and organizational protection of all information"
    },
    {
        title: "Passwortschutz",
        textVertical: "Passwörter schützen Zugänge zu IT-Systemen. Sie sollten sicher sein und regelmäßig geändert werden.",
        textHorizontal: "Regel: mind. 8 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen.",
        ptext: "Technical protection of IT systems It concerns all information on paper or in an employee's head. The goal is to guarantee the protection objectives (confidentiality, integrity, availability) for all information. Confidential documents are kept in a locked cabinet. Office spaces are only accessible with a chip card. IT systems are encrypted and secured. Technical and organizational protection of all information"
    },
     {
        title: "Passwortschutz",
        textVertical: "Passwörter schützen Zugänge zu IT-Systemen. Sie sollten sicher sein und regelmäßig geändert werden.",
        textHorizontal: "Regel: mind. 8 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen.",
        ptext: "Technical protection of IT systems It concerns all information on paper or in an employee's head. The goal is to guarantee the protection objectives (confidentiality, integrity, availability) for all information. Confidential documents are kept in a locked cabinet. Office spaces are only accessible with a chip card. IT systems are encrypted and secured. Technical and organizational protection of all information"
    },
     {
        title: "Passwortschutz",
        textVertical: "Passwörter schützen Zugänge zu IT-Systemen. Sie sollten sicher sein und regelmäßig geändert werden.",
        textHorizontal: "Regel: mind. 8 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen.",
        ptext: "Technical protection of IT systems It concerns all information on paper or in an employee's head. The goal is to guarantee the protection objectives (confidentiality, integrity, availability) for all information. Confidential documents are kept in a locked cabinet. Office spaces are only accessible with a chip card. IT systems are encrypted and secured. Technical and organizational protection of all information"
    },
     {
        title: "Passwortschutz",
        textVertical: "Passwörter schützen Zugänge zu IT-Systemen. Sie sollten sicher sein und regelmäßig geändert werden.",
        textHorizontal: "Regel: mind. 8 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen.",
        ptext: "Technical protection of IT systems It concerns all information on paper or in an employee's head. The goal is to guarantee the protection objectives (confidentiality, integrity, availability) for all information. Confidential documents are kept in a locked cabinet. Office spaces are only accessible with a chip card. IT systems are encrypted and secured. Technical and organizational protection of all information"
    }
];

quadraten = [];


function init() {
    render();
}

function render() {
    let contentID = document.getElementById("renderContainerId");
    contentID.innerHTML = '';

    kartenDaten.forEach((karte, index) => {   // <--- index hinzugefügt
        contentID.innerHTML += `
          <div class="kartenClass">
            <div class="headContents">
               <div class="backClass" onclick="toggleDeckblatt(${index})">Close</div>
               <div class="titleClass">${karte.title}</div>
               
            </div>

            <div class="textsContainer">
                 <div class="ptexClass">${karte.ptext}</div>
                 <div class="linealvertikal"></div>

                 <div class="deckblatClass " id="deckblatt-${index}"></div>

                 <div class="textverticalClass">${karte.textVertical}</div>
            </div>

            <div class="linealHorizontal"></div>
            <div class="textMinimalBelow">${karte.textHorizontal}</div>
          </div>
        `;
    });
}



function toggleDeckblatt(index) {
    const deckblatt = document.getElementById("deckblatt-" + index);
    deckblatt.classList.toggle("hide");
}

