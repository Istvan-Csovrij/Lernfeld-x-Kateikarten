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
    },
    {
        title: "CPS-Pyramide: Einfluss auf ERP",
        textVertical: "Die CPS-Pyramide zeigt die Verbindung von ERP, MES und physischen Systemen. ERP liefert Planungsdaten, MES steuert die CPS und sorgt für Rückmeldung.",
        textHorizontal: "CPS-Pyramide: ERP → MES → CPS, Datenfluss vertikal, Rückmeldungen für Planung und Steuerung.",
        ptext: "Die CPS-Pyramide beschreibt die vertikale Integration von Unternehmensplanung (ERP), Fertigungssteuerung (MES) und realen Produktionssystemen (CPS). ERP stellt die strategischen Planungsdaten bereit, MES übersetzt sie in konkrete Arbeitsaufträge und CPS führen die Aktionen physisch aus. Rückmeldungen der CPS fließen zurück, sodass ERP die Planung dynamisch anpassen kann. So werden isolierte Systeme vermieden und der gesamte Produktionsprozess effizient gesteuert."
    },
    {
        title: "ERP-Ebene",
        textVertical: "Die ERP-Ebene steuert strategisch Aufträge, Material und Kapazitäten und sorgt für die übergeordnete Koordination aller Geschäftsprozesse. Sie liefert zudem die Vorgaben für die Produktionssteuerung.",
        textHorizontal: "ERP: Planung, Ressourcenmanagement, Auftragssteuerung, liefert Vorgaben an MES und sichert die Produktionskontinuität.",
        ptext: "ERP bildet die oberste Ebene der CPS-Pyramide. Sie plant Aufträge, steuert Material und Kapazitäten und liefert Vorgaben an MES und CPS. Ergebnisse der Produktion fließen zurück, sodass Planung und Ressourcen effizient angepasst werden können. ERP sorgt so für eine stabile und koordinierte Fertigung, in der alle Ebenen optimal zusammenarbeiten. Zusätzlich ermöglicht ERP die Analyse von Produktionskennzahlen und unterstützt Managemententscheidungen durch transparente Informationen."
    },

    {
        title: "MES / SCADA-Ebene",
        textVertical: "MES übersetzt ERP-Planung in konkrete Produktionsaufträge, SCADA überwacht Prozesse und sorgt für Echtzeit-Transparenz. Diese Ebene ist zentral für die Produktionskontrolle.",
        textHorizontal: "MES/SCADA: Auftragsausführung, Prozesskontrolle, Qualitätsüberwachung.",
        ptext: "Die MES/SCADA-Ebene verbindet die strategische Planung des ERP mit der praktischen Umsetzung in der Produktion. MES verteilt konkrete Arbeitsaufträge an Maschinen und Produktionslinien, während SCADA den Zustand der Anlagen überwacht, Prozesse dokumentiert und Qualitätsdaten sammelt. Diese Ebene sorgt für Echtzeit-Transparenz und ermöglicht schnelle Reaktionen auf Störungen, wodurch die Produktion effizient und zuverlässig gesteuert wird."
    },

    {
        title: "Steuerungsebene",
        textVertical: "Steuerungssysteme setzen MES-Aufträge direkt in Maschinenaktionen um und überwachen deren korrekte Ausführung. Sie bilden die Schnittstelle zwischen MES und Feldebene.",
        textHorizontal: "Steuerung: SPS, Controller, Roboter steuern Produktion und liefern Status.",
        ptext: "Die Steuerungsebene wandelt MES-Aufträge in konkrete Maschinenbefehle um. SPSen, industrielle Controller und Roboter übernehmen die direkte Steuerung von Produktionsanlagen, überwachen den Betriebszustand und melden Statusinformationen zurück. Durch diese Ebene wird gewährleistet, dass die Produktion präzise, sicher und effizient abläuft und dass Daten für MES und ERP bereitgestellt werden."
    },

    {
        title: "Feldebene",
        textVertical: "Sensoren und Aktoren erfassen und steuern die physische Produktion, liefern Daten in Echtzeit nach oben. Sie sind die Basis aller Automatisierungsprozesse.",
        textHorizontal: "Feldebene: Sensoren messen, Aktoren handeln, Daten gehen nach oben.",
        ptext: "Die Feldebene stellt die physische Basis der CPS-Pyramide dar. Sensoren erfassen Parameter wie Temperatur, Druck, Position oder Geschwindigkeit, während Aktoren mechanische oder elektrische Aktionen ausführen. Diese Elemente sind direkt mit der realen Welt verbunden und liefern kontinuierlich Daten, die an die Steuerungsebene und MES zurückfließen, um den Produktionsprozess dynamisch zu steuern und zu optimieren."
    },

    {
        title: "Horizontale Integration",
        textVertical: "Verknüpft Maschinen und Prozesse auf derselben Produktionsebene und ermöglicht reibungslosen Datenaustausch. Sie sorgt für abgestimmte Abläufe innerhalb der Fertigung.",
        textHorizontal: "Horizontal: Austausch von Daten und Synchronisation zwischen Anlagen.",
        ptext: "Horizontale Integration stellt sicher, dass Maschinen, Anlagen und Prozesse innerhalb derselben Produktionsebene miteinander vernetzt sind. Daten werden in Echtzeit ausgetauscht, Abläufe synchronisiert und Engpässe vermieden. Dadurch können Ressourcen effizient genutzt, Produktionslinien flexibel angepasst und Qualität sowie Durchlaufzeiten verbessert werden."
    },

    {
        title: "Vertikale Integration",
        textVertical: "Verbindet alle Ebenen von Feldebene bis ERP für reibungslosen Datenfluss und Informationsaustausch. Sie ermöglicht Echtzeitsteuerung über die gesamte Produktionskette.",
        textHorizontal: "Vertikal: Daten von CPS nach ERP, Planungen von ERP nach unten.",
        ptext: "Vertikale Integration verbindet alle Ebenen der Produktionspyramide, von der Feldebene über Steuerung und MES bis hin zum ERP. Produktionsdaten werden kontinuierlich nach oben gemeldet, während Planungen und Vorgaben von ERP nach unten übertragen werden. Dadurch entsteht ein geschlossener Informationskreislauf, der Echtzeitsteuerung, Rückverfolgbarkeit und eine optimierte Produktion ermöglicht."
    },

    {
        title: "IPC",
        textVertical: "Industrial PCs steuern Maschinen und verarbeiten Produktionsdaten zuverlässig, sie vernetzen die Steuerungsebene mit MES und SCADA.",
        textHorizontal: "IPC: Robuste Computer für Maschinensteuerung, Datenerfassung und Prozessüberwachung.",
        ptext: "Industrial PCs (IPC) sind speziell für industrielle Umgebungen konzipiert. Sie übernehmen die Steuerung von Maschinen, erfassen Produktionsdaten, überwachen Prozesse und kommunizieren mit MES und SCADA. Aufgrund ihrer Robustheit gegenüber Staub, Vibrationen und Temperatur gewährleisten sie einen sicheren und stabilen Betrieb, was die Zuverlässigkeit und Effizienz von CPS wesentlich erhöht."
    },

    {
        title: "Sensoren und Aktoren",
        textVertical: "Sensoren erfassen Daten, Aktoren setzen Befehle um und bilden die direkte Schnittstelle zur physischen Produktion.",
        textHorizontal: "Sensoren messen Prozesswerte, Aktoren steuern Maschinen oder Anlagen.",
        ptext: "Sensoren und Aktoren sind die direkt sichtbare Schnittstelle der CPS zur realen Welt. Sensoren erfassen physikalische Größen wie Temperatur, Druck, Feuchtigkeit, Geschwindigkeit oder Position. Aktoren setzen Steuerbefehle in mechanische oder elektrische Aktionen um. Zusammen bilden sie die Grundlage für die Datenerfassung und -ausführung und liefern essentielle Informationen für die höheren Ebenen der Pyramide, um Prozesse zu überwachen und zu optimieren."
    },

    {
        title: "Einfluss auf CPS",
        textVertical: "ERP, MES, IPC, Sensoren und Aktoren beeinflussen direkt die Steuerung und Effizienz von CPS und sichern die Echtzeitfähigkeit.",
        textHorizontal: "Einfluss: Systeme und Geräte liefern Daten, steuern Abläufe, sichern Echtzeitfähigkeit und Qualität.",
        ptext: "Die gesamte CPS-Pyramide ist auf das Zusammenspiel von ERP, MES, IPC, Sensoren und Aktoren angewiesen. ERP plant Ressourcen und Aufträge, MES übersetzt diese in konkrete Produktionsbefehle, IPC steuert Maschinen, Sensoren liefern Echtzeitinformationen und Aktoren setzen die Befehle um. Nur durch dieses Zusammenspiel wird die Effizienz, Flexibilität, Qualität und Sicherheit von Cyber-Physical Systems sichergestellt."
    },
    {
        title: "API",
        textVertical: "APIs ermöglichen die Kommunikation zwischen Software-Systemen.",
        textHorizontal: "API: definiert Schnittstellen, Austausch von Daten und Funktionen zwischen Programmen.",
        ptext: "Eine API (Application Programming Interface) ist eine definierte Schnittstelle, über die Software-Systeme miteinander kommunizieren können. Sie legt fest, wie Daten abgerufen oder Befehle gesendet werden, ohne dass die internen Abläufe bekannt sein müssen. APIs sind essenziell für die Integration von IoT-Geräten, MES, ERP oder Cloud-Diensten, da sie automatisierten, standardisierten und sicheren Datenaustausch ermöglichen. So können Systeme effizient zusammenarbeiten und Informationen in Echtzeit weitergeben."
    },
    {
        title: "Edge Computing",
        textVertical: "Edge Computing verarbeitet Daten nahe am Entstehungsort, statt in der Cloud.",
        textHorizontal: "Edge: lokale Datenverarbeitung an Geräten oder Gateways, reduziert Latenz und Netzwerkbelastung.",
        ptext: "Edge Computing verschiebt die Datenverarbeitung von zentralen Rechenzentren direkt an den Ort, an dem die Daten entstehen, z. B. an Sensoren, Aktoren oder Gateways. Dies reduziert Latenz, entlastet Netzwerke und ermöglicht Echtzeitreaktionen für IoT- oder CPS-Anwendungen. Durch die lokale Verarbeitung können Entscheidungen schneller getroffen, Sicherheitsrisiken verringert und die Effizienz von Produktions- oder Smart-Home-Systemen erheblich gesteigert werden."
    },
    {
        title: "FOK / FOAK",
        textVertical: "FOK bezeichnet innovative, einmalige Systeme oder Lösungen als Prototyp.",
        textHorizontal: "FOK: First-of-a-Kind-Systeme, neuartige Prototypen, testen Konzepte und Technologien.",
        ptext: "FOK (First-of-a-Kind) beschreibt einmalige, innovative Systeme oder Anlagen, die als Prototyp entwickelt werden, um neue Technologien, Konzepte oder Produktionsprozesse zu erproben. Diese Systeme dienen dazu, Erfahrungen zu sammeln, Risiken zu identifizieren und Verbesserungen vor der Serienproduktion umzusetzen. In CPS- oder IoT-Umgebungen ermöglicht FOK das Testen von Schnittstellen, Echtzeitdatenverarbeitung und neuen Automatisierungskonzepten unter realen Bedingungen."
    },
    {
        title: "Rebound-Effekt",
        textVertical: "Mehr Effizienz kann paradoxerweise zu höherem Verbrauch führen.",
        textHorizontal: "Rebound: Einsparungen durch Effizienz werden durch verändertes Nutzerverhalten teilweise aufgehoben.",
        ptext: "Der Rebound-Effekt beschreibt das Phänomen, dass Effizienzsteigerungen in Technologie oder Prozessen nicht immer zu einer Reduktion des Gesamtverbrauchs führen. Wenn Geräte sparsamer werden oder Prozesse optimiert werden, kann dies dazu führen, dass Nutzer ihr Verhalten anpassen und insgesamt mehr Ressourcen verbrauchen. In IoT- oder CPS-Umgebungen muss der Rebound-Effekt berücksichtigt werden, um Effizienzgewinne realistisch zu planen und die tatsächliche Wirkung von Optimierungen zu bewerten."
    },
    {
        title: "Sigfox",
        textVertical: "Sigfox ist ein energieeffizientes Funknetz für IoT-Geräte mit großer Reichweite.",
        textHorizontal: "Sigfox: Low-Power-Wide-Area-Network, lange Reichweite, energiesparend, für kleine Datenmengen.",
        ptext: "Sigfox ist ein LPWAN (Low-Power-Wide-Area-Network), das speziell für IoT-Anwendungen entwickelt wurde. Es ermöglicht Geräten, kleine Datenmengen über große Entfernungen von mehreren Kilometern zu übertragen, während der Energieverbrauch minimal bleibt. Wichtige Eigenschaften sind geringe Kosten, einfache Implementierung, weltweite Abdeckung und lange Batterielaufzeiten der Sensoren."
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

