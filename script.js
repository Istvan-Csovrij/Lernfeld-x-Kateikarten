const kartenDaten = [
    {
        title: "CPS",
        textVertical: "CPS (Cyber-Physical Systems) verbinden physische Prozesse mit digitalen Systemen, z. B. durch Sensoren, Aktoren und Software. Sie ermöglichen Echtzeitsteuerung und erfordern hohe Sicherheit.",
        textHorizontal: "CPS: Verbindung von realen Prozessen und digitalen Systemen, Echtzeitsteuerung, Sicherheit wichtig.",
        ptext: "Cyber-Physical Systems (CPS) integrieren physische Prozesse mit digitalen Komponenten. Sie nutzen Sensoren, Aktoren und Software, um Systeme in Echtzeit zu überwachen und zu steuern. Beispiele sind autonome Fahrzeuge, industrielle Automatisierung und Smart Grids. Sicherheit, Zuverlässigkeit und Datenschutz sind besonders wichtig, da Fehler oder Cyberangriffe direkte Auswirkungen auf die reale Welt haben können."
    },
    {
        title: "CPPC",
        textVertical: "CPPC (Cyber-Physical Production Systems) sind spezielle CPS für die Fertigung. Sie vernetzen Maschinen, Sensoren und Software, um Produktionsprozesse flexibel und effizient zu steuern.",
        textHorizontal: "CPPC: Vernetzte Produktionssysteme, flexible Steuerung, Effizienzsteigerung.",
        ptext: "Cyber-Physical Production Systems (CPPC) sind Cyber-Physical Systems, die speziell für die Produktion entwickelt wurden. Sie verbinden Maschinen, Sensoren und Software, um Produktionsprozesse in Echtzeit zu überwachen und anzupassen. Ziel ist eine flexible, effiziente und sichere Fertigung. Sicherheits- und Zuverlässigkeitsaspekte sind entscheidend, da Störungen direkte Auswirkungen auf die Produktion haben können."
    },
    {
        title: "IoT",
        textVertical: "IoT (Internet of Things) verbindet Geräte über das Internet. Sensoren erfassen Daten, Geräte kommunizieren automatisch und ermöglichen intelligente Anwendungen.",
        textHorizontal: "IoT: Vernetzte Geräte, automatische Datenübertragung, smarte Anwendungen.",
        ptext: "Das Internet of Things (IoT) beschreibt die Vernetzung physischer Geräte über das Internet. Sensoren sammeln Daten, die über Netzwerke an andere Geräte oder Cloud-Systeme gesendet werden. Dadurch können Prozesse automatisiert werden, z. B. in Smart Homes, Wearables, Logistik oder Industrieanlagen. IoT-Systeme müssen zuverlässig, sicher und energieeffizient sein, da sie oft autonom arbeiten und große Datenmengen verarbeiten."
    },
    {
        title: "IIoT",
        textVertical: "IIoT (Industrial Internet of Things) vernetzt Maschinen und Anlagen in der Industrie. Es ermöglicht Automatisierung, Datenanalyse und effiziente Produktionsprozesse.",
        textHorizontal: "IIoT: Vernetzte Industrieanlagen, Automatisierung, datenbasierte Optimierung.",
        ptext: "Das Industrial Internet of Things (IIoT) bezeichnet die Anwendung von IoT-Technologien in industriellen Umgebungen. Sensoren und Maschinen senden kontinuierlich Daten, die zur Überwachung, Steuerung und Optimierung von Produktionsprozessen genutzt werden. Dadurch entstehen effizientere Abläufe, vorausschauende Wartung (Predictive Maintenance) und höhere Produktqualität. Sicherheit und robuste Netzwerke sind besonders wichtig, da die Systeme oft in kritischen und komplexen Produktionsumgebungen eingesetzt werden."
    },
    {
        title: "Smart Factory",
        textVertical: "Smart Factory nutzt vernetzte Systeme, Sensoren und KI, um Produktionsprozesse selbstständig zu steuern und zu optimieren.",
        textHorizontal: "Smart Factory: Intelligente, vernetzte und selbstoptimierende Produktion.",
        ptext: "Eine Smart Factory ist eine hochdigitalisierte und vernetzte Fabrik, in der Maschinen, Anlagen und IT-Systeme miteinander kommunizieren. Durch Sensoren, Datenanalyse, Automatisierung und künstliche Intelligenz können Produktionsprozesse in Echtzeit überwacht, angepasst und optimiert werden. Die Smart Factory ermöglicht flexible Fertigung, geringere Ausfallzeiten und eine effiziente Nutzung von Ressourcen. Sie ist ein zentraler Baustein von Industrie 4.0."
    },
    {
        title: "Smart Home",
        textVertical: "Smart Home vernetzt Geräte im Haushalt zur Automatisierung, Steuerung und Optimierung von Komfort, Energie und Sicherheit.",
        textHorizontal: "Smart Home: Vernetzter, automatisierter Haushalt für Komfort, Energieeffizienz und Sicherheit.",
        ptext: "Ein Smart Home umfasst vernetzte Geräte und Systeme wie Beleuchtung, Heizung, Sicherheitstechnik und Haushaltsgeräte, die automatisiert oder per Smartphone, Sprachassistent und Sensoren gesteuert werden können. Ziel ist es, den Wohnkomfort zu erhöhen, Energie zu sparen und die Sicherheit zu verbessern. Intelligente Routinen ermöglichen z. B. automatisches Licht, effiziente Heizungssteuerung oder Überwachung des Hauses in Echtzeit."
    },
    {
        title: "Predictive Maintenance",
        textVertical: "Predictive Maintenance nutzt Sensordaten und Algorithmen, um den Zustand von Maschinen vorherzusagen und Ausfälle zu verhindern.",
        textHorizontal: "Vorausschauende Wartung durch Datenauswertung: frühzeitig erkennen, wann eine Maschine gewartet werden muss.",
        ptext: "Predictive Maintenance bezeichnet die vorausschauende Wartung von Maschinen auf Basis von Sensordaten, Analysen und KI. Statt feste Wartungsintervalle zu nutzen, überwacht das System den Zustand in Echtzeit und erkennt frühzeitig Anzeichen für mögliche Ausfälle. Das reduziert ungeplante Stillstände, senkt Kosten und erhöht die Lebensdauer von Anlagen. Typische Datenquellen sind Vibrationen, Temperatur, Betriebsstunden oder Stromverbrauch."
    },
    {
        title: "ERP",
        textVertical: "ERP-Systeme verknüpfen zentrale Geschäftsprozesse wie Einkauf, Lager, Produktion, Vertrieb und Finanzen in einer gemeinsamen Software.",
        textHorizontal: "ERP: integrierte Unternehmenssoftware, die Daten und Prozesse zentral verwaltet und automatisiert.",
        ptext: "Ein ERP-System (Enterprise Resource Planning) ist eine integrierte Softwarelösung, die alle wichtigen Geschäftsbereiche eines Unternehmens verbindet. Dadurch werden Abläufe automatisiert, Daten zentral gespeichert und Entscheidungen verbessert. Typische Module sind Materialwirtschaft, Produktion, Personalwesen, Buchhaltung und Vertrieb. ERP-Systeme erhöhen Effizienz, Transparenz und ermöglichen reibungslose, durchgängige Prozesse im Unternehmen."
    },
    {
        title: "Einfluss auf CPS",
        textVertical: "Vernetzung, Datenmengen, Sensorik und KI beeinflussen CPS stark und ermöglichen präzisere, vernetzte Echtzeitsysteme.",
        textHorizontal: "Einflussfaktoren: Digitalisierung, IoT, KI, Automatisierung – sie machen CPS effizienter, schneller und intelligenter.",
        ptext: "Cyber-Physical Systems werden durch moderne Technologien wie IoT, künstliche Intelligenz, Cloud, Big Data und High-Speed-Netzwerke stark beeinflusst. Diese Technologien verbessern die Echtzeitfähigkeit, erhöhen die Datenqualität und ermöglichen autonome Entscheidungen. Gleichzeitig entstehen neue Herausforderungen wie Cybersecurity, Datenschutz und erhöhte Komplexität der Systeme."
    },
    {
        title: "MES",
        textVertical: "MES steuert, überwacht und optimiert Produktionsprozesse in Echtzeit zwischen ERP und Maschinenebene.",
        textHorizontal: "MES: verbindet ERP mit der Fertigung, liefert Echtzeitdaten, erhöht Transparenz und Effizienz.",
        ptext: "Ein Manufacturing Execution System (MES) ist eine Software, die Produktionsprozesse in Echtzeit überwacht und steuert. Es bildet die Ebene zwischen ERP und der Maschinensteuerung. MES sammelt Daten aus der Fertigung, verfolgt Aufträge, misst Qualität, überwacht Maschinenzustände und optimiert Abläufe. Ziel ist eine transparente, effiziente und fehlerarme Produktion."
    },
    {
        title: "MES: Rolle im CPS-Kontext",
        textVertical: "MES fungiert als Bindeglied zwischen Unternehmensplanung (ERP) und physischer Produktion (CPS), um Datenfluss und Steuerung vertikal zu integrieren.",
        textHorizontal: "Kernaufgaben: Auftragsmanagement, Qualitätsdatenerfassung und Prozessüberwachung – MES orchestriert die Zusammenarbeit verschiedener CPS.",
        ptext: "Das Manufacturing Execution System (MES) dient als zentrale Informationsdrehscheibe für Cyber-Physical Systems. Es übersetzt abstrakte Planungsdaten in konkrete Arbeitsanweisungen für die CPS und verarbeitet deren Rückmeldungen in Echtzeit. Durch diese Symbiose ermöglicht das MES eine dynamische Produktionssteuerung, lückenlose Rückverfolgbarkeit (Traceability) und verhindert, dass CPS als isolierte Inseln agieren, indem es sie in den Gesamtprozess einbindet."
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
            <div class="titleClass">${karte.title}</div>
              <div class = "buttons">
                  <div class="backClass" onclick="toggleDeckblatt(${index})">Erklärung</div>
                  <div class = "backClass2" onclick = "toggledeckblatt2(${index})">Kurz</div>
                  <div class = "backClass3" onclick = "toggledeckblatt3(${index})">Pr-Satz</div>
               </div>
            </div>

            <div class="textsContainer">
                 <div class="ptexClass">${karte.ptext}</div>
                 <div class="linealvertikal"></div>

                 <div class="deckblatClass " id="deckblatt${index}"></div>
                 <div class = "deckblattSmaller" id = "deckblattKleinerID${index}"></div>
                 <div class = "deckblattSmallest" id = "deckblattSmallestId${index}"></div>

                 <div class="textverticalClass">${karte.textVertical}</div>
            </div>

            <div class="linealHorizontal"></div>
            <div class="textMinimalBelow">${karte.textHorizontal}</div>
          </div>
        `;
    });
}

function toggleDeckblatt(index) {
    const deckblatt = document.getElementById("deckblatt" + index);
    deckblatt.classList.toggle("hide");
}

function toggledeckblatt2(index) {
    const deckblatt2 = document.getElementById("deckblattKleinerID" + index);
    deckblatt2.classList.toggle("hide");
}

function toggledeckblatt3(index) {
    const deckblatt3 = document.getElementById("deckblattSmallestId" + index);
    deckblatt3.classList.toggle("hide")
}

