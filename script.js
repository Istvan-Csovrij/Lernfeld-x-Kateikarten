const kartenDaten = [
    {
        title: "CPS",
        textVertical: "CPS (Cyber-Physical Systems) verbinden physische Prozesse mit digitalen Systemen, z. B. durch Sensoren, Aktoren und Software. Sie ermöglichen Echtzeitsteuerung und erfordern hohe Sicherheit.",
        textHorizontal: "CPS: Verbindung von realen Prozessen und digitalen Systemen, Echtzeitsteuerung, Sicherheit wichtig.",
        ptext: "Cyber-Physical Systems (CPS) integrieren physische Prozesse mit digitalen Komponenten. Sie nutzen Sensoren, Aktoren und Software, um Systeme in Echtzeit zu überwachen und zu steuern. Beispiele sind autonome Fahrzeuge, industrielle Automatisierung und Smart Grids. Sicherheit, Zuverlässigkeit und Datenschutz sind besonders wichtig, da Fehler oder Cyberangriffe direkte Auswirkungen auf die reale Welt haben können."
    },
    {
        title: "CPPS",
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
    },
    {
        title: "CPS im IoP – Anwendungsfelder",
        textVertical: "CPS im IoP verbinden Maschinen, Daten und Menschen für intelligente & effiziente Prozesse.",
        textHorizontal: "CPS im IoP: Smart Manufacturing, Smart Mobility, Smart Energy, Smart Health, Smart Buildings.",
        ptext: "Cyber-Physical Systems (CPS) im Internet of Production (IoP) ermöglichen die intelligente Vernetzung von Geräten, Maschinen und Software. Zentrale Anwendungsfelder sind Smart Manufacturing, Smart Mobility, Smart Energy, Smart Health und Smart Buildings. Sie verbessern Effizienz, Zuverlässigkeit, Sicherheit und Transparenz durch Echtzeitdaten, Automatisierung und lernende Systeme."
    },
    {
        title: "Smart Manufacturing",
        textVertical: "Digitale Fabriken mit vernetzten Maschinen und autonomen Prozessen.",
        textHorizontal: "Smart Manufacturing: Automatisierung, Echtzeitdaten, Robotik, adaptive Fertigung.",
        ptext: "Smart Manufacturing nutzt CPS, um Produktionsanlagen zu vernetzen, Daten in Echtzeit zu analysieren und Prozesse automatisch zu optimieren. Dazu gehören autonome Roboter, flexible Fertigungssysteme, vorausschauende Wartung sowie digitale Zwillinge für Simulationen. Das Ergebnis: höhere Qualität, weniger Ausfälle und effizientere Produktion."
    },
    {
        title: "Smart Mobility",
        textVertical: "Vernetzte Verkehrssysteme für sichere und effiziente Mobilität.",
        textHorizontal: "Smart Mobility: autonome Fahrzeuge, Verkehrssteuerung, Flottenmanagement.",
        ptext: "Smart Mobility verwendet CPS, um Fahrzeuge, Infrastruktur und Verkehrsmanagementsysteme zu vernetzen. Beispiele sind autonome Fahrzeuge, intelligente Ampelsysteme, Carsharing-Plattformen und optimiertes Flottenmanagement. Ziel ist eine sichere, energiesparende und flüssige Verkehrsinfrastruktur."
    },
    {
        title: "Smart Energy",
        textVertical: "Intelligente Energieversorgung durch vernetzte Systeme und Sensorik.",
        textHorizontal: "Smart Energy: Smart Grids, Lastmanagement, erneuerbare Energieintegration.",
        ptext: "Smart Energy nutzt CPS, um Energieerzeugung, -speicherung und -verbrauch zu steuern. Smart Grids erfassen Echtzeitdaten, balancieren Lasten automatisch aus und integrieren erneuerbare Energien. Ziel ist eine stabile, effiziente und nachhaltige Energieversorgung."
    },
    {
        title: "Smart Health",
        textVertical: "Vernetzte medizinische Geräte für bessere Diagnosen und Patientensicherheit.",
        textHorizontal: "Smart Health: Telemedizin, Wearables, vernetzte Patientenüberwachung.",
        ptext: "Smart Health verwendet CPS zur Überwachung von Patienten, Analyse von Gesundheitsdaten und Unterstützung medizinischer Entscheidungen. Eingesetzt werden Wearables, telemedizinische Systeme, intelligente Implantate und automatisierte Diagnosegeräte. Dies verbessert Pflegequalität, Reaktionszeiten und Behandlungsergebnisse."
    },
    {
        title: "Smart Buildings",
        textVertical: "Intelligente Gebäude mit automatisierten Energie- und Sicherheitsfunktionen.",
        textHorizontal: "Smart Buildings: IoT-Sensorik, Energieoptimierung, Zutrittskontrollen.",
        ptext: "Smart Buildings nutzen CPS zur Steuerung von Heizung, Beleuchtung, Sicherheitssystemen und Energieverbrauch. Sensoren erfassen Umgebungsdaten und passen Systeme automatisch an. Dadurch werden Gebäude energieeffizienter, sicherer und komfortabler."
    },
    {
        title: "Unterschied zwischen CPS und IoT",
        textVertical: "CPS steuern physische Prozesse aktiv; IoT vernetzt Geräte und sammelt Daten.",
        textHorizontal:
            "CPS: enge Kopplung von Software & Physik ↦ Echtzeitsteuerung · " +
            "IoT: Vernetzung & Datenaustausch zwischen Geräten.",

        ptext:
            "Cyber-Physical Systems (CPS) und das Internet of Things (IoT) werden oft verwechselt, " +
            "unterscheiden sich jedoch deutlich:\n\n" +

            "• **CPS**: Fokus auf der Verzahnung von Software und realen physischen Prozessen. " +
            "Sensoren, Aktoren und Algorithmen arbeiten in Echtzeit zusammen, um Maschinen und Systeme aktiv zu steuern. " +
            "Beispiele: autonome Fahrzeuge, Industrie-4.0-Maschinen, medizinische Assistenzsysteme.\n\n" +

            "• **IoT**: Fokus auf Vernetzung, Kommunikation und Datenaustausch. Geräte senden Daten in die Cloud, " +
            "werden überwacht oder können einfache Aktionen auslösen. " +
            "Beispiele: Smart-Home-Geräte, Wearables, vernetzte Sensoren.\n\n" +

            "Kurz gesagt: **IoT sammelt und überträgt Daten – CPS nutzt diese Daten, um physische Vorgänge automatisch zu steuern.**"
    },
    {
        title: "IT-Cybersicherheit bei CPS",
        textVertical: "CPS benötigen hohe Sicherheit, da digitale Angriffe reale Schäden verursachen können.",
        textHorizontal:
            "CPS-Sicherheit: Netzwerkschutz · Zugriffskontrolle · Datenintegrität · Echtzeitüberwachung.",

        ptext:
            "CPS verbinden IT und physische Prozesse, deshalb können Angriffe reale Schäden verursachen.\n\n" +
            "Wichtige Punkte:\n" +
            "1. Netzwerkschutz: Firewalls, sichere Protokolle\n" +
            "2. Zugriffskontrolle: Rollen, Berechtigungen\n" +
            "3. Datenintegrität: keine Manipulation von Messwerten\n" +
            "4. Echtzeitüberwachung: schnelle Störungs- oder Angriffs-Erkennung\n" +
            "5. Physische Sicherheit: Schutz von Sensoren und Aktoren"
    },
    {
        title: "Physische Sicherheit (Safety)",
        textVertical: "Schutz von Menschen, Maschinen und Anlagen vor Unfällen und Schäden.",
        textHorizontal: "Safety: physische Sicherheit, Unfallprävention, Schutz von Anlagen und Personal.",
        ptext: "Physische Sicherheit (Safety) umfasst alle Maßnahmen, die Menschen, Maschinen und Produktionsanlagen vor Gefahren schützen. Dazu zählen Schutzvorrichtungen an Maschinen, Not-Aus-Systeme, Sicherheitsbeleuchtung, Zutrittskontrollen und Sicherheitskennzeichnungen. Safety-Maßnahmen minimieren das Risiko von Unfällen, gewährleisten den gesetzlichen Arbeitsschutz und sorgen dafür, dass Produktionsprozesse sicher und zuverlässig ablaufen."
    },
    {
        title: "Rolle von IoT in der modernen Produktion",
        textVertical: "IoT vernetzt Maschinen, Sensoren und Systeme für Echtzeit-Transparenz.",
        textHorizontal: "IoT: Vernetzung, Datenanalyse, Prozessoptimierung, vorausschauende Wartung.",
        ptext: "Das Internet of Things (IoT) spielt in der modernen Produktion eine zentrale Rolle. Durch die Vernetzung von Maschinen, Sensoren und Steuerungssystemen lassen sich Produktionsprozesse in Echtzeit überwachen und optimieren. IoT ermöglicht Predictive Maintenance, Effizienzsteigerungen, Energieeinsparungen und eine flexible Anpassung an wechselnde Produktionsanforderungen. Die kontinuierliche Datenanalyse unterstützt fundierte Entscheidungen und verbessert die Qualität und Produktivität."
    },
    {
        title: "Produktionsplanung",
        textVertical: "Produktionsplanung koordiniert Ressourcen, Zeitpläne und Kapazitäten.",
        textHorizontal: "Planung: Material, Personal, Maschinen, Aufträge effizient steuern.",
        ptext: "Die Produktionsplanung stellt sicher, dass alle Ressourcen optimal genutzt werden. Sie koordiniert Maschinen, Material, Personal und Aufträge, um termingerechte Fertigung zu gewährleisten. Moderne Planung integriert Echtzeitdaten aus MES, IoT und ERP-Systemen, ermöglicht flexible Anpassungen bei Störungen und verbessert die Effizienz, Produktivität und Qualität in der Produktion."
    },
    {
        title: "Datengetrieben & Dynamisch",
        textVertical: "IoT liefert Daten, CPS reagiert flexibel auf Änderungen in Echtzeit.",
        textHorizontal: "Datengetrieben: IoT erfasst kontinuierlich Produktionsdaten. Dynamisch: CPS passt Prozesse selbstständig an.",
        ptext: "Moderne Produktionsprozesse sind datengetrieben und dynamisch zugleich. IoT-Geräte wie Sensoren und Aktoren erfassen kontinuierlich Maschinenzustände, Materialflüsse und Umgebungsparameter. Cyber-Physical Systems nutzen diese Daten, um Prozesse flexibel in Echtzeit anzupassen, auf Störungen zu reagieren und die Produktion effizient, zuverlässig und qualitativ hochwertig zu gestalten."
    },
    {
        title: "Just-in-Time-Produktion",
        textVertical: "Materialien und Teile werden genau zum benötigten Zeitpunkt geliefert.",
        textHorizontal: "JIT: Reduziert Lagerkosten, Lieferungen erfolgen bedarfsgerecht und termingenau.",
        ptext: "Just-in-Time-Produktion optimiert den Materialfluss, indem Rohstoffe, Bauteile und Zwischenprodukte genau dann bereitgestellt werden, wenn sie für die Produktion benötigt werden. Dies reduziert Lagerbestände, senkt Kosten und verbessert die Flexibilität der Fertigung. IoT und CPS unterstützen JIT durch Echtzeitdaten und dynamische Steuerung der Produktionsprozesse."
    },
    {
        title: "Predictive Maintenance",
        textVertical: "Vorausschauende Wartung erkennt Probleme, bevor sie auftreten.",
        textHorizontal: "Predictive Maintenance: Sensoren sammeln Daten, Analysen prognostizieren Wartungsbedarf.",
        ptext: "Predictive Maintenance nutzt Daten von Sensoren, Aktoren und CPS, um den Zustand von Maschinen kontinuierlich zu überwachen. Analysen und Algorithmen prognostizieren mögliche Ausfälle, sodass Wartungsarbeiten rechtzeitig durchgeführt werden können. Dies erhöht die Maschinenverfügbarkeit, reduziert ungeplante Stillstände und optimiert die Instandhaltungskosten in der Produktion."
    },
    {
        title: "Flexible Produktionslinien",
        textVertical: "Produktionslinien passen sich schnell an unterschiedliche Produkte an.",
        textHorizontal: "Flexibilität: Anpassung an Produktwechsel, variierende Stückzahlen, kurze Umrüstzeiten.",
        ptext: "Flexible Produktionslinien ermöglichen es, unterschiedliche Produkte auf derselben Fertigungslinie herzustellen. Durch modulare Maschinenkonzepte und CPS-gestützte Steuerung können Umrüstungen schnell durchgeführt werden. Dies erhöht die Reaktionsfähigkeit auf Marktanforderungen, reduziert Stillstandzeiten und steigert die Effizienz der Produktion."
    },
    {
        title: "Autonome Transportsysteme",
        textVertical: "Transport innerhalb der Produktion erfolgt selbstständig und effizient.",
        textHorizontal: "Autonomie: Fahrzeuge navigieren selbstständig, optimieren Materialfluss, reduzieren manuelle Arbeit.",
        ptext: "Autonome Transportsysteme (AGVs, fahrerlose Transportsysteme) bewegen Material und Produkte innerhalb der Produktion eigenständig. Sie nutzen Sensoren, IoT und CPS, um Hindernisse zu erkennen, Routen zu planen und Prozesse zu synchronisieren. Dies verbessert die Effizienz, verringert Fehler und entlastet Mitarbeiter von manuellen Transportaufgaben."
    },
    {
        title: "Intelligente Fertigungssysteme & IoT",
        textVertical: "IoT-Sensoren liefern Daten, CPS trifft Entscheidungen, Produktion passt sich dynamisch an.",
        textHorizontal: "Ablauf: Sensor → Cloud → Analyse → CPS entscheidet → Produktion reagiert → Weiterbetrieb.",
        ptext: "Intelligente Fertigungssysteme nutzen IoT und CPS zusammen, um Produktionsprozesse autonom und effizient zu steuern. IoT-Sensoren erfassen Daten wie Temperatur oder Stillstand einer Maschine. Diese Daten gelangen in die Plattform oder Cloud, die analysiert, z. B. drohende Überhitzung erkennt. Das CPS trifft daraufhin Entscheidungen, wie Verlangsamung oder Stopp der Maschine. Die Produktionsplanung reagiert automatisch: andere Maschinen übernehmen Aufgaben, Wartungsteams werden informiert, neue Zeitpläne werden erstellt. So läuft die Produktion flexibel, schnell und sicher – ohne ständige menschliche Eingriffe."
    },
    {
        title: "Produktionssteuerung",
        textVertical: "Produktionssteuerung sorgt dafür, dass Fertigungsaufträge termingerecht und effizient ausgeführt werden.",
        textHorizontal: "Aufgaben: Auftragsfreigabe, Reihenfolgeplanung, Maschinen- und Materialsteuerung, Logistik und Monitoring.",
        ptext: "Die Produktionssteuerung stellt sicher, dass die geplante Produktion tatsächlich umgesetzt wird. Sie beantwortet Fragen wie: Wann beginnt welcher Auftrag? Welche Maschine führt welchen Schritt aus? Wie wird Material rechtzeitig bereitgestellt? Und was passiert bei Störungen? Typische Aufgaben sind die Auftragsfreigabe, Reihenfolgeplanung, Maschinen- und Ressourcensteuerung, Materialbereitstellung nach Just-in-Time-Prinzip, Transport- und Logistiksteuerung durch FTS oder autonome Roboter sowie Überwachung und Monitoring der Fertigung. Planung trifft Entscheidungen vorher, Steuerung sorgt für die Durchführung in Echtzeit."
    },
    {
        title: "Rolle von CPS in der Produktionssteuerung",
        textVertical: "CPS überwacht und steuert Produktionsprozesse in Echtzeit auf Basis digitaler Modelle.",
        textHorizontal: "CPS: Verbindung von realen Prozessen und digitalen Systemen, automatische Steuerung, schnelle Reaktion.",
        ptext: "Cyber-Physical Systems (CPS) überwachen und steuern Maschinen in Echtzeit. Sie erfassen Daten über Sensoren, vergleichen sie mit digitalen Modellen und passen Abläufe dynamisch an. So werden Produktionsprozesse flexibel, effizient und fehlerresistent gesteuert. CPS verknüpft Steuerungsebene, MES und ERP, sodass Planungen direkt umgesetzt und Abweichungen sofort korrigiert werden."
    },
    {
        title: "Intelligente Fertigungssysteme",
        textVertical: "Smart Manufacturing verbindet IoT, CPS und Datenanalyse für effiziente Produktion.",
        textHorizontal: "Smart Manufacturing: flexible Produktion, Echtzeitüberwachung, schnelle Anpassung an Änderungen.",
        ptext: "Intelligente Fertigungssysteme nutzen IoT-Geräte, CPS und Datenanalyse, um Produktionsprozesse in Echtzeit zu überwachen und zu steuern. Maschinen kommunizieren untereinander, passen sich automatisch an Änderungen an und optimieren Abläufe. Dadurch werden Ressourcen effizient genutzt, Ausfallzeiten reduziert und die Qualität gesichert. Smart Manufacturing ermöglicht eine flexible, vernetzte und autonome Produktion, die schnell auf Kundenanforderungen oder Störungen reagieren kann."
    },
    {
        title: "Zusammenspiel: Planung – Steuerung – IoT – CPS",
        textVertical: "Planung, Steuerung, IoT und CPS arbeiten vernetzt für effiziente Produktion.",
        textHorizontal: "Zusammenspiel: Datenfluss von Planung zu Steuerung, Echtzeit-Feedback durch IoT, Umsetzung durch CPS.",
        ptext: "Das Zusammenspiel von Planung, Steuerung, IoT und CPS bildet das Herz moderner Produktionssysteme. Die Produktionsplanung gibt Vorgaben, die Steuerungsebene setzt diese in konkrete Abläufe um. IoT-Geräte liefern Echtzeitdaten aus der Produktion, die CPS auswertet, um Prozesse automatisch anzupassen. So entsteht ein geschlossener Kreislauf, der Effizienz, Flexibilität und Qualität in der Fertigung gewährleistet."
    },
    {
        title: "Predictive / Vorhersage in der Produktion",
        textVertical: "Vorhersage nutzt Daten, um Störungen oder Ausfälle frühzeitig zu erkennen.",
        textHorizontal: "Predictive: Sensor- und Produktionsdaten analysieren, Wartung und Abläufe planen.",
        ptext: "Predictive Maintenance und Produktionsvorhersage nutzen Sensordaten, historische Produktionswerte und Algorithmen, um Ausfälle, Engpässe oder Qualitätsabweichungen frühzeitig zu erkennen. Dadurch können Wartungen gezielt geplant, Maschinen optimal ausgelastet und Produktionsprozesse effizient gesteuert werden, ohne dass es zu ungeplanten Stillständen kommt."
    },
    {
        title: "Rolle von IoT & CPS in der Vorhersage",
        textVertical: "IoT erfasst Daten, CPS wertet sie in Echtzeit aus und trifft Entscheidungen.",
        textHorizontal: "Predictive: Sensoren sammeln Daten, CPS analysiert, plant Wartung und steuert Abläufe.",
        ptext: "IoT-Geräte liefern kontinuierlich Daten aus Maschinen, Anlagen und Produktionsprozessen. CPS verarbeitet diese Informationen in Echtzeit, erkennt Muster und prognostiziert mögliche Ausfälle oder Engpässe. So können Wartungsmaßnahmen rechtzeitig durchgeführt, Produktionslinien optimiert und Stillstände minimiert werden, wodurch die Effizienz und Zuverlässigkeit der Fertigung gesteigert wird."
    },
    {
        title: "Analyse in der Produktion",
        textVertical: "Daten sammeln, auswerten und Optimierung ableiten.",
        textHorizontal: "Analyse: Produktionsdaten erfassen, Prozesse prüfen, Engpässe erkennen, Qualität sichern.",
        ptext: "In der Produktion bedeutet Analyse, dass alle relevanten Daten aus Maschinen, Anlagen und Prozessen systematisch erfasst und ausgewertet werden. Ziel ist es, Schwachstellen, Engpässe oder Qualitätsprobleme frühzeitig zu erkennen. Auf Basis dieser Erkenntnisse können Produktionsprozesse optimiert, Ressourcen effizienter eingesetzt und die Produktqualität gesichert werden. So trägt die Analyse entscheidend zur Effizienzsteigerung und Kostensenkung bei."
    },
    {
        title: "Rolle von IoT bei der Analyse",
        textVertical: "Sensoren liefern kontinuierlich Daten, Analyse erkennt Muster und Risiken.",
        textHorizontal: "IoT erfasst Maschinen- und Prozessdaten wie Temperatur, Vibration, Produktionsmengen und Energieverbrauch. Die Analyse bewertet diese Daten, erkennt Engpässe oder Ausfallrisiken und unterstützt Wartung und Optimierung.",
        ptext: "IoT-Geräte liefern laufend Daten aus allen Produktionsbereichen: Maschinenstatus, Produktionsmengen, Energieverbrauch, Materialfluss und Fehlerstatistiken. Analysen dieser Daten ermöglichen Mustererkennung, z. B. dass bei Überschreitung bestimmter Temperaturen oder Vibrationen die Ausfallwahrscheinlichkeit steigt. So können Wartungen geplant, Prozesse optimiert und Produktionsausfälle minimiert werden. Ohne IoT fehlen die Daten für eine zuverlässige Analyse."
    },
    {
        title: "Analyse in Smart Factory & Zusammenspiel mit IoT/CPS",
        textVertical: "Daten erfassen, analysieren, Muster erkennen, Prozesse steuern.",
        textHorizontal: "IoT liefert Sensordaten, CPS steuert Prozesse. Analyse erkennt Fehler, Engpässe und Optimierungspotenziale, Vorhersage prognostiziert zukünftige Ereignisse.",
        ptext: "In intelligenten Fertigungssystemen nutzt man Analyse für Fehler-, Leistungs-, Qualitäts- und Ressourcenbewertung sowie Prozessoptimierung. IoT liefert kontinuierlich Daten, CPS führt Prozesse aus und gibt Feedback. So lassen sich Engpässe erkennen, zukünftige Ereignisse vorhersagen und Produktion sowie Ressourcen effizient planen."
    },
    {
        title: "KPI (Key Performance Indicator)",
        textVertical: "Kennzahlen messen Leistung und Fortschritt.",
        textHorizontal: "KPIs zeigen den Status von Produktion, Qualität oder Effizienz auf einen Blick und unterstützen Entscheidungen.",
        ptext: "KPIs sind messbare Kennzahlen, die den Erfolg von Prozessen oder Projekten anzeigen. In der Produktion können KPIs z. B. Produktionsmenge, Ausschussrate, Maschinenlaufzeit oder Energieverbrauch sein. Sie helfen, Engpässe zu erkennen, Leistungen zu vergleichen und die Produktion effizienter zu steuern."
    },
    {
        title: "Verfügbarkeit & Rolle von IoT",
        textVertical: "Verfügbarkeit messen, IoT liefert Echtzeitdaten.",
        textHorizontal: "Verfügbarkeit = Betriebszeit ÷ geplante Produktionszeit × 100. IoT erfasst Maschinenstatus, Stillstand und produktive Zeit für Echtzeit-Berechnung.",
        ptext: "Verfügbarkeit ist eine KPI, die angibt, wie lange eine Maschine tatsächlich einsatzbereit ist. Beispiel: Geplante Produktionszeit 8 Stunden, Maschine steht 1 Stunde → Verfügbarkeit = 7/8 × 100 = 87,5 %. IoT liefert dazu Echtzeitdaten wie Maschinenausfälle, Stillstandzeiten und Rüstzeiten, sodass die Verfügbarkeit jederzeit aktuell berechnet werden kann."
    },
    {
        title: "Verfügbarkeit in Smart Factory & Rolle von CPS",
        textVertical: "CPS verbessern Verfügbarkeit, IoT liefert Daten, Analyse erkennt Trends.",
        textHorizontal: "CPS handeln automatisch: Maschinen stoppen frühzeitig, Roboter übernehmen Aufgaben, Wartung wird initiiert. IoT liefert Echtzeitdaten, Analyse erkennt Ausfallursachen, Vorhersage plant Wartung, Produktionssteuerung passt Aufträge an.",
        ptext: "In intelligenten Fertigungssystemen wird die Verfügbarkeit kontinuierlich überwacht. CPS reduzieren ungeplante Ausfälle durch automatische Maßnahmen, IoT liefert Echtzeitdaten, Analyse identifiziert Trends und Ursachen, Vorhersage ermöglicht Predictive Maintenance. So bleiben Maschinen einsatzbereit, Stillstände werden minimiert und die Produktionsverfügbarkeit steigt, z. B. auf 95 %."
    },
    {
        title: "Flexibilität in der Produktion",
        textVertical: "Anpassungsfähigkeit von Prozessen, Maschinen und Abläufen.",
        textHorizontal: "Flexibilität bedeutet: schnell auf Veränderungen reagieren, Varianten fertigen, Mengen anpassen und Maschinen umstellen.",
        ptext: "Flexibilität in der Produktion beschreibt die Fähigkeit eines Unternehmens, schnell und effizient auf Änderungen zu reagieren – etwa neue Produktvarianten, unterschiedliche Stückzahlen oder kurzfristige Kundenanforderungen. Flexible Prozesse und Anlagen ermöglichen schnelle Umrüstungen, variable Produktionsmengen und eine hohe Anpassungsfähigkeit, ohne die Effizienz zu verlieren."
    },
    {
        title: "Flexibilität in intelligenten Fertigungssystemen",
        textVertical: "Smart Factory passt Varianten, Aufträge und Ressourcen dynamisch an.",
        textHorizontal: "Roboter fertigen Varianten, Steuerung ändert Prioritäten, freie Maschinen werden genutzt, Ressourcen automatisch optimiert.",
        ptext: "In der Smart Factory ist Flexibilität ein zentraler Vorteil: Produktionsvarianten können schnell umgestellt werden, Aufträge lassen sich automatisch priorisieren, freie Maschinen werden für eine dynamische Kapazitätsnutzung eingesetzt und Material-, Energie- sowie Personaleinsatz werden laufend optimiert. So reagiert die Produktion flexibel auf wechselnde Anforderungen."
    },
    {
        title: "Produktsteuerung & Rolle von IoT",
        textVertical: "Aufträge verfolgen, Schritte steuern, IoT liefert Statusdaten.",
        textHorizontal: "Produktsteuerung sorgt für korrekte, termingerechte Fertigung. IoT liefert Echtzeitinfos zu Position, Bearbeitungsstand und Qualität.",
        ptext: "Produktsteuerung überwacht und steuert einzelne Produkte oder Aufträge durch die Fertigung. Sie stellt Qualität, richtige Reihenfolge und reibungslose Abläufe sicher und reagiert auf Störungen oder Prioritätsänderungen. IoT unterstützt dies durch Echtzeitdaten über Standort, bearbeitende Maschinen, Materialverfügbarkeit und mögliche Fehler. So kann die Produktsteuerung sofort eingreifen und den Auftrag effizient steuern."
    },
    {
        title: "Verbindung zu Planung, Steuerung & KPIs",
        textVertical: "Planen, steuern, messen – IoT & CPS verbessern alles.",
        textHorizontal: "Planung definiert, Steuerung setzt um. IoT liefert Daten, CPS reagiert, Analyse optimiert, KPIs bewerten.",
        ptext: "Planung legt fest, was produziert wird, Steuerung führt die Prozesse aus. IoT liefert Echtzeitinformationen, CPS steuert Maschinen automatisch. Analyse und Vorhersage verbessern Abläufe, während KPIs Leistung und Qualität bewerten. So optimieren IoT und CPS Produktion, Logistik und viele weitere Bereiche."
    },
    {
        title: "Informationsstand zwischen Mensch und Maschine",
        textVertical: "Beidseitiger Informationsaustausch für effiziente Zusammenarbeit.",
        textHorizontal: "Menschen geben Aufträge & Einstellungen, Maschinen liefern Status, Qualität & Fortschritt. IoT & CPS erhöhen Transparenz und ermöglichen bessere Entscheidungen.",
        ptext: "Der Informationsstand beschreibt, welche Infos Menschen über Maschinen haben und umgekehrt. Menschen übermitteln Aufträge, Einstellungen und Wartungsdaten, während Maschinen Status, Fehler, Qualitätsabweichungen und Fortschritt melden. In der Smart Factory sorgen IoT-Sensoren, CPS, Analyse und HMIs für einen hohen Informationsstand. So können Menschen fundiert entscheiden, Maschinen autonom reagieren und Fehler früh erkannt werden – für eine sichere, effiziente und flexible Produktion."
    },
    {
        title: "Durchgängige Qualitätskontrolle (CQC)",
        textVertical: "Qualität in jedem Schritt prüfen – IoT misst, CPS reagiert.",
        textHorizontal: "CQC erkennt Fehler früh, IoT liefert Messdaten, CPS korrigiert automatisch, Qualität wird entlang der gesamten Fertigung gesichert.",
        ptext: "Durchgängige Qualitätskontrolle bedeutet, dass die Qualität nicht nur am Ende, sondern in jedem Fertigungsschritt geprüft wird. IoT-Sensoren, Kameras und RFID liefern Echtzeitdaten zu Maßen, Temperaturen, Oberflächen oder Toleranzen. CPS reagieren darauf automatisch, korrigieren Werkstücke, passen Prozessparameter an oder sortieren fehlerhafte Teile aus. So wird die Qualität vom Rohmaterial bis zur Endkontrolle durchgängig überwacht und Abweichungen werden sofort behoben."
    },
    {
        title: "Integration & Vorteile der durchgängigen Qualitätskontrolle",
        textVertical: "Qualität planen, messen, reagieren – IoT & CPS unterstützen.",
        textHorizontal: "Qualitätsdaten fließen in Planung, Analyse und KPIs ein. Abweichungen werden früh erkannt, Prozesse flexibel angepasst.",
        ptext: "Durchgängige Qualitätskontrolle ist in die gesamte Produktion integriert: Planung berücksichtigt Prüfungen, Analyse erkennt Fehlerquellen, KPIs überwachen Ausschuss und Qualität. IoT liefert Echtzeitdaten, CPS reagieren autonom auf Abweichungen, und Dashboards informieren Bediener sofort. Das führt zu weniger Ausschuss, geringerer Nacharbeit, höherer Qualität und schneller Reaktion auf Probleme – eine wichtige Basis für Predictive Maintenance und Prozessoptimierung."
    },
    {
        title: "Risiken bei IoT & CPS",
        textVertical: "IT • Wandel • Sicherheit • Skills",
        textHorizontal: "IoT & CPS erhöhen technische, organisatorische und sicherheitsrelevante Anforderungen.",
        ptext: "1) Komplexe IT: Viele vernetzte Systeme – Störungen können die Produktion stoppen. Maßnahmen: Redundanz, Monitoring. 2) Veränderungsprozesse: Neue Technologien erfordern angepasste Abläufe – Übergangsrisiken. Maßnahmen: Change-Management, Schulungen. 3) Datensicherheit: Gefahr von Angriffen und Datenverlust. Maßnahmen: Verschlüsselung, Firewalls. 4) IT-Kompetenzen: Mitarbeiter brauchen mehr digitales Know-how. Maßnahmen: Weiterbildung, Fachkräfte."
    },
    {
        title: "Vehicle-to-Vehicle (V2V)",
        textVertical: "Fahrzeuge kommunizieren direkt miteinander.",
        textHorizontal: "V2V ermöglicht Informationsaustausch über Geschwindigkeit, Position und Fahrmanöver zur Erhöhung der Sicherheit und Effizienz.",
        ptext: "Vehicle-to-Vehicle (V2V) beschreibt die direkte Kommunikation zwischen Fahrzeugen über drahtlose Netzwerke. Autos teilen Informationen wie Geschwindigkeit, Position oder Bremsvorgänge, um Kollisionen zu vermeiden, den Verkehrsfluss zu verbessern und Assistenzsysteme zu unterstützen. V2V ist ein zentraler Baustein für automatisiertes und vernetztes Fahren."
    },
    {
        title: "V2V: Überwachung, Messung, Sicherung",
        textVertical: "Fahrzeuge überwachen sich gegenseitig und messen Daten.",
        textHorizontal: "V2V ermöglicht Echtzeit-Messungen, Überwachung von Fahrzeugzustand und Sicherheitsfunktionen.",
        ptext: "Vehicle-to-Vehicle (V2V) Kommunikation erlaubt es Fahrzeugen, Daten wie Position, Geschwindigkeit oder Bremsverhalten in Echtzeit auszutauschen. Dadurch können Risiken früh erkannt, Fahrzeugzustände überwacht und Sicherheitsmaßnahmen automatisch unterstützt werden. Dies erhöht die Sicherheit und Zuverlässigkeit im Straßenverkehr."
    },
    {
        title: "V2V & Flottenmanagement",
        textVertical: "Vernetzte Fahrzeuge für effiziente Flottensteuerung.",
        textHorizontal: "V2V liefert Daten über Standort, Geschwindigkeit und Zustand für optimiertes Flottenmanagement.",
        ptext: "Vehicle-to-Vehicle (V2V) Kommunikation unterstützt Flottenmanagement, indem Fahrzeuge Informationen in Echtzeit austauschen. So können Standorte überwacht, Fahrverhalten analysiert und Wartungsbedarf früh erkannt werden. Das ermöglicht eine effiziente Planung von Routen, Ressourcen und Wartungsintervallen, steigert die Sicherheit und reduziert Betriebskosten."
    },
    {
        title: "Automotive Maintenance Systems (AMS)",
        textVertical: "Automatisierte Wartung und Überwachung von Fahrzeugen.",
        textHorizontal: "AMS nutzt Fahrzeugdaten für vorausschauende Wartung, Fehlererkennung und optimale Einsatzplanung.",
        ptext: "Automotive Maintenance Systems (AMS) erfassen Fahrzeugdaten in Echtzeit, z. B. Motorzustand, Bremsen, Reifen oder Flüssigkeitsstände. Auf Basis dieser Informationen werden Wartungen geplant, Fehler früh erkannt und Reparaturen effizient durchgeführt. AMS verbessern die Fahrzeugverfügbarkeit, reduzieren ungeplante Ausfälle und ermöglichen eine optimierte Einsatzplanung in Flotten."
    },
    {
        title: "Vehicle-to-Pedestrian (V2P)",
        textVertical: "Fahrzeuge kommunizieren direkt mit Fußgängern.",
        textHorizontal: "V2P informiert Fahrzeuge und Fußgänger über Position und Bewegungen, um Unfälle zu vermeiden.",
        ptext: "Vehicle-to-Pedestrian (V2P) bezeichnet die direkte Kommunikation zwischen Fahrzeugen und Fußgängern über drahtlose Systeme. Fußgänger können über Smartphones oder Wearables Signale senden, Fahrzeuge erhalten Warnungen über deren Position und Bewegungen. So können Kollisionen vermieden, die Verkehrssicherheit erhöht und Fußgänger frühzeitig gewarnt werden."
    },
    {
        title: "V2P & IoT/CPS im Automotive-Bereich",
        textVertical: "IoT & CPS verbinden Fahrzeuge und Fußgänger für Sicherheit.",
        textHorizontal: "V2P nutzt IoT-Sensoren und CPS, um Daten über Position und Bewegungen in Echtzeit auszutauschen und Unfälle zu verhindern.",
        ptext: "Vehicle-to-Pedestrian (V2P) Systeme nutzen IoT-Geräte wie Smartphones, Wearables oder Sensoren, um Fußgänger zu lokalisieren und Daten an Fahrzeuge zu senden. CPS in den Fahrzeugen verarbeiten diese Informationen autonom und reagieren automatisch, z. B. durch Warnungen oder Bremsvorgänge. So erhöht V2P im Automotive-Bereich die Verkehrssicherheit, ermöglicht präventive Maßnahmen und integriert sich in vernetzte, intelligente Verkehrssysteme."
    },
    {
        title: "Telematik im Automotive-Bereich",
        textVertical: "Fahrzeugdaten sammeln, übertragen und auswerten.",
        textHorizontal: "Telematik nutzt IoT-Sensoren und CPS für Standort, Fahrzeugzustand, Fahrverhalten, Wartung und Flottenmanagement.",
        ptext: "Telematik verbindet Telekommunikation und IT, um Fahrzeugdaten zu erfassen, zu übertragen und auszuwerten. Funktionen umfassen GPS-Ortung, Überwachung von Fahrverhalten und Effizienz, Ferndiagnose sowie Predictive Maintenance. IoT-Sensoren liefern Echtzeitdaten, CPS analysieren diese und leiten Maßnahmen ein, z. B. Wartung oder Warnungen. Im Vergleich zum Infotainment-System liegt der Fokus auf Sicherheit, Effizienz und Fahrzeugmanagement, nicht auf Unterhaltung."
    },
    {
        title: "Smart Cities & Automotive",
        textVertical: "IoT & CPS für effiziente, sichere und nachhaltige Städte.",
        textHorizontal: "Smart Cities nutzen Vernetzung für Verkehr, Energie, Gesundheit, Sicherheit und Infrastruktur. V2V/V2P und CPS steuern Fahrzeuge und Verkehrsflüsse.",
        ptext: "Smart Cities integrieren Informationstechnologie, IoT und CPS, um Verkehr, Energie, Gesundheit und öffentliche Sicherheit zu optimieren und die Lebensqualität zu erhöhen. Im Verkehrsbereich kommunizieren vernetzte Fahrzeuge (V2V, V2P) mit Ampeln und Straßenmanagement, CPS steuern autonom Busse oder Flotten, und intelligente Systeme leiten Fahrzeuge bei Staus um. Gleichzeitig werden Energieverbrauch, Umweltwerte und Gesundheitssysteme überwacht, um Ressourcen effizient und nachhaltig einzusetzen."
    },
    {
        title: "Retrofitting",
        textVertical: "Alte Systeme modernisieren und vernetzen.",
        textHorizontal: "Bestehende Maschinen oder Anlagen mit neuer Technologie nachrüsten, z. B. Sensoren, IoT oder Automatisierung.",
        ptext: "Retrofitting bedeutet, bestehende Maschinen oder Anlagen durch moderne Technologien wie IoT-Sensoren, CPS oder Automatisierungssysteme aufzurüsten. Ziel ist es, ältere Systeme effizienter, sicherer und vernetzter zu machen, ohne sie komplett ersetzen zu müssen."
    },
    {
        title: "Kommunikationsinfrastruktur eines CPS",
        textVertical: "Vernetzte Systeme für Datenaustausch und Steuerung.",
        textHorizontal: "CPS nutzen Netzwerke, Protokolle und Schnittstellen, um Sensoren, Aktoren, Datenverarbeitung und andere Systeme zu verbinden.",
        ptext: "Die Kommunikationsinfrastruktur eines Cyber-Physical Systems (CPS) sorgt dafür, dass alle Komponenten – Sensoren, Aktoren, Steuerungen und Cloud-Systeme – effizient Daten austauschen können. Dazu gehören drahtlose oder kabelgebundene Netzwerke, standardisierte Kommunikationsprotokolle, Schnittstellen zu anderen CPS oder IT-Systemen sowie Sicherheitsmechanismen. Eine stabile Kommunikation ermöglicht Echtzeitüberwachung, autonome Entscheidungen und koordinierte Prozesssteuerung."
    },
    {
        title: "Umweltsensoren",
        textVertical: "Messen Temperatur, Feuchtigkeit, Licht und Luftqualität.",
        textHorizontal: "Sensoren liefern Umgebungsdaten für Smart Home, Industrie, Landwirtschaft und Infrastruktur.",
        ptext: "Umweltsensoren erfassen Temperatur, Luftfeuchtigkeit, Licht, CO₂ und Schadstoffe. Sie kommen in Heizung, Kühlung, Smart Home, Landwirtschaft, Industrieanlagen und Luftüberwachung zum Einsatz, um Prozesse zu steuern und die Umweltqualität zu überwachen."
    },
    {
        title: "Steuerung vs. Regelung",
        textVertical: "SOLL-Wert ausführen vs. SOLL ↔ IST vergleichen.",
        textHorizontal: "Steuerung folgt dem SOLL-Wert ohne Kontrolle. Regelung misst IST, vergleicht mit SOLL und korrigiert autonom.",
        ptext: "Bei der Steuerung wird ein vorgegebener SOLL-Wert umgesetzt, ohne dass das System prüft, ob der gewünschte Zustand erreicht wird (z. B. Timer, Lichtschalter). Bei der Regelung wird der IST-Wert ständig gemessen, mit dem SOLL-Wert verglichen und automatisch angepasst, bis IST = SOLL (z. B. Thermostat, Tempomat, Kühlschrank). Merksatz: Steuerung = nur SOLL, Regelung = SOLL ↔ IST + Nachregeln."
    },
    {
        title: "Rückwirkung (Feedback)",
        textVertical: "Ergebnis beeinflusst System oder nicht.",
        textHorizontal: "Steuerung: keine Rückwirkung, Ergebnis wirkt nicht zurück. Regelung: IST-Wert wird gemessen und beeinflusst Aktion (Feedback).",
        ptext: "Rückwirkung bedeutet, dass das Ergebnis einer Aktion auf das System zurückwirkt. Bei der Steuerung gibt es keine Rückwirkung: Aktionen werden nach SOLL ausgeführt, ohne das IST zu messen oder anzupassen (z. B. Timer, Heizlüfter). Bei der Regelung misst das System kontinuierlich den IST-Wert, vergleicht ihn mit SOLL und passt die Aktion an, bis IST = SOLL (z. B. Thermostat, Tempomat). Merksatz: Steuerung = keine Rückwirkung, Regelung = Feedback-Schleife vorhanden."
    },
    {
        title: "Steuerung vs. Regelung – Rückkopplung",
        textVertical: "Steuerung: offen • Regelung: Feedback",
        textHorizontal: "Steuerung arbeitet ohne IST-Kontrolle, Regelung misst IST, vergleicht mit SOLL und korrigiert automatisch.",
        ptext: "Bei der Steuerung wird der SOLL-Wert umgesetzt, ohne dass das Ergebnis überprüft wird – keine Rückkopplung, kein IST-Vergleich (z. B. Zeitschaltuhr-Lampe). Bei der Regelung wird der IST-Wert gemessen, mit SOLL verglichen und das System automatisch angepasst (z. B. Thermostat). Merksatz: Steuerung = kein Feedback, Regelung = Rückkopplung + automatische Korrektur."
    },
    {
        title: "Steuerung vs. Regelung – kompakt",
        textVertical: "SOLL ausführen vs. SOLL ↔ IST Feedback",
        textHorizontal: "Steuerung setzt SOLL ohne Kontrolle um, Regelung misst IST, vergleicht mit SOLL und korrigiert automatisch.",
        ptext: "Steuerung: Aktion nach SOLL, kein IST-Wert, keine Rückkopplung (z. B. Zeitschaltuhr-Lampe). Regelung: IST-Wert wird gemessen, mit SOLL verglichen, Abweichungen werden automatisch korrigiert (z. B. Thermostat, Tempomat). Merksatz: Steuerung = offen, Regelung = Feedback-Schleife."
    },
    {
        title: "Vorteile eines SBC für CPS",
        textVertical: "Kompakt, flexibel, energieeffizient und kostengünstig.",
        textHorizontal: "SBCs ermöglichen Retrofitting, Steuerung/Regelung, Sensor-/Aktor-Anbindung und IoT-Funktionen auf kleiner Bauform.",
        ptext: "Single-Board-Computer (SBC) sind günstig, energieeffizient und kompakt, wodurch sie sich ideal für Cyber-Physical Systems eignen. Sie lassen sich flexibel mit Sensoren, Aktoren und Kommunikationsmodulen verbinden, bieten eine Softwarebasis für komplexe Algorithmen und IoT-Funktionen, und profitieren von großer Community-Unterstützung. So können auch bestehende Maschinen einfach nachgerüstet und intelligent vernetzt werden."
    },
    {
        title: "SBCs als Basis für CPS",
        textVertical: "Vorteile: kompakt, günstig, flexibel • Nachteile: begrenzte Robustheit und Leistung",
        textHorizontal: "SBCs (z. B. Raspberry Pi) eignen sich für einfache CPS/IoT-Anwendungen, bieten flexible Schnittstellen und niedrigen Stromverbrauch, sind aber nicht industriezertifiziert oder für Echtzeit/hochkritische Anwendungen ausgelegt.",
        ptext: "Single-Board-Computer wie der Raspberry Pi 3B+ sind kompakt, energieeffizient, günstig und modular, wodurch sie ideal für Retrofitting und kleine CPS-Projekte sind. Sie bieten flexible Schnittstellen (GPIO, I²C, SPI, USB), Netzwerkfähigkeit und große Community-Unterstützung. Einschränkungen: begrenzte Leistung, keine Industrie-Zertifizierung, eingeschränkte Echtzeitfähigkeit, Micro-SD Speicher begrenzt langlebig, Wärmeentwicklung unter Dauerlast. Geeignet für kleine/mittlere Aufgaben, Sensoranbindung und IoT; nicht für kritische Industrieanwendungen oder komplexe KI/Steuerungen."
    },
    {
        title: "Arduino als Mikrocontroller für CPS",
        textVertical: "Günstig, kompakt, energieeffizient • Für Steuerung & Sensorik",
        textHorizontal: "Arduino steuert Sensoren und Aktoren, ist Open-Source, echtzeitfähig und modular; ideal für kleine CPS- und IoT-Projekte.",
        ptext: "Arduino ist eine Open-Source-Mikrocontroller-Plattform für CPS. Vorteile: günstig, kompakt, energieeffizient, flexibel, große Community, echtzeitfähig. Nachteile: begrenzte Rechenleistung und Speicher, eingeschränkte Netzwerkfähigkeit, kein OS, weniger robust für Industrieumgebung. Einsatzgebiete: Sensorik, Aktorik, Steuerung, IoT-Prototypen, Smart Home, Smart Factory, Automotive, Smart Health, Smart City."
    },
    {
        title: "IDE & Digitale Ausgänge",
        textVertical: "IDE: Code schreiben, testen, ausführen • Digital Output: HIGH/LOW",
        textHorizontal: "Eine IDE bündelt Editor, Compiler, Debugger und Projektverwaltung, um Mikrocontroller wie Arduino zu programmieren. Digitale Ausgänge steuern Geräte einfach AN/AUS (HIGH/LOW).",
        ptext: "Eine IDE (Integrated Development Environment) vereint alles zum Programmieren: Code-Editor, Compiler/Interpreter, Debugger und Projektverwaltung. Beispiele: Arduino IDE, Thonny, VS Code, Eclipse, PlatformIO. Vorteile: schnelleres Prototyping, Autovervollständigung, einfaches Hochladen auf Mikrocontroller. Digitale Ausgänge (Digital Output) haben zwei Zustände: HIGH = Strom fließt, LOW = kein Strom. Einsatz: LEDs, Relais, Motoren, Alarme oder digitale Signale in CPS/IoT-Systemen."
    },
    {
        title: "Mikrocontroller – Definition",
        textVertical: "Kleiner Computer für Steuerung & Sensorik",
        textHorizontal: "Mikrocontroller enthalten CPU, Speicher und Ein-/Ausgänge auf einer Platine und steuern Geräte oder Systeme autonom.",
        ptext: "Ein Mikrocontroller ist ein kleiner, eigenständiger Computer auf einer Platine, der CPU, Speicher (RAM/Flash) und Ein-/Ausgänge (GPIO, I²C, SPI) integriert. Er wird eingesetzt, um Sensoren auszulesen, Aktoren zu steuern und einfache Programme eigenständig auszuführen. Typische Einsatzgebiete: CPS, IoT, Smart Home, Automotive, Industrieanlagen."
    },
    {
        title: "ESP8266 – Überblick",
        textVertical: "WLAN-Mikrocontroller für IoT",
        textHorizontal: "ESP8266 kombiniert CPU, RAM, GPIOs und WLAN für kleine IoT-Projekte, programmierbar über Arduino IDE.",
        ptext: "Der ESP8266 ist ein kompakter Mikrocontroller mit integriertem WLAN, ideal für IoT-Anwendungen. Technisch bietet er eine 32-Bit CPU (80–160 MHz), ca. 50 kB RAM, 512 kB–4 MB Flash, 17 GPIO-Pins und Schnittstellen wie UART, SPI, I²C, PWM und ADC. Vorteile: integriertes WLAN, günstig, kompakt, programmierbar, Echtzeitsteuerung möglich, große Community. Nachteile: begrenzte Rechenleistung und Speicher, kein Betriebssystem, wenige Pins, hoher Stromverbrauch bei WLAN-Betrieb."
    },
    {
        title: "ESP32 – Überblick",
        textVertical: "Leistungsstarker Mikrocontroller für IoT",
        textHorizontal: "ESP32 bietet mehr Pins, WLAN/Bluetooth und Low-Power-Modi für batteriebetriebene IoT-Anwendungen.",
        ptext: "Der ESP32 ist ein Mikrocontroller mit integriertem WLAN und Bluetooth, ideal für IoT-Projekte mit höherem Leistungsbedarf. Vorteile: Low-Power-Design mit Deep Sleep und Ultra-Low-Power-Modus, 34 GPIO-Pins für viele Sensoren und Aktoren, kompakte Bauform (ca. 25 × 50 mm Dev-Board). Er ist programmierbar über Arduino IDE oder andere Plattformen und eignet sich besonders für batteriebetriebene Geräte."
    },
    {
        title: "Breadboard & ESP8266/ESP32 für IoT",
        textVertical: "Prototyping & Mikrocontroller-Vergleich",
        textHorizontal: "Breadboard ermöglicht schnelles, lötfreies Verbinden von Komponenten; ESP8266 für einfache IoT, ESP32 für komplexere CPS-Projekte.",
        ptext: "Ein Breadboard ist eine wiederverwendbare Steckplatine, auf der Sensoren, Aktoren, Widerstände und Mikrocontroller wie ESP8266 oder ESP32 ohne Löten verbunden werden können – ideal für Prototypen und IoT-Experimente. Vergleich ESP8266 vs. ESP32: ESP8266: 32-Bit CPU, 80–160 MHz, ~50 kB RAM, 17 GPIO, WLAN, günstig, für einfache IoT-Geräte. ESP32: Dual-Core 160–240 MHz, 520 kB RAM, 34 GPIO, WLAN + Bluetooth, Low-Power-Modi, für komplexere CPS/IoT-Projekte."
    },
    {
        title: "Kommunikation in CPS",
        textVertical: "CPS-Kommunikation & Protokolle",
        textHorizontal: "Cyber-physische Systeme (CPS) kommunizieren über standardisierte Protokolle, um Sensoren, Aktoren und andere Systeme zu vernetzen.",
        ptext: "CPS benötigen zuverlässige Kommunikation zwischen Sensoren, Aktoren und Steuerungssystemen. Häufig verwendete Protokolle: \n• MQTT: leichtgewichtig, für IoT und Cloud-Anbindung \n• OPC UA: standardisiert für Industrie, plattformunabhängig \n• Modbus / Modbus TCP: weit verbreitet in Automatisierung \n• CAN / CAN-FD: robust, für Automotive und Maschinensteuerung \n• HTTP/HTTPS: Web- und Cloud-Kommunikation \n• CoAP: energieeffizient, für IoT-Geräte \nZiel: Daten in Echtzeit übertragen, Prozesse überwachen und automatische Reaktionen durch CPS ermöglichen."
    },
    {
        title: "IoT vs. Internet-Protokolle – Kurz",
        textVertical: "IoT: leicht, echtzeitfähig • Internet: Standard",
        textHorizontal: "Internet: Computer/Server ↔ Internet (HTTP, TCP/IP), IoT: Geräte/Sensoren ↔ Echtzeit (MQTT, OPC UA, CoAP)",
        ptext: "• Internet: große Daten, selten Echtzeit, Energie unwichtig\n• IoT: kleine Daten, oft Echtzeit, energieeffizient\n• IoT-Protokolle: MQTT = leicht/PubSub, OPC UA = sicher/industriell, CoAP = REST/ressourcenarm\n• IoT ermöglicht vernetzte Sensorik und Aktorik in Smart Home, Industrie 4.0 oder CPS\n• Effiziente Datenübertragung und geringe Latenz sind entscheidend für zuverlässige Steuerung und Monitoring"
    },
    {
        title: "SPI – Serial Peripheral Interface",
        textVertical: "Schnell, synchron, Master-Slave",
        textHorizontal: "SPI ist ein synchrones serielles Protokoll zur Datenübertragung zwischen Mikrocontroller (Master) und Peripheriegeräten (Slave), z. B. Sensoren, Speicher, Displays.",
        ptext: "• Vollduplex: Master und Slave können gleichzeitig senden und empfangen\n• Leitungen: MISO (Master In Slave Out), MOSI (Master Out Slave In), SCLK (Clock), CS/SS (Chip Select)\n• Vorteile: sehr schnell, einfache Hardware, niedrige Latenz\n• Nachteile: mehrere Leitungen nötig, keine Adressierung für viele Geräte ohne zusätzliche CS-Leitungen\n• Einsatz: Verbindung von Mikrocontrollern mit Sensoren, Aktoren, Speichern, Displays in CPS oder IoT-Projekten"
    },
    {
        title: "MQTT – Topics & Publish/Subscribe",
        textVertical: "Datenkanäle (Topics) verwalten und Nachrichten veröffentlichen/empfangen, 3.	Topics & Publish/Subscribe → Datenverteilung ohne direkte Punkt-zu-Punkt-Verbindung",
        textHorizontal: "In MQTT werden Nachrichten über Topics ausgetauscht; Geräte veröffentlichen (publish) Daten oder abonnieren (subscribe) Topics, um Informationen zu empfangen.",
        ptext: "• Topic = Kanalname, z. B. home/livingroom/temperature\n• Publish = Gerät sendet Daten an ein Topic\n• Subscribe = Gerät empfängt Daten von einem Topic\n• Vorteil: Entkopplung der Geräte, skalierbar, energieeffizient\n• Einsatz: Smart Home, Industrie 4.0, CPS/IoT-Systeme, Sensordaten-Verteilung"
    },
    {
        title: "Weitere IoT-Protokolle",
        textVertical: "Spezielle Funk- und Mobilfunkstandards, die für unterschiedliche IoT-Anwendungen entwickelt wurden, von Smart Home bis industrielle Sensorik",
        textHorizontal: "IoT-Geräte nutzen Protokolle wie LoRaWAN, NB-IoT, LTE-M, ZigBee oder Z-Wave, um energieeffizient kleine Datenpakete über kurze oder große Distanzen zu übertragen.",
        ptext: "• LoRaWAN: Weitbereich, energieeffizient, kleine Sensordaten\n• NB-IoT / LTE-M: Mobilfunk, niedrige Bandbreite, geringer Stromverbrauch\n• ZigBee / Z-Wave: Kurzstrecken, Mesh-Netzwerke, Smart Home-Anwendungen"
    },
    {
        title: "Mobilfunktechnologien für IoT",
        textVertical: "Von 2G bis 5G: Entwicklungen für mobile Datenübertragung, die zunehmend IoT-Geräte unterstützen – von langsamen Sensoren bis zu Echtzeit-Steuerungen in Smart Cities und Industrie 4.0",
        textHorizontal: "Mobilfunkstandards wie GSM, GPRS, EDGE, UMTS, HSPA, LTE, LTE-M und 5G bieten unterschiedliche Datenraten, Latenzen und Energieeffizienz, um IoT-Geräte zuverlässig zu verbinden.",
        ptext: "• GSM / GPRS / EDGE: 2G- bis 2.75G-Technologien, langsam, energieeffizient, IoT-Anfangsphase\n• UMTS / HSPA / HSPA+: 3G / 3.5G, schnellere Daten, erste Multimedia-Anwendungen\n• LTE / 4G: hohe Datenrate, geringe Latenz, Echtzeit-IoT\n• LTE-M: 4G IoT, energieeffizient für batteriebetriebene Geräte\n• 5G: ultra-hohe Datenrate, extrem niedrige Latenz, viele Geräte gleichzeitig, Industrie 4.0 / Smart City"
    },
    {
        title: "Drahtlose Kommunikation mit kurzer Reichweite",
        textVertical: "Kompakte Funktechnologien für IoT und Smart Devices – energieeffizient, flexibel und ideal für Smart Home, Wearables und industrielle Sensoren",
        textHorizontal: "Technologien wie Wi-Fi, Bluetooth Classic, BLE, ZigBee und Z-Wave bieten unterschiedliche Reichweiten, Energieverbrauch und Netzwerkstrukturen für die Verbindung von Geräten über kurze Distanzen.",
        ptext: "• Wi-Fi: 10–100 m, hohe Datenrate, mittlerer Energieverbrauch, Smart Home & Industrie\n• Bluetooth Classic: 10–100 m, Datenübertragung zwischen Geräten, z. B. Audio und Dateien\n• BLE: 10–50 m, sehr energieeffizient, ideal für Sensoren, Wearables, IoT\n• ZigBee: 10–100 m, Mesh-Netzwerk, energieeffizient, Smart Home & Industrie\n• Z-Wave: 30–100 m, Mesh-Netzwerk für Heimautomatisierung, energieeffizient"
    },
    {
        title: "Nahfeldkommunikation (NFC & RFID)",
        textVertical: "Extrem kurze Reichweite für sichere, kontaktlose Kommunikation – ideal für Zugang, Bezahlung und Tracking",
        textHorizontal: "Technologien wie RFID und NFC ermöglichen die automatische Identifikation, Kontaktlos-Bezahlung, Zugangskontrolle oder Lagerverwaltung über wenige Zentimeter bis wenige Meter.",
        ptext: "• RFID: Reichweite wenige cm bis Meter, automatische Identifikation, Tracking, Lagerverwaltung\n• NFC: Reichweite 4–10 cm, sehr kurze Reichweite, kontaktloses Bezahlen, Zugangskontrolle, Smart Tags"
    },
    {
        title: "Low Power Wide Area Network (LPWAN)",
        textVertical: "Energieeffiziente Langstrecken-Kommunikation für IoT und Smart City Anwendungen",
        textHorizontal: "LPWAN-Technologien wie LoRaWAN, NB-IoT, Sigfox oder 4G/5G IoT ermöglichen IoT-Geräten eine energieeffiziente Datenübertragung über Kilometer hinweg, ideal für Sensorik, Industrie 4.0 und Smart Cities.",
        ptext: "• LoRaWAN: 2–15 km, 0,3–50 kbps, lange Reichweite, energieeffizient, IoT-Sensorik, Smart City\n• NB-IoT: 1–10 km, 20–250 kbps, Mobilfunkbasiert, energieeffizient, Smart Meter, Industrie-Sensoren\n• Sigfox: 3–10 km, <100 bps, sehr geringe Datenrate, extrem energieeffizient, IoT-Sensorik\n• 4G LTE IoT: 1–10 km, abhängig von LTE, energieeffizient, große Abdeckung\n• 5G IoT: 1–5 km, mehrere Gbps, ultra-niedrige Latenz, viele Geräte, Industrie 4.0, Smart City, autonomes Fahren"
    },
    {
        title: "MQTT – Grundlagen",
        textVertical: "Leichtgewichtiges Publish/Subscribe-Protokoll für IoT & CPS",
        textHorizontal: "MQTT ermöglicht IoT-Geräten und CPS eine energieeffiziente, nahezu echtzeitfähige Kommunikation über TCP/IP. Sensordaten, Steuerbefehle und Statusinformationen werden über Topics publiziert und abonniert.",
        ptext: "• Leichtgewichtig → geringe Datenmenge, ideal für batteriebetriebene IoT-Geräte\n• Echtzeitnah → schnelle Übertragung von Sensordaten, Steuerung und Automatisierung\n• TCP/IP-basiert → funktioniert über WLAN, Ethernet und Mobilfunknetze\n• Publish/Subscribe-Prinzip → Geräte publizieren auf Topics oder abonnieren sie, um Daten zu empfangen"
    },
    {
        title: "Publisher-Subscriber-Muster",
        textVertical: "MQTT nutzt Publish/Subscribe statt klassischem Client-Server",
        textHorizontal: "Publisher senden Daten an einen Broker, der sie an abonnierte Subscriber verteilt. Dadurch sind Geräte entkoppelt, skalierbar und energieeffizient.",
        ptext: "1. Publisher → Gerät oder Software sendet Daten an einen Message Broker, nicht direkt an Empfänger.\n   Beispiel: Temperatursensor sendet aktuelle Werte an den Broker.\n2. Subscriber → Abonniert ein Topic beim Broker und erhält automatisch alle relevanten Nachrichten.\n3. Broker → Vermittelt Nachrichten zwischen Publishern und Subscribern, verwaltet Topics, sorgt für Zuverlässigkeit und Sicherheit."
    },
    {
        title: "MQTT Broker",
        textVertical: "Broker vermittelt zwischen Publisher und Subscriber",
        textHorizontal: "Der Broker empfängt Nachrichten von Publishern, filtert sie nach Topics und verteilt sie an alle abonnierten Subscriber.",
        ptext: "Funktion:\n• Vermittlung von Nachrichten zwischen Publisher und Subscriber\n• Filterung nach Topics\n• Gewährleistung von Zuverlässigkeit und Sicherheit\nBeispiel: Ein Temperatursensor sendet home/livingroom/temperature → Broker leitet die Daten automatisch an alle Subscriber weiter, die dieses Topic abonniert haben."
    },
    {
        title: "MQTT Subscriber",
        textVertical: "Subscriber empfängt Nachrichten vom Broker",
        textHorizontal: "Ein Subscriber registriert sich für ein Topic und erhält automatisch alle relevanten Nachrichten vom Broker.",
        ptext: "Funktion:\n• Gerät oder Software abonniert ein bestimmtes Topic\n• Empfängt automatisch Nachrichten vom Broker\n• Geräte müssen nicht direkt miteinander kommunizieren → Skalierbar und energieeffizient\nBeispiel: Smartphone-App zeigt Temperatur an oder Klimaanlage passt Lüftung an, sobald neue Sensordaten eintreffen."
    },
    {
        title: "TLS / SSL in MQTT",
        textVertical: "Sichere Datenübertragung",
        textHorizontal: "TLS/SSL verschlüsselt die Kommunikation zwischen Client (Publisher/Subscriber) und Broker.",
        ptext: "Funktion:\n• Verschlüsselt Datenübertragung zwischen Client und Broker\n• Schützt vor Abhören (Eavesdropping) und Manipulation\n• Wichtig für sichere IoT- und CPS-Anwendungen, z. B. bei Smart Home oder Industrie 4.0"
    },
    {
        title: "Access Control / Authorisierung in MQTT",
        textVertical: "Zugriffskontrolle & Rechte",
        textHorizontal: "Regelt, welche Publisher oder Subscriber auf bestimmte Topics zugreifen dürfen.",
        ptext: "Funktion:\n• Definiert Rechte für Clients: wer darf publizieren oder abonnieren\n• Verhindert unbefugten Zugriff auf sensible Daten\n• Essentiell für sichere IoT- und CPS-Systeme, z. B. in Smart Home oder industriellen Anwendungen"
    },
    {
        title: "Quality of Service (QoS) in MQTT",
        textVertical: "Zuverlässigkeit der Nachrichtenübermittlung",
        textHorizontal: "Bestimmt, wie zuverlässig eine Nachricht vom Publisher zum Subscriber übertragen wird.",
        ptext: "QoS-Stufen:\n• QoS 0: höchstens einmal, keine Bestätigung (fire-and-forget)\n• QoS 1: mindestens einmal, Bestätigung erforderlich\n• QoS 2: genau einmal, gesichert durch vierstufigen Handshake\nNutzen: Erhöht die Zuverlässigkeit der Datenübertragung, wichtig für kritische IoT- und CPS-Anwendungen."
    },
    {
        title: "MQTT Message Telemetry / Transport",
        textVertical: "Nachrichten effizient übertragen",
        textHorizontal: "MQTT nutzt Topics für Publisher/Subscriber, kleine Nachrichtenpakete, TCP/IP oder TLS/SSL für Transport.",
        ptext: "Nachrichtenaufbau:\n• Topic: Kanal / Adresse, z. B. home/kitchen/temperature\n• Payload: Nachrichtinhalt, z. B. Temperatur 23,5 °C\n• QoS-Level: 0 (max. einmal), 1 (mind. einmal), 2 (genau einmal)\n• Optional: Retained Flag speichert letzte Nachricht auf Broker\nTransport erfolgt meist über TCP/IP, optional verschlüsselt via TLS/SSL. Effizient für kleine Nachrichten → ideal für IoT- und CPS-Anwendungen."
    },
    {
        title: "MQTT QoS 0 – Fire and Forget",
        textVertical: "Einfach & schnell • Keine Bestätigung",
        textHorizontal: "Publisher sendet Nachricht genau einmal, keine Bestätigung vom Broker, minimaler Netzwerkaufwand.",
        ptext: "MQTT QoS 0 bedeutet: Nachricht wird genau einmal gesendet, der Broker bestätigt nicht. Wenn sie unterwegs verloren geht, wird sie nicht erneut übertragen. Vorteil: sehr schnelle Übertragung, minimaler Netzwerkaufwand. Geeignet, wenn Echtzeit wichtiger ist als Zuverlässigkeit, z. B. Sensordaten, die regelmäßig aktualisiert werden. Merksatz: ‚Schick es einfach raus – egal, ob es ankommt.‘"
    },
    {
        title: "MQTT QoS 1 – At Least Once",
        textVertical: "Zuverlässig • Bestätigung erforderlich",
        textHorizontal: "Broker bestätigt jede Nachricht, bei fehlender Bestätigung wird erneut gesendet, mögliches Duplikat beim Subscriber.",
        ptext: "MQTT QoS 1 stellt sicher, dass jede Nachricht mindestens einmal ankommt. Der Broker bestätigt den Empfang, und falls keine Bestätigung erfolgt, wird die Nachricht erneut gesendet. Vorteil: höhere Zuverlässigkeit. Nachteil: Subscriber kann Nachrichten doppelt erhalten. Geeignet, wenn Zuverlässigkeit wichtiger ist als Duplikate, z. B. bei Alarmmeldungen oder wichtigen Steuerbefehlen."
    },
    {
        title: "MQTT QoS 2 – Exactly Once",
        textVertical: "Garantiert • Kein Duplikat",
        textHorizontal: "Broker und Client führen 4-Stufen-Handshake durch, Nachricht wird genau einmal zugestellt.",
        ptext: "MQTT QoS 2 gewährleistet, dass jede Nachricht genau einmal beim Subscriber ankommt. Dies wird durch einen 4-stufigen Handshake zwischen Broker und Client erreicht. Vorteil: höchste Zuverlässigkeit ohne Duplikate. Nachteil: langsamer und mehr Overhead. Einsatzgebiete: kritische oder finanzielle Daten, Steuerbefehle für Maschinen, Buchungen oder andere sensitive Anwendungen."
    },
    {
        title: "MQTT Last Will & Testament (LWT)",
        textVertical: "Letzte Nachricht bei Ausfall",
        textHorizontal: "Broker sendet automatisch eine hinterlegte Nachricht, wenn ein Client unerwartet ausfällt.",
        ptext: "Das MQTT LWT ermöglicht es, den plötzlichen Ausfall eines Clients zu erkennen. Beim Verbinden mit dem Broker hinterlegt der Client eine Nachricht (z. B. 'Sensor offline') auf einem bestimmten Topic. Wenn der Client unerwartet abstürzt oder die Verbindung abbricht, sendet der Broker diese Nachricht automatisch an alle Subscriber des Topics. Vorteil: Echtzeit-Statusüberwachung von Geräten. Beispiel: Temperatursensor meldet automatisch seinen Offline-Zustand bei Stromausfall oder Absturz."
    },
    {
        title: "MQTT LWT – Zweck & Funktionsweise",
        textVertical: "Letzte Nachricht bei unerwartetem Ausfall",
        textHorizontal: "LWT informiert automatisch über plötzliche Client-Ausfälle im IoT/CPS-System.",
        ptext: "Warum LWT? In CPS- oder IoT-Systemen können Geräte plötzlich ausfallen (Stromausfall, Netzwerkproblem, Absturz, Hardwaredefekt). Der Broker erkennt, wenn ein Client nicht sauber abmeldet, und sendet die hinterlegte Last Will & Testament-Nachricht. Funktionsweise: Beim Verbinden mit dem Broker übermittelt der Client die LWT-Konfiguration, bestehend aus Topic (Empfänger/Kanal) und Message (Inhalt). So werden Ausfälle zuverlässig kommuniziert, z. B. 'Sensor offline'."
    },
    {
        title: "MQTT – Message Persistence",
        textVertical: "Nachrichten werden gespeichert bis Zustellung",
        textHorizontal: "Broker speichert Nachrichten für offline Clients, wichtig für QoS 1 & 2 und Persistent Sessions.",
        ptext: "Message Persistence bedeutet, dass Nachrichten dauerhaft gespeichert werden, bis sie erfolgreich zugestellt wurden. Der Broker hält Nachrichten für Clients vor, die temporär offline sind. Funktioniert nur bei Persistent Sessions und QoS 1 oder 2. Beispiel: Ein Sensor sendet Temperaturdaten mit QoS 1, ein Empfänger ist offline. Der Broker speichert die Nachricht und liefert sie nach, sobald der Empfänger wieder online ist."
    },
    {
        title: "MQTT – Retained Messages",
        textVertical: "Nachricht dauerhaft gespeichert für neue Subscriber",
        textHorizontal: "Broker hält die letzte Nachricht eines Topics, neue Subscriber erhalten sofort die aktuelle Information.",
        ptext: "Eine Retained Message ist eine Nachricht, die der Broker speichert und dauerhaft auf einem Topic hält. Neue Subscriber bekommen sofort die letzte gespeicherte Nachricht, ohne warten zu müssen. Beispiel: Publisher sendet Topic 'sensor1/temperature', Payload '22°C', retain=true. Der Broker speichert die Nachricht und liefert sie sofort an jeden neuen Subscriber des Topics."
    },
    {
        title: "MQTT – Persistent Sessions",
        textVertical: "Zustand über Offline-Zeit behalten",
        textHorizontal: "Broker speichert Abonnements und verpasste Nachrichten, liefert sie nach, wenn Client wieder online ist.",
        ptext: "Eine Persistent Session speichert den Zustand eines Clients über dessen Offline-Zeit hinaus. Der Broker merkt sich, welche Topics der Client abonniert hat und welche QoS-1/2 Nachrichten verpasst wurden. Vorteil: Verpasste Nachrichten werden nachgeliefert, der Client muss sich nicht neu anmelden. Bei nicht-persistenter Sitzung (Clean Session = true) werden alle Daten beim Disconnect gelöscht."
    },
    {
        title: "MQTT – Keep Alive",
        textVertical: "Regelmäßiges Lebenszeichen",
        textHorizontal: "Client sendet regelmäßig Meldungen an Broker; fehlt das Signal, wird Client als offline betrachtet.",
        ptext: "Keep Alive ist ein Mechanismus, bei dem der Client in regelmäßigen Abständen ein Lebenszeichen an den Broker sendet. Fehlt dieses Signal innerhalb von 1,5 × KeepAlive-Zeit, geht der Broker davon aus, dass der Client ausgefallen ist, und löst gegebenenfalls das Last Will & Testament aus. Beispiel: Bei KeepAlive = 30 Sekunden wartet der Broker maximal 45 Sekunden auf ein Signal."
    },
    {
        title: "MQTT – WebSocket Transport",
        textVertical: "MQTT über Browser nutzen",
        textHorizontal: "MQTT kann über WebSockets laufen, ideal für Web-Dashboards und IoT-Apps.",
        ptext: "Normalerweise läuft MQTT über TCP, aber mit WebSockets lässt sich MQTT direkt im Browser verwenden. Vorteile: läuft über Port 80/443 (firewall-freundlich), ideal für Web-Dashboards, React/Angular IoT-Apps oder Visualisierungen. Ablauf: Browser → WebSocket → Broker."
    },
    {
        title: "MQTT – Performance",
        textVertical: "Schnell, leicht, energieeffizient",
        textHorizontal: "MQTT ist ideal für Sensoren, IoT und CPS: kleines Protokoll, TCP-Stabilität, QoS, geringer Energieverbrauch, auch bei schlechten Netzwerken.",
        ptext: "MQTT ist extrem ressourcensparend und schnell, perfekt für Sensoren, CPS, IoT-Geräte und mobile Geräte. Es hat nur wenige Byte Overhead, nutzt TCP für stabile Verbindungen, unterstützt QoS für zuverlässige oder schnelle Übertragung und ist energieeffizient. Ideal bei langsamen oder instabilen Netzwerken. Beispiel: Ein Temperatursensor sendet jede Sekunde Werte, MQTT minimiert Netzlast und Datendurchsatz."
    },
    {
        title: "MQTT – Skalierbarkeit & Sicherheit",
        textVertical: "Skalierbar, sicher, effizient",
        textHorizontal: "MQTT kann tausende bis Millionen Geräte gleichzeitig verwalten, dank entkoppelter Publisher/Subscriber-Struktur, Topics und Cluster-Brokern. Sicherheit durch TLS/SSL, Authentifizierung und Rechteverwaltung.",
        ptext: "MQTT ist extrem skalierbar und sicher. Durch die entkoppelte Publisher-Subscriber-Struktur und Topics können viele Geräte gleichzeitig kommunizieren, Broadcasts erfolgen einfach und Cluster-Broker unterstützen Lastverteilung. Sicherheit wird gewährleistet durch TLS/SSL-Verschlüsselung, Benutzer- und Token-Authentifizierung, Rechteverwaltung für Topics und sichere Netzwerkports (8883, 443). Perfekt für Industrie 4.0, Smart Cities, Smart Homes und Cloud-Systeme."
    },
    {
        title: "MQTT – Skalierbarkeit & Sicherheit",
        textVertical: "Skalierbar, sicher, effizient",
        textHorizontal: "MQTT kann tausende bis Millionen Geräte gleichzeitig verwalten, dank entkoppelter Publisher/Subscriber-Struktur, Topics und Cluster-Brokern. Sicherheit durch TLS/SSL, Authentifizierung und Rechteverwaltung.",
        ptext: "MQTT ist extrem skalierbar und sicher. Durch die entkoppelte Publisher-Subscriber-Struktur und Topics können viele Geräte gleichzeitig kommunizieren, Broadcasts erfolgen einfach und Cluster-Broker unterstützen Lastverteilung. Sicherheit wird gewährleistet durch TLS/SSL-Verschlüsselung, Benutzer- und Token-Authentifizierung, Rechteverwaltung für Topics und sichere Netzwerkports (8883, 443). Perfekt für Industrie 4.0, Smart Cities, Smart Homes und Cloud-Systeme."
    },
    {
        title: "OSI-Schichtenmodell – Überblick",
        textVertical: "7 Schichten für Netzwerkkommunikation",
        textHorizontal: "Das OSI-Modell teilt die Netzwerkkommunikation in sieben Schichten: Physikalisch, Datenlink, Vermittlung, Transport, Sitzung, Darstellung, Anwendung.",
        ptext: "Das OSI-Modell (Open Systems Interconnection) ist ein Referenzmodell, das die Netzwerkkommunikation in 7 Schichten unterteilt:\n\n1. **Physikalische Schicht (Physical Layer)**: Überträgt Bits über Kabel, Funk oder optische Medien.\n2. **Datenlink-Schicht (Data Link Layer)**: Zuständig für fehlerfreie Übertragung von Frames zwischen Knoten, z. B. Ethernet.\n3. **Vermittlungsschicht (Network Layer)**: Adressierung und Routing von Paketen, z. B. IP, 6LoWPAN.\n4. **Transportschicht (Transport Layer)**: Zuverlässiger Datentransfer zwischen Endsystemen, z. B. TCP, UDP.\n5. **Sitzungsschicht (Session Layer)**: Verwaltung von Sitzungen und Verbindungen zwischen Anwendungen.\n6. **Darstellungsschicht (Presentation Layer)**: Datenformatierung, Verschlüsselung, Kompression.\n7. **Anwendungsschicht (Application Layer)**: Schnittstelle für Benutzer und Anwendungen, z. B. HTTP, MQTT, FTP.\n\nJede Schicht erfüllt bestimmte Aufgaben, kommuniziert mit benachbarten Schichten und ermöglicht die standardisierte Vernetzung von Geräten und Systemen."
    },
    {
        title: "IoT-Protokolle – Überblick",
        textVertical: "Leichtgewichtig • Echtzeitnah • Energieeffizient",
        textHorizontal: "IoT-Protokolle sind speziell für kleine, energiearme Geräte entwickelt, übertragen Sensordaten effizient und ermöglichen Steuerung in Echtzeit.",
        ptext: "Die wichtigsten IoT-Protokolle:\n\n1. **MQTT (Message Queuing Telemetry Transport)**\n• Publish/Subscribe-Prinzip\n• Sehr leichtgewichtig, ideal für kleine Datenpakete\n• Echtzeitnahe Übertragung für Sensoren und Aktoren\n\n2. **CoAP (Constrained Application Protocol)**\n• REST-basiert wie HTTP, aber für energiearme Geräte optimiert\n• Für kleine Datenmengen und eingeschränkte Hardware\n\n3. **OPC UA (Open Platform Communications Unified Architecture)**\n• Industriestandard für Automatisierung\n• Unterstützt sichere, zuverlässige Kommunikation\n• Client/Server oder Publish/Subscribe\n\n4. **LoRaWAN**\n• Weitbereichsfunk (2–15 km)\n• Sehr energieeffizient, kleine Datenmengen\n• Ideal für Smart City, Sensorik, Industrie\n\n5. **NB-IoT / LTE-M**\n• Mobilfunkbasiert, energiesparend\n• Gute Abdeckung, niedrige Bandbreite\n• Für batteriebetriebene IoT-Geräte\n\n6. **ZigBee / Z-Wave**\n• Kurzstrecken-Funk, Mesh-Netzwerke\n• Energieeffizient, Smart Home Anwendungen\n\nMerkmale: leichte Protokolle, geringe Datenmengen, geringe Latenz, Energieeffizienz, geeignet für Sensordaten, CPS, IoT-Anwendungen."
    },
    {
        title: "Kommunikation in CPS – Überblick",
        textVertical: "Maschine ↔ Maschine • Automatisiert • Echtzeit",
        textHorizontal: "Cyber-Physical Systems (CPS) verbinden physische Prozesse mit digitalen Systemen. Sie kommunizieren automatisch über Netzwerke, Feldbusse oder IoT-Protokolle, um Sensordaten, Statusinformationen und Auftragsdaten auszutauschen.",
        ptext: "1. **CPS – Definition**\nCPS sind Systeme, die physische Prozesse (Maschinen, Sensoren, Roboter) mit der digitalen Welt (Software, Netzwerke, Datenbanken) verbinden.\nBeispiele: Produktionsanlagen, smarte Roboter, autonome Fahrzeuge, Industrie 4.0-Maschinen.\n\n2. **Machine-to-Machine (M2M)**\n• Maschinen tauschen automatisch Informationen aus, ohne menschliche Eingriffe.\n• Beispiele: Maschinenteile melden Fertigstellung, Sensor informiert Roboter über Temperatur, Verpackungsmaschine startet automatisch.\n• Vorteile: Automatisierung, weniger menschliche Fehler, höhere Geschwindigkeit, Smart Factory.\n\n3. **Automatisierter Informationsaustausch**\n• Systeme senden und empfangen ständig Sensordaten, Statusinformationen und Auftragsdaten.\n• Kommunikationswege: Ethernet, WLAN, Mobilfunk, Feldbusse (Profinet, Modbus, CAN-Bus), Industriestandards wie OPC UA.\n• Ziel: Echtzeitkontrolle, Vernetzung und effiziente Automatisierung."
    },
    {
        "title": "OPC UA – Standard für Industrie 4.0",
        "textVertical": "Offen • Sicher • Herstellerunabhängig",
        "textHorizontal": "OPC UA ist ein plattformunabhängiger Kommunikationsstandard, der Maschinen, Sensoren und Cloud-Systeme miteinander verbindet. Er überträgt nicht nur Daten, sondern komplette Informationsmodelle mit Struktur, Einheiten und Zuständen.",
        "ptext": "OPC UA ermöglicht es, dass Maschinen unterschiedlicher Hersteller Informationen wie Temperatur, Status, Fehlercodes oder Drehzahlen verstehen und darauf reagieren können. Vorteile: plattformunabhängig, sicher (TLS, Zertifikate), herstellerneutral, Informationsmodelle übertragbar. Merksatz: OPC UA = gemeinsame Sprache aller Maschinen."
    },
    {
        "title": "Schnittstellenstandards in der Industrie",
        "textVertical": "Interoperabilität • Einheitlich • Herstellerunabhängig",
        "textHorizontal": "Schnittstellenstandards sorgen dafür, dass Maschinen und Systeme verschiedener Hersteller zusammenarbeiten, Daten einheitlich strukturiert sind und die Kommunikation standardisiert abläuft.",
        "ptext": "Beispiele: OPC UA, MQTT, REST-APIs, Profinet, Profibus, Modbus, CANopen. Vorteil: Jede Maschine oder jedes System kann problemlos mit anderen Geräten interagieren. Merksatz: Schnittstellenstandards = einheitliche Sprache für Systeme."
    },
    {
        "title": "Industrie 4.0 Anforderungen und OPC UA",
        "textVertical": "Herstellerunabhängig • Skalierbar • Flexibel",
        "textHorizontal": "OPC UA erfüllt zentrale Anforderungen der Industrie 4.0: Maschinen verschiedener Hersteller können ohne Sonderlösungen kommunizieren, und das System ist skalierbar von Sensoren bis zur Cloud.",
        "ptext": "1️⃣ Herstellerunabhängigkeit: Alle Maschinen sprechen dieselbe Sprache, Integration einfach, Kosten geringer.\n2️⃣ Skalierbarkeit: Funktioniert auf allen Ebenen – von kleinen Sensoren bis zu großen Servern, wächst mit der Anlage mit."
    },
    {
        "title": "Sicherheit (Security) bei OPC UA",
        "textVertical": "Verschlüsselung • Authentifizierung • Rechteverwaltung",
        "textHorizontal": "OPC UA sorgt für sichere Kommunikation in Industrie 4.0-Systemen durch Verschlüsselung, Authentifizierung und Rechteverwaltung auf allen Ebenen.",
        "ptext": "✔ Transportverschlüsselung: TLS/SSL schützt Daten vor Abhören und Manipulation.\n✔ Authentifizierung: Clients und Server nutzen Zertifikate oder Benutzeranmeldung.\n✔ Rechteverwaltung: Broker legt fest, wer welche Daten lesen oder schreiben darf.\nVorteil: Schutz kritischer Produktionsdaten und sichere Interaktion zwischen Maschinen."
    },
    {
        "title": "Serviceorientierung (SOA) bei OPC UA",
        "textVertical": "Services • Flexibilität • Integration",
        "textHorizontal": "OPC UA bietet Geräte-Services wie ‚Lese Temperatur‘ oder ‚Starte Motor‘, die von anderen Maschinen genutzt werden können.",
        "ptext": "✔ Geräte bieten Services (z. B. Daten lesen, Aktionen ausführen)\n✔ Maschinen können Services anderer Geräte nutzen\n✔ Vorteil: intelligente, flexible Steuerung und einfache Integration in IT-Systeme wie ERP, MES oder Cloud"
    },
    {
        "title": "Prüfbarkeit mit OPC UA",
        "textVertical": "Struktur • Zeitstempel • Historie • Audit",
        "textHorizontal": "OPC UA überträgt Daten klar strukturiert, mit Zeitstempeln, speichert Historie und dokumentiert Änderungen für Prüfbarkeit.",
        "ptext": "✔ Eindeutige Datenstruktur (Name, Einheit, Typ, Zeitstempel, Quelle)\n✔ Zeitstempel & Events gewährleisten Reihenfolge und Nachvollziehbarkeit\n✔ Historische Daten ermöglichen Rückverfolgung und Analyse\n✔ Auditierbarkeit dokumentiert Benutzeraktionen und Änderungen\n✔ Einheitliche Kommunikation sorgt für überprüfbare Interaktion zwischen Geräten\n\nKurz: OPC UA macht Prozesse und Daten transparent, prüfbar und nachvollziehbar."
    },
    {
        "title": "OPC UA Architektur – verständlich erklärt",
        "textVertical": "TCP • Client-Server • Adressierung • Moderne Technologien",
        "textHorizontal": "OPC UA verbindet Geräte über TCP/IP, nutzt Client-Server-Prinzip, adressiert Server per IP/Namen und integriert moderne Technologien für Sicherheit, IoT und Cloud.",
        "ptext": "✔ TCP-basiertes Protokoll: stabile, schnelle und zuverlässige Verbindung, funktioniert in Standard-Netzwerken\n✔ Client-Server-Prinzip: Server stellt Daten/Dienste bereit, Clients fragen ab, hohe Flexibilität\n✔ Adressierung: IP-Adressen oder Gerätenamen, automatische Entdeckung via Local Discovery Server oder Multicast\n✔ Moderne Technologien: TLS-Verschlüsselung, JSON/WebSockets, MQTT, Cloud-Integration, Publisher/Subscriber-Modell\n\nKurz: OPC UA Architektur sorgt für sichere, flexible und zukunftsfähige Kommunikation in Industrie 4.0-Systemen."
    },
    {
        "title": "OPC UA Architektur – verständlich erklärt",
        "textVertical": "TCP • Client-Server • Adressierung • Moderne Technologien • Edge-Computing",
        "textHorizontal": "OPC UA verbindet Geräte über TCP/IP, nutzt Client-Server-Prinzip, adressiert Server per IP/Namen, integriert moderne Technologien und unterstützt Edge-Computing für lokale Datenverarbeitung.",
        "ptext": "✔ TCP-basiertes Protokoll: stabile, schnelle und zuverlässige Verbindung, funktioniert in Standard-Netzwerken\n✔ Client-Server-Prinzip: Server stellt Daten/Dienste bereit, Clients fragen ab, hohe Flexibilität\n✔ Adressierung: IP-Adressen oder Gerätenamen, automatische Entdeckung via Local Discovery Server oder Multicast\n✔ Moderne Technologien: TLS-Verschlüsselung, JSON/WebSockets, MQTT, Cloud-Integration, Publisher/Subscriber-Modell\n✔ Edge-Computing: Datenverarbeitung direkt an der Anlage oder Sensor, reduziert Latenz, entlastet Cloud\n\nKurz: OPC UA Architektur sorgt für sichere, flexible, skalierbare Kommunikation in Industrie 4.0-Systemen und unterstützt lokale Edge-Computing-Integration."
    },
    {
        "title": "OPC UA – Live-Datenzugriff & Wartung",
        "textVertical": "Live-Daten • Echtzeit • Subscriptions • Wartung • Monitoring",
        "textHorizontal": "OPC UA ermöglicht direkten Zugriff auf aktuelle Maschinendaten in Echtzeit. Clients können lesen, auf Ereignisse reagieren und Änderungen abonnieren. Wartung wird vereinfacht durch standardisierte Datenstruktur, einfache Fehlersuche und leichtere Integration neuer Maschinen.",
        "ptext": "✔ Live-Datenzugriff: Temperatur, Drehmoment, Produktionsstatus, Fehlermeldungen\n✔ Echtzeit-Reaktionen: Clients abonnieren Änderungen, reagieren sofort\n✔ Vorteile: aktuelle Zustände sichtbar, schnelle Entscheidungen, moderne Dashboards\n✔ Vereinfachte Wartung: gleiche Struktur auf allen Maschinen, einfache Fehlersuche, Updates ohne Umbau, neue Maschinen leichter integrierbar\n\nKurz: OPC UA sorgt für Echtzeit-Datenzugriff, schnelle Reaktionen und standardisierte, wartungsfreundliche Anlagenintegration."
    },
    {
        "title": "SPS – Speicherprogrammierbare Steuerung",
        "textVertical": "SPS • Automatisierung • Steuerung • Industrie 4.0 • Maschinensteuerung • Sensorik • Aktorik • Echtzeit • Zuverlässigkeit",
        "textHorizontal": "Eine SPS ist ein spezialisiertes elektronisches Gerät zur Automatisierung von Maschinen und Prozessen. Sie verarbeitet Eingaben von Sensoren, führt programmierten Logik-Code aus und steuert Aktoren wie Motoren, Ventile oder Relais. SPSen sind robust, zuverlässig und auf Echtzeitanforderungen ausgelegt.",
        "ptext": "✔ Eingaben: Sensoren, Schalter, Signale erfassen\n✔ Logik: Steuerungsprogramme ausführen (z. B. Ladder Diagram, FBD, ST)\n✔ Ausgaben: Aktoren wie Motoren, Ventile, Relais steuern\n✔ Vorteile: hohe Zuverlässigkeit, Echtzeitfähigkeit, Industrieeinsatz\n\nKurz: SPS steuert Maschinen automatisiert, sicher und in Echtzeit, zentral in Industrie 4.0-Anlagen."
    },
    {
        "title": "Schnittstellen CPS – Kommunikation zwischen Systemen",
        "textVertical": "CPS • Schnittstellen • OPC UA • MQTT • Echtzeit • Maschinen • Roboter • Informationsfluss • Automatisierung • Industrie 4.0",
        "textHorizontal": "CPS (Cyber-Physical Systems) nutzen Schnittstellen, um Maschinen, Anlagen und Informationssysteme zu verbinden. Über Standards wie OPC UA oder MQTT tauschen sie Daten, steuern Abläufe und überwachen Prozesse in Echtzeit. Beispiel: Eine CNC-Maschine meldet Fertigstellung, der Roboter startet automatisch den nächsten Bearbeitungsschritt, das Qualitätssystem verarbeitet Messdaten und sendet Rückmeldungen.",
        "ptext": "✔ Integration physischer Prozesse, Informationssysteme und Material-/Energieflüsse\n✔ Kommunikation über Schnittstellen (OPC UA, MQTT)\n✔ Echtzeitüberwachung und Steuerung\n✔ Automatisierte, effiziente und flexible Produktionsprozesse\n\nKurz: CPS vernetzt Maschinen und Systeme, sodass Abläufe automatisch koordiniert, gesteuert und optimiert werden können."
    },
    {
        "title": "Überwachung & Sensorik in CPS",
        "textVertical": "Monitoring • Sensoren • Videoüberwachung • Zutrittskontrolle • Power-Monitoring • Luftzirkulation • Wasserleck • Umwelt • Sicherheit • Alarm • CPS",
        "textHorizontal": "In einem CPS-Unternehmensumfeld arbeiten verschiedene Überwachungs- und Sensorsysteme zusammen. Monitorsysteme und Netzwerkmanagement erkennen Netzausfälle oder Kommunikationsstörungen. Power-Monitoring überwacht Stromversorgung und erkennt Überlastungen. Videoüberwachung und Zutrittskontrollen sichern sensible Bereiche. Smarte Sensoren messen Temperatur, Luftfeuchtigkeit, Wasserstände und lösen bei Gefahr Alarm aus. Alle Systeme tragen dazu bei, Schäden, Produktionsstillstände und Sicherheitsrisiken frühzeitig zu erkennen.",
        "ptext": "✔ Echtzeitüberwachung von IT, Energie und Umwelt\n✔ Früherkennung von Störungen, Überlastung, Feuer oder Wasser\n✔ Integration von Video, Zutritt und Sensorik\n✔ Effiziente und sichere Produktionsprozesse\n\nKurz: CPS nutzt vernetzte Systeme, um Gefahren frühzeitig zu erkennen und Produktions- und Sicherheitsrisiken zu minimieren."
    },
    {
        "title": "Vergleich Mechanisch vs. CPS",
        "textVertical": "Mechanisch • CPS • Steuerung • Sensorik • Aktoren • Informationsfluss • Vernetzung • Automatisierung • Diagnose • Flexibilität",
        "textHorizontal": "Mechanische Systeme arbeiten meist rein physikalisch oder mit einfachen elektrischen Steuerungen. Der Informationsfluss ist gering und Anpassungen erfordern Umbauten. CPS hingegen verbinden digitale Steuerungen mit Sensorik, Aktoren und Software. Sie ermöglichen kontinuierlichen Informationsfluss, Vernetzung über OPC UA, MQTT oder andere Protokolle und Echtzeitüberwachung. Anpassungen erfolgen flexibel über Software, und die Systeme arbeiten vollautomatisch und selbstregelnd.",
        "ptext": "✔ Mechanisch: starr, geringe Flexibilität, manuelle Überwachung\n✔ CPS: intelligent, vernetzt, automatisiert, Echtzeitüberwachung\n\nMechatronisches System = Mechanik + Elektronik/Sensorik + Informatik/Software → ermöglicht integrierte Steuerung und Regelung."
    },
    {
        "title": "CPS als Blackbox",
        "textVertical": "CPS • Blackbox • Ein- und Ausgänge • Sensoren • Steuerbefehle • Energiefluss • Materialfluss • Maschinenaktionen • Statusmeldungen • Integration",
        "textHorizontal": "Betrachtet man ein CPS als Blackbox, sieht man nur die Ein- und Ausgänge, nicht die internen Abläufe. Eingänge können Sensordaten, Steuerbefehle oder Energie- und Materialzufuhr sein. Ausgänge sind Maschinenaktionen, Statusmeldungen oder Daten an andere Systeme. Diese Sichtweise erleichtert Analyse, Integration und Monitoring, ohne alle Details der internen Steuerung kennen zu müssen.",
        "ptext": "✔ Ein- und Ausgänge sichtbar, interne Prozesse verborgen\n✔ Eingänge: Sensordaten, Steuerbefehle, Energie/Material\n✔ Ausgänge: Maschinenaktionen, Statusmeldungen, Datenweitergabe\n✔ Vorteil: Analyse und Integration möglich ohne tiefes Wissen über interne Steuerung"
    },
    {
        "title": "Schnittstellen des Netzwerks bei CPS",
        "textVertical": "CPS • Schnittstellen • Protokolle • OPC UA • MQTT • Ethernet • WLAN • M2M • Leitstand • Cloud • Edge Devices",
        "textHorizontal": "CPS kommunizieren über OPC UA, MQTT, Ethernet oder WLAN; Datenfluss zu Leitstand, Cloud und Edge.",
        "ptext": "✔ CPS nutzen standardisierte Schnittstellen für Kommunikation und Datenaustausch\n✔ Beispiele: OPC UA, MQTT, Ethernet, WLAN\n✔ Maschinen tauschen Daten direkt miteinander (M2M)\n✔ Anbindung an Leitstand, Cloud-Systeme und Edge Devices möglich\n✔ Integration von Analyse-, Monitoring- und Überwachungssystemen\n✔ Ermöglicht dezentrale, vernetzte Produktionssysteme mit Echtzeitdaten"
    },
    {
        "title": "GPIO (General Purpose Input / Output)",
        "textVertical": "GPIO • Input • Output • Digital • High • Low • LEDs • Taster • Relais • Sensoren • Programmierbar",
        "textHorizontal": "Universelle Pins für digitale Ein-/Ausgänge; lesen oder setzen High/Low; LEDs, Taster, Relais, Sensoren.",
        "ptext": "✔ GPIO = frei programmierbare digitale Pins\n✔ Können Zustände lesen (Input) oder ausgeben (Output)\n✔ Verwendbar für LEDs, Knöpfe/Taster, Relais und digitale Sensoren\n✔ Einfaches Interface für Steuerung und Signalerfassung\n✔ Grundbaustein für Mikrocontroller- und IoT-Projekte"
    },
    {
        "title": "UART (Universal Asynchronous Receiver/Transmitter)",
        "textVertical": "UART • Seriell • Asynchron • RX • TX • Kommunikation • Leitung • Mikrocontroller • IoT • Daten • Verbindung",
        "textHorizontal": "Serielle, asynchrone Kommunikation über RX/TX-Leitungen; weit verbreitet für Mikrocontroller und IoT.",
        "ptext": "✔ UART = serielle Schnittstelle für Mikrocontroller\n✔ Asynchron: kein Takt-Signal nötig\n✔ Zwei Leitungen: RX (Empfang), TX (Senden)\n✔ Ideal für einfache Datenübertragung zwischen Geräten\n✔ Weit verbreitet bei Sensoren, Aktoren, Modulen\n✔ Grundlage für Debugging, Programmierung und Daten-Logging"
    },
    {
        "title": "UART – RX & TX",
        "textVertical": "UART • RX • TX • Seriell • Asynchron • Mikrocontroller • Kommunikation • Daten • Debugging • Module • Verbindung",
        "textHorizontal": "TX sendet Daten, RX empfängt Daten; Kommunikation erfolgt kreuzweise (TX→RX, RX→TX). Typisch für Microcontroller, GPS, Bluetooth und Debugging.",
        "ptext": "✔ TX = sendet Daten\n✔ RX = empfängt Daten\n✔ Kreuzweise Verdrahtung: TX→RX, RX→TX\n✔ Typische Nutzung: Kommunikation zwischen Mikrocontroller und PC, GPS-Modul, Bluetooth-Modul (HC-05)\n✔ Weit verbreitet für Debugging und Daten-Logging\n✔ Einfache, robuste serielle Schnittstelle"
    },
    {
        "title": "I²C – Inter-Integrated Circuit",
        "textVertical": "I²C • SDA • SCL • Master • Slave • Bus • Datenleitung • Taktleitung • Adresse • Sensoren • Displays",
        "textHorizontal": "Zweidraht-Bus mit SDA (Daten) und SCL (Takt), Master/Slave-Prinzip. Viele Geräte können über wenige Leitungen gesteuert werden, jedes hat eine eigene Adresse.",
        "ptext": "✔ Zweidraht-Bus: SDA = Daten, SCL = Takt\n✔ Master/Slave-Prinzip: Master steuert Kommunikation, Slaves antworten\n✔ Mehrere Geräte an einem Bus möglich, jedes mit eindeutiger Adresse\n✔ Typische Nutzung: Temperatur-/Feuchtigkeitssensoren (BME280), OLED-Displays, Echtzeituhr (RTC)\n✔ Vorteil: wenige Leitungen, trotzdem viele Geräte anschließbar\n✔ Ideal für Microcontroller-Projekte mit mehreren Sensoren"
    },
    {
        "title": "SPI – Serial Peripheral Interface",
        "textVertical": "SPI • MOSI • MISO • SCK • CS • Master • Slave • Bus • Datenleitung • Taktleitung • Sensoren • Displays",
        "textHorizontal": "Schneller Mehrleitungs-Bus für Master/Slave-Kommunikation. Daten werden über MOSI/MISO übertragen, SCK liefert den Takt, CS wählt das Gerät aus.",
        "ptext": "✔ Mehrleitungs-Bus: MOSI = Master Out, MISO = Master In, SCK = Takt, CS = Chip Select\n✔ Master/Slave-Prinzip: Master steuert Kommunikation, Slaves antworten\n✔ Hohe Geschwindigkeit, ideal für schnelle Datenübertragung\n✔ Typische Nutzung: SD-Karten, Displays, Sensoren, Flash-Speicher\n✔ Vorteil: schnelle Kommunikation, mehrere Geräte über separate CS-Leitungen\n✔ Geeignet für Microcontroller-Projekte mit hoher Datenrate"
    },
    {
        "title": "CRUD – Grundoperationen der Datenverarbeitung",
        "textVertical": "CRUD • Create • Read • Update • Delete • Datenbank • App • Datensatz • Benutzer • Anlegen • Lesen • Bearbeiten • Löschen",
        "textHorizontal": "CRUD beschreibt die vier Basisoperationen auf Daten: C = Create, R = Read, U = Update, D = Delete. Anwendbar in Datenbanken oder Apps.",
        "ptext": "✔ Create: Daten anlegen, z. B. neuen Benutzer erstellen\n✔ Read: Daten lesen, z. B. Kundendaten anzeigen\n✔ Update: Daten ändern, z. B. Adresse aktualisieren\n✔ Delete: Daten löschen, z. B. Datensatz entfernen\n✔ Datenbankbeispiele: INSERT, SELECT, UPDATE, DELETE\n✔ App-Beispiele: Benutzer erstellen, anzeigen, bearbeiten, löschen\n✔ Merksatz: CRUD = Anlegen, Lesen, Bearbeiten, Löschen – die Grundfunktionen jeder Datenverarbeitung."
    },
    {
        "title": "Strukturpläne – Zweck und Nutzen",
        "textVertical": "Strukturpläne • Übersicht • Hierarchie • Prozesse • Abläufe • Systeme • Module • Aufgaben • Organisation • Visualisierung",
        "textHorizontal": "Strukturpläne visualisieren die Hierarchie oder Organisation eines Systems, Prozesses oder Projekts. Sie zeigen, wie Komponenten oder Aufgaben zusammenhängen.",
        "ptext": "✔ Übersicht: Alle Komponenten, Module oder Aufgaben auf einen Blick\n✔ Hierarchie: Beziehungen zwischen übergeordneten und untergeordneten Elementen erkennen\n✔ Abläufe: Prozesse oder Funktionen strukturiert darstellen\n✔ Organisation: Verantwortlichkeiten und Zuständigkeiten sichtbar machen\n✔ Vorteile: Einfaches Verständnis komplexer Systeme, Unterstützung bei Planung, Analyse und Kommunikation\n✔ Einsatz: Software-Architektur, Unternehmensprozesse, Produktionsabläufe, CPS-Strukturen"
    },
    {
        "title": "Strukturplan – Elemente: Sequenzblock",
        "textVertical": "Strukturplan • Sequenzblock • Ablauf • Anweisungen • Schritt-für-Schritt • Reihenfolge • Prozess • Steuerung • CPS • Visualisierung",
        "textHorizontal": "Ein Sequenzblock stellt die Abfolge von Anweisungen oder Schritten dar. Mehrere Aktionen werden untereinander ausgeführt, jeweils nacheinander.",
        "ptext": "✔ Einfachste Form eines Strukturplans\n✔ Jede Zeile = eine Aktion / Anweisung\n✔ Reihenfolge ist entscheidend\n✔ Typische Nutzung: Programmschritte in Software, Steuerungsabläufe in CPS, Produktionsschritte in Anlagen\n✔ Vorteil: Klar strukturiert, leicht verständlich, gut für lineare Abläufe\n✔ Beispiel:\n  1. Sensor auslesen\n  2. Wert prüfen\n  3. Aktor schalten"
    },
    {
        "title": "VUCA – Begriffserklärung",
        "textVertical": "VUCA • Volatilität • Unsicherheit • Komplexität • Ambiguität • Veränderung • Risiko • Entscheidung • Strategie • Management",
        "textHorizontal": "VUCA beschreibt die Herausforderungen in dynamischen, unsicheren und komplexen Umgebungen, z. B. in Unternehmen, Projekten oder CPS.",
        "ptext": "✔ Volatilität (Volatility): schnelle, unvorhersehbare Veränderungen\n✔ Unsicherheit (Uncertainty): mangelnde Vorhersehbarkeit von Ereignissen\n✔ Komplexität (Complexity): viele miteinander verknüpfte Faktoren, schwer zu überblicken\n✔ Ambiguität (Ambiguity): Mehrdeutigkeit von Informationen, unklare Zusammenhänge\n✔ Bedeutung: VUCA macht Planung, Entscheidung und Steuerung in Unternehmen oder Projekten schwieriger, erfordert flexible Strategien, schnelle Reaktionen und robustes Risikomanagement"
    },
    {
        "title": "Akzeptanzkriterien",
        "textVertical": "Akzeptanzkriterien • User Story • Fertig • Testbar • Messbar • Given-When-Then • Klarheit • Verständlich • Entwickler & Kunde",
        "textHorizontal": "Akzeptanzkriterien zeigen klar, wann eine User Story erfüllt ist. Sie sind testbar, messbar und verhindern Missverständnisse zwischen Entwickler und Kunde.",
        "ptext": "✔ Definieren, wann eine Anforderung als erfüllt gilt\n✔ Verhindern Missverständnisse zwischen Entwickler, Tester und Kunde\n✔ Testbar, messbar, eindeutig und verständlich\n✔ Häufig mit Given-When-Then strukturiert\n✔ Beispiel Login: gültige Daten → Login erfolgreich; falsches Passwort → Fehlermeldung; leeres Feld → Hinweis 'Bitte ausfüllen'\n✔ So wird sichergestellt, dass alle Beteiligten dasselbe Verständnis von Fertigstellung und Funktionalität haben."
    },
    {
        "title": "Use Case – Elemente & Bedeutung",
        "textVertical": "Use Case • Akteur • Ziel • System • Ablauf • Szenario • Alternativszenario • Fehlerbehandlung • Tests • Anforderungen",
        "textHorizontal": "Use Cases beschreiben, wie ein Akteur ein Ziel im System erreicht. Sie zeigen Schritt-für-Schritt-Abläufe, Systemgrenzen und mögliche Sonderfälle auf.",
        "ptext": "✔ Akteur: wer nutzt das System (Mensch, anderes System, Organisation)\n✔ Ziel: was will der Akteur erreichen (z. B. Login, Produkt bestellen)\n✔ System: welche Anwendung stellt die Funktion bereit\n✔ Ablauf/Szenario: Schritt-für-Schritt Beschreibung, wie Ziel erreicht wird\n✔ Alternativszenarien: Fehlerfälle oder Sonderfälle (z. B. Zahlung fehlschlägt)\n\nUse Cases sind wichtig, weil sie Anforderungen sichtbar machen, Entwicklern das Verständnis erleichtern und die Grundlage für Tests bilden."
    },
    {
        "title": "JIRA – Projektmanagement & Aufgabenverwaltung",
        "textVertical": "JIRA • Atlassian • Projektmanagement • Aufgaben • Issue Tracking • Scrum • Kanban • Workflow • Reporting • Teams",
        "textHorizontal": "JIRA ist ein Tool für Projektmanagement, Aufgabenverwaltung und Softwareentwicklung. Es hilft Teams, Aufgaben zu planen, zu verfolgen und den Fortschritt sichtbar zu machen.",
        "ptext": "✔ Issue Tracking: alle Aufgaben, Bugs oder Tickets erfassen und verfolgen\n✔ Projektmanagement: Aufgaben in Projekten, Sprints oder Boards organisieren\n✔ Workflow-Steuerung: Fortschritt jeder Aufgabe sichtbar (To Do → In Bearbeitung → Fertig)\n✔ Dokumentation & Reporting: Fortschrittsberichte erstellen\n\nJIRA unterstützt Teams dabei, effizient zusammenzuarbeiten und agile Projekte wie Scrum oder Kanban transparent zu steuern."
    },
    {
        "title": "Agile Softwareentwicklung mit JIRA",
        "textVertical": "Agil • Scrum • Kanban • Issue • To Do • In Bearbeitung • Done • Board • Aufgaben • Fortschritt",
        "textHorizontal": "JIRA visualisiert Aufgaben und Fortschritt in agilen Projekten, damit Teams effizient zusammenarbeiten können.",
        "ptext": "✔ Issue erhält ein Entwickler (z. B. 'Login-Fehler beheben')\n✔ Aufgaben werden auf dem Board angezeigt: 'To Do', 'In Bearbeitung', 'Done'\n✔ Entwickler arbeitet an Issue und ändert Status entsprechend\n✔ Projektmanager erhält Übersicht über Fortschritt und offene Aufgaben\n\nJIRA sorgt für Transparenz, erleichtert die Koordination und unterstützt agile Methoden wie Scrum und Kanban."
    },
    {
        "title": "DevOps – Entwicklung & Betrieb vereint",
        "textVertical": "DevOps • CI • CD • Automatisierung • Monitoring • Zusammenarbeit • Feedback • Deployment • Qualität • Tools",
        "textHorizontal": "DevOps verbindet Entwicklung und Betrieb, um Software schneller, zuverlässiger und effizienter zu liefern.",
        "ptext": "✔ Entwicklung und Betrieb arbeiten eng zusammen, Silos werden aufgelöst\n✔ Kontinuierliche Integration (CI) testet Code automatisch\n✔ Kontinuierliche Lieferung / Deployment (CD) sorgt für schnelle Updates\n✔ Automatisierung von Tests, Builds und Deployment reduziert Fehler\n✔ Monitoring und Feedback verbessern Qualität und Reaktionsfähigkeit\n\nBeispiele für DevOps-Tools: Git, GitHub, GitLab, Jenkins, Docker, Kubernetes, Ansible, Prometheus, Grafana."
    },
    {
        "title": "Agile Softwareentwicklung",
        "textVertical": "Agil • Iterativ • Kundenorientiert • Flexibel • Teamarbeit • Kommunikation • Transparenz • Feedback • Inkrementell • Boards",
        "textHorizontal": "Agile Softwareentwicklung liefert Software iterativ, flexibel und kundenorientiert, reagiert schnell auf Änderungen und priorisiert funktionierende Teilprodukte.",
        "ptext": "✔ Software wird in kleinen, funktionierenden Schritten entwickelt (inkrementell)\n✔ Regelmäßiges Feedback vom Kunden ermöglicht Anpassungen\n✔ Anforderungen können flexibel geändert werden\n✔ Enges, selbstorganisiertes Team mit täglicher Abstimmung\n✔ Fortschritt sichtbar über Boards, Burndown-Charts oder Tickets\n\nZiel: Schnell funktionierende Software liefern, die den tatsächlichen Bedürfnissen des Kunden entspricht."
    },
    {
        "title": "Methoden der agilen Softwareentwicklung",
        "textVertical": "Scrum • Kanban • XP • Sprints • Backlog • Review • Retrospektive • Pair Programming • Kundenfeedback • Iterationen",
        "textHorizontal": "Agile Methoden wie Scrum, Kanban und XP organisieren Arbeit flexibel, sichtbar und kundenorientiert. Aufgaben werden iterativ umgesetzt, getestet und angepasst.",
        "ptext": "✔ Scrum: Arbeit in Sprints, Rollen Product Owner, Scrum Master, Team; Tools: Backlog, Sprint-Planung, Review, Retrospektive\n✔ Kanban: Aufgaben auf Board visualisiert, Fokus auf Fluss optimieren\n✔ Extreme Programming (XP): Fokus auf Codequalität, Tests, Pair Programming\n\nBeispiel: Login-Funktion, Suchfunktion, Warenkorb werden iterativ entwickelt, nach jeder Iteration getestet und angepasst → funktionierende App entsteht Schritt für Schritt.\n\nMerksatz: Agile Softwareentwicklung = Schrittweise, flexibel, kundenorientiert entwickeln."
    },
    {
        "title": "DevOps-Projektziele & Konzept",
        "textVertical": "Ziele • CI/CD • Automatisierung • Monitoring • Feedback • Agil • Zusammenarbeit • Qualität • Kontinuierliche Verbesserung • Kultur",
        "textHorizontal": "DevOps-Projekte verbinden Entwicklung und Betrieb, um Software schnell, zuverlässig und qualitativ hochwertig bereitzustellen. Automatisierung, Monitoring und Feedback sind zentrale Bestandteile.",
        "ptext": "✔ Ziele: schnelle Softwarebereitstellung, hohe Qualität, kontinuierliche Verbesserung, enge Zusammenarbeit, Prozessautomatisierung\n✔ Konzept: Integration von Dev + Ops, CI/CD, Monitoring & Feedback\n✔ Ansatz: Agile Methoden + Automatisierung, Monitoring, kollaborative Kultur\n✔ Phasen: Planen → Entwickeln → Build & Test → Deploy → Operate/Monitor → Feedback/Improve → Zyklus wiederholen\n✔ Mini-Beispiel: DevOps-Projekt „Onlineshop“ – Feature suchen entwickeln, testen, deployen, überwachen, Feedback umsetzen\n\nMerksatz: DevOps-Projekte sind iterative, automatisierte und kollaborative Zyklen, die schnelle Lieferung, hohe Qualität und kontinuierliche Verbesserung ermöglichen."
    },
    {
        "title": "Unit Tests & Qualitätssicherung",
        "textVertical": "Unit Test • Funktion • Komponente • Automatisierbar • CI/CD • Prototypen • Fehlersuche • Regression • Refactoring • Qualität",
        "textHorizontal": "Unit Tests prüfen einzelne Funktionen oder Komponenten des Codes. Sie sind automatisierbar, wiederholbar und Teil von CI/CD-Pipelines. Zusammen mit Prototypen und systematischer Fehlersuche sichern sie Softwarequalität.",
        "ptext": "✔ Ziel: prüfen, ob einzelne Codeeinheiten korrekt arbeiten\n✔ Vorteile: Fehler früh erkennen, Refactoring ohne Risiko, Dokumentation der Funktion, Integration in CI/CD\n✔ Verbindung: Prototypen → frühes Feedback, Unit Tests → Absicherung einzelner Funktionen, effiziente Fehlersuche → schnelle Problemlösung\n✔ Mini-Merkregel: Prototypen testen Ideen früh, Unit Tests prüfen kleine Codeeinheiten, effiziente Fehlersuche erkennt Fehler schnell\n\nMerksatz: Unit Tests sichern die Qualität kleiner Codeeinheiten, helfen Regressionen zu vermeiden und beschleunigen die Softwareentwicklung."
    },
    {
        "title": "SRE (Site Reliability Engineering)",
        "textVertical": "SRE • Zuverlässigkeit • Automatisierung • Monitoring • Alerts • SLIs • SLOs • SLAs • MTTR • Fehlerkultur",
        "textHorizontal": "SRE verbindet Softwareentwicklung mit IT-Betrieb, um stabile, zuverlässige Systeme zu gewährleisten. Fokus liegt auf Automatisierung, Monitoring, schnellen Fehlerbehebungen und messbaren Leistungszielen.",
        "ptext": "✔ Ziel: Systeme stabil, zuverlässig und verfügbar halten\n✔ Aufgaben: Verfügbarkeit sichern, Automatisierung wiederkehrender Aufgaben, Monitoring & Alerts, Fehlerkultur entwickeln, SLIs/SLOs/SLAs definieren\n✔ Korrekturzeit minimieren: MTTR möglichst kurz durch frühzeitiges Monitoring und schnelle Reaktion\n✔ Mini-Merkregel: SRE = Dev + Ops + Zuverlässigkeit, mit Fokus auf Automatisierung, Überwachung und messbarer Servicequalität\n\nMerksatz: SRE sorgt dafür, dass Software zuverlässig läuft, Fehler schnell behoben werden und Prozesse automatisiert & messbar sind."
    },
    {
        "title": "MTTR (Mean Time To Repair)",
        "textVertical": "MTTR • Fehlerbehebung • Korrekturzeit • SRE • Verfügbarkeit • Automatisierung • Playbooks • Tools • Monitoring • Kundenzufriedenheit",
        "textHorizontal": "MTTR zeigt die durchschnittliche Zeit, um einen Fehler zu beheben. SRE-Teams nutzen Monitoring, Automatisierung und Playbooks, um Probleme schnell zu lösen und Ausfallzeiten zu minimieren.",
        "ptext": "✔ MTTR = Summe aller Reparaturzeiten / Anzahl der Fehler\n✔ Niedriger MTTR → schnelle Fehlerbehebung, höhere Systemverfügbarkeit\n✔ Hoher MTTR → lange Ausfallzeiten, höhere Kosten, unzufriedene Nutzer\n✔ Verbindung SRE + MTTR: SRE überwacht Systeme, minimiert Korrekturzeiten und nutzt Tools/Playbooks, um MTTR kontinuierlich zu senken\n✔ Ziel: Produkte schneller beim Kunden, früh Feedback erhalten, Innovationen schneller umsetzen\n\nMerksatz: MTTR misst, wie schnell Fehler behoben werden, SRE sorgt dafür, dass diese Zeit möglichst gering bleibt, um stabile, verfügbare Systeme und schnellere Markteinführung zu gewährleisten."
    },
    {
        "title": "Qualität im operativen Bereich",
        "textVertical": "Qualität • Operativ • Monitoring • Logging • SLA • SLO • MTTR • Tests • UX • Feedback",
        "textHorizontal": "Operative Qualität bedeutet stabile, performante und zuverlässige Software im Live-Betrieb. Monitoring, Alarmierung, SLA/SLO-Einhaltung und schnelle Fehlerbehebung sichern die Verfügbarkeit.",
        "ptext": "✔ Monitoring & Logging: Fehler, Antwortzeiten und Performance überwachen\n✔ SLA / SLO: Vereinbarte Service-Level einhalten\n✔ Automatisierte Alarmierung: Sofortige Reaktion auf Probleme\n✔ Fehleranalyse & MTTR: Probleme schnell erkennen und beheben\n✔ Validieren: Funktionale und nicht-funktionale Tests, Abgleich mit Akzeptanzkriterien, UAT\n✔ User Experience: Intuitive Bedienung, schnelle Reaktionszeiten, fehlerfreundliche Darstellung, Feedback einholen\n✔ Erweiterte Feedbackschleifen: Monitoring, automatisiertes Reporting, Kundenfeedback → kontinuierliche Verbesserungen\n\nMerksatz: Operative Qualität = stabile, zuverlässige Software + kontinuierliches Feedback + schnelle Fehlerbehebung für zufriedene Nutzer."
    },
    {
        "title": "Retrospektive (Retrospective)",
        "textVertical": "Retrospektive • Agile • Scrum • Team • Analyse • Verbesserung • Maßnahmen • Dokumentation • Feedback • Qualität",
        "textHorizontal": "Retrospektive = agiles Meeting, in dem das Team Prozesse, Zusammenarbeit und Qualität reflektiert, analysiert und Verbesserungen plant.",
        "ptext": "✔ Zurückblicken: Was lief gut, welche Probleme traten auf?\n✔ Analysieren: Ursachen von Fehlern und Ineffizienzen erkennen\n✔ Verbessern / Maßnahmen planen: Konkrete Verbesserungen festlegen, Verantwortliche bestimmen\n✔ Dokumentieren & nachverfolgen: Maßnahmen im nächsten Sprint umsetzen\n✔ Vorteile: Bessere Kommunikation, kontinuierliche Prozessverbesserung, Fehler vermeiden, Motivation steigern\n\nMini-Beispiel: Sprint abgeschlossen → Retrospektive: Gut: Feature pünktlich geliefert; Schlecht: Tests zu spät durchgeführt; Maßnahme: Nächsten Sprint CI/CD-Pipeline für Tests einrichten."
    },
    {
        "title": "CIS (Continuous Integration Server)",
        "textVertical": "CIS • Continuous Integration • Server • Build • Tests • Repository • Automatisierung • Fehlererkennung • Deployment • Teamarbeit",
        "textHorizontal": "CIS = automatisierter Server, der Codeänderungen integriert, Tests ausführt und Builds erstellt, um Fehler früh zu erkennen und kontinuierliche Lieferung zu ermöglichen.",
        "ptext": "✔ Ablauf: Entwickler checkt Code ein → CIS erkennt Änderung → Build & Tests automatisch → Ergebnis wird gemeldet\n✔ Vorteile: Fehler früh erkennen, Korrekturzeit minimieren, Codequalität sichern, Teamarbeit verbessern, Grundlage für Continuous Delivery/Deployment\n✔ Mini-Merkregel: CIS = automatischer Server für Continuous Integration, der Builds & Tests automatisch ausführt und so Qualität und Geschwindigkeit erhöht."
    },
    {
        "title": "CAMS-Prinzipien in DevOps",
        "textVertical": "Culture • Automation • Lean • Measurement • Sharing • Vertrauen • Prozesse • Effizienz • Wissen • Teamwork",
        "textHorizontal": "CAMS = fünf Prinzipien für erfolgreiche DevOps-Projekte: Kultur, Automatisierung, schlanke Prozesse, Messen & Teilen von Wissen. Ziel: effiziente, flexible und qualitativ hochwertige Softwareentwicklung.",
        "ptext": "✔ Culture: Offene Kommunikation, Vertrauen, Verantwortung, Silos auflösen\n✔ Automation: Wiederkehrende Aufgaben automatisch ausführen (CI/CD, Monitoring) → Fehler reduzieren, Zeit sparen\n✔ Lean: Verschwendung vermeiden, nur Wertvolles entwickeln, schnelle Entscheidungen\n✔ Measurement: Daten sammeln, MTTR, Performance, Fehleranalyse → Prozesse verbessern\n✔ Sharing: Wissen, Best Practices, Tools teilen → Team resilienter und effizienter\n✔ Mini-Merkregel: CAMS = Culture + Automation + Lean + Measurement + Sharing → Fundament erfolgreicher DevOps-Projekte"
    },
    {
        "title": "Überblick: DevOps-Projektphasen",
        "textVertical": "DevOps • Dev • Ops • Planen • Code • Build • Test • Release • Deploy • Monitor • Operate",
        "textHorizontal": "DevOps-Projekte gliedern sich in Development (Planen, Code, Build, Test) und Operations (Release, Deploy, Monitor, Operate). Ziel: kontinuierliche, qualitativ hochwertige Softwarebereitstellung.",
        "ptext": "✔ Development: Planen (Anforderungen, Backlog, Akzeptanzkriterien), Code schreiben (Versionierung, Zusammenarbeit), Build (CI, Module zusammenführen), Test (Unit/Integration, Qualität sichern)\n✔ Operations: Release (Freigabe, Planung), Deploy (CI/CD, Rollback), Monitor (Performance, Logs, Fehler erkennen), Operate (Betrieb, Feedback, Verbesserungen)\n✔ Zyklisch: Plan → Code → Build → Test → Release → Deploy → Monitor → Operate → Plan…\n✔ Vorteile: schnelle Features, hohe Qualität, bessere Zusammenarbeit, kontinuierliche Verbesserung\n✔ Mini-Merkregel: DevOps = Dev + Ops → kontinuierlicher Zyklus"
    },
    {
        "title": "DevOps-Zyklus: PCBTRDMO",
        "textVertical": "Plan • Code • Build • Test • Release • Deploy • Monitor • Operate • DevOps • CI/CD • Feedback",
        "textHorizontal": "Der DevOps-Zyklus umfasst Planen, Coden, Build, Test, Release, Deploy, Monitor und Operate. Ziel: schnelle, stabile, qualitativ hochwertige Softwarebereitstellung in Iterationen.",
        "ptext": "✔ Plan: Anforderungen sammeln, Features definieren, Backlog erstellen, Sprints planen (Tools: JIRA, Trello, Azure DevOps)\n✔ Code: Software entwickeln, Versionieren, Branching, Code-Reviews (Tools: GitHub, GitLab, Bitbucket)\n✔ Build: Automatische Builds, Containerisierung, Fehler früh erkennen (Tools: Docker, Jenkins, Maven, Gradle)\n✔ Test: Unit-/Integration-/Regressionstests, Qualität sichern (Tools: JUnit, Selenium, Cypress)\n✔ Release: Freigabe der Version, Release-Planung, Change Management (Tools: Jenkins, GitLab CI/CD, Bamboo)\n✔ Deploy: Software in Zielumgebung ausrollen, Rollback-Mechanismus (Tools: Docker, Kubernetes, Ansible, Terraform)\n✔ Monitor: Systeme überwachen, Alerts auslösen, Probleme früh erkennen (Tools: Prometheus, Grafana, ELK, Nagios)\n✔ Operate: Software stabil betreiben, Feedback sammeln, kontinuierlich verbessern, nächste Iteration vorbereiten (Tools: Incident-Management, Monitoring-Tools)\n✔ Mini-Merkregel: PCBTRDMO → Plan → Code → Build → Test → Release → Deploy → Monitor → Operate"
    },
    {
        "title": "N2N-Test / End-to-End-Test",
        "textVertical": "N2N-Test • E2E-Test • End-to-End • gesamter Ablauf • Funktion • UX • Integration",
        "textHorizontal": "N2N-Test prüft die gesamte Anwendung von Anfang bis Ende, wie ein echter Nutzer. Fokus: alles funktioniert zusammen, nicht nur einzelne Funktionen.",
        "ptext": "✔ Ziel: gesamte Anwendung testen, Funktionsfähigkeit sicherstellen, Zusammenspiel der Komponenten prüfen, User Experience prüfen, Regression vermeiden\n✔ Unterschied zu anderen Tests:\n  • Unit-Test: einzelne Funktion / Modul (z. B. add(2,3)=5)\n  • Integrationstest: Zusammenspiel mehrerer Module (z. B. Login mit Datenbank)\n  • N2N/E2E-Test: kompletter Ablauf (z. B. Nutzer registriert, wählt Produkt, bezahlt, erhält Bestätigung)\n✔ Werkzeuge: Selenium, Cypress, TestCafe, Appium\n✔ Ablauf Beispiel Webshop: Nutzer öffnet Webseite → Login/Registrierung → Produkt suchen → Warenkorb → Bezahlung → Bestätigung\n✔ Mini-Merkregel: N2N-Test = gesamter Ablauf von Anfang bis Ende prüfen, alles muss wie beim echten Nutzer funktionieren"
    },
    {
        "title": "CI/CD (Continuous Integration / Continuous Delivery)",
        "textVertical": "CI • CD • Pipeline • Build • Test • Release • Automatisierung • Deployment • Qualität",
        "textHorizontal": "CI/CD automatisiert den Weg von Code bis zur fertigen Anwendung. CI = Code regelmäßig integrieren, bauen und testen. CD = Software so bereitstellen, dass sie jederzeit veröffentlicht werden kann.",
        "ptext": "✔ Continuous Integration (CI): Entwickler integrieren Code häufig in ein zentrales Repository. Automatischer Build & Tests erkennen Fehler früh. Vorteil: stabiler Code, paralleles Arbeiten möglich.\n✔ Continuous Delivery (CD): Aufbauend auf CI, Software wird jederzeit deploybar vorbereitet. Automatisiert Packaging, Tests, Deployment-Vorbereitung → schnelle, zuverlässige Releases.\n✔ CI/CD-Pipeline: 1. Code committen → 2. Build + Tests (CI) → 3. Artefakt erstellen → 4. Deployment vorbereiten (CD) → 5. Optional: automatisches Deployment (Continuous Deployment)\n✔ Vorteile: schnellere Releases, höhere Qualität & Stabilität, Teamarbeit erleichtert, Transparenz, geringeres Risiko großer Fehler\n✔ Herausforderungen: Pipeline einrichten & pflegen, gute Testabdeckung nötig, Team muss Prozesse & sauberen Code einhalten\n✔ Mini-Merkregel: CI = Code oft integrieren + testen, CD = Software jederzeit deploybar, zusammen = schnelle, sichere, hochwertige Auslieferung"
    },
    {
        "title": "MOSI / MISO Kommunikation",
        "textVertical": "MOSI • MISO • Master • Slave • SPI • Datenfluss • Kommunikation • Hardware",
        "textHorizontal": "MOSI = Master sendet Daten zum Slave. MISO = Slave sendet Daten zum Master. Typisch bei SPI-Schnittstellen oder anderen seriellen Bus-Systemen.",
        "ptext": "✔ MOSI (Master Out / Slave In): Datenfluss vom Master zum Slave, z. B. Mikrocontroller → Sensor.\n✔ MISO (Master In / Slave Out): Datenfluss vom Slave zum Master, z. B. Sensor → Mikrocontroller.\n✔ Modelle:\n   1. Single Master / Single Slave: Ein Master steuert einen Slave → einfach, übersichtlich.\n   2. Single Master / Multiple Slaves: Ein Master steuert mehrere Slaves → nacheinander über MOSI/MISO.\n   3. Multiple Masters / Single Slave: Mehrere Master greifen auf einen Slave zu → Arbitration nötig.\n   4. Multiple Masters / Multiple Slaves: Komplexes Netzwerk, erfordert Koordination, z. B. I²C, CAN-Bus.\n✔ Mini-Merkregel: MOSI = Master sendet → Slave empfängt, MISO = Slave sendet → Master empfängt. Modelle bestimmen Komplexität der Kommunikation."
    },
    {
        "title": "Git (Versionskontrolle einfach erklärt)",
        "textVertical": "Git • Versionskontrolle • Code • Repository • Branch • Commit • Merge • Teamarbeit",
        "textHorizontal": "Git ist ein Versionskontrollsystem. Es speichert Änderungen am Code, ermöglicht zurückspringen zu älteren Versionen und erleichtert die Teamarbeit.",
        "ptext": "✔ Git = Versionskontrollsystem: Speichert jede Änderung am Code und ermöglicht Historie & Rückkehr zu alten Versionen.\n✔ Änderungen speichern & zurückspringen: Wie eine Zeitmaschine oder Spielstand für Code. Jede Version = Commit.\n✔ Sicher im Team arbeiten: Entwickler können parallel arbeiten, Branches nutzen, Änderungen zusammenführen (Merge), Konflikte erkennen.\n✔ Vorteile: Code-Historie nachvollziehbar, Fehler rückgängig machen, Teamarbeit möglich, Zusammenarbeit über Remote-Repositories (GitHub, GitLab, Bitbucket).\n✔ Mini-Merkregel: Git = Code speichern + Historie sichern + Teamarbeit organisieren"
    },
    {
        "title": "Git (Versionskontrolle einfach erklärt)",
        "textVertical": "Git • Versionskontrolle • Code • Repository • Branch • Commit • Merge • Teamarbeit",
        "textHorizontal": "Git ist ein Versionskontrollsystem. Es speichert Änderungen am Code, ermöglicht zurückspringen zu älteren Versionen und erleichtert die Teamarbeit.",
        "ptext": "✔ Git = Versionskontrollsystem: Speichert jede Änderung am Code und ermöglicht Historie & Rückkehr zu alten Versionen.\n✔ Änderungen speichern & zurückspringen: Wie eine Zeitmaschine oder Spielstand für Code. Jede Version = Commit.\n✔ Sicher im Team arbeiten: Entwickler können parallel arbeiten, Branches nutzen, Änderungen zusammenführen (Merge), Konflikte erkennen.\n✔ Branches nutzen: Arbeitszweige für neue Funktionen oder Experimente. main = stabile Version, feature branch = neue Funktion entwickeln. Nach Test & Freigabe → Merge zurück in main.\n✔ Vorteile: Code-Historie nachvollziehbar, Fehler rückgängig machen, Teamarbeit möglich, Zusammenarbeit über Remote-Repositories (GitHub, GitLab, Bitbucket).\n✔ Mini-Merkregel: Git = Code speichern + Historie sichern + Branches nutzen + Teamarbeit organisieren"
    },
    {
        "title": "Git (Versionskontrolle einfach erklärt)",
        "textVertical": "Git • Versionskontrolle • Code • Repository • Branch • Commit • Merge • Teamarbeit • Backup • Sicherheit",
        "textHorizontal": "Git ist ein Versionskontrollsystem. Es speichert Änderungen am Code, ermöglicht Historie & Rückkehr zu alten Versionen, erleichtert Teamarbeit und sichert Projekte online.",
        "ptext": "✔ Git = Versionskontrollsystem: Speichert jede Änderung am Code, ermöglicht Historie & Rückkehr zu alten Versionen.\n✔ Änderungen speichern & zurückspringen: Wie eine Zeitmaschine oder Spielstand für Code. Jede Version = Commit.\n✔ Sicher im Team arbeiten: Entwickler können parallel arbeiten, Branches nutzen, Änderungen zusammenführen (Merge), Konflikte erkennen.\n✔ Branches nutzen: Arbeitszweige für neue Funktionen oder Experimente. main = stabile Version, feature branch = neue Funktion entwickeln. Nach Test & Freigabe → Merge zurück in main.\n✔ Backup & Sicherheit: Verbindung zu GitHub, GitLab, Bitbucket → Code online sichern. PC kaputt? Code bleibt erhalten.\n✔ Metapher: Git speichert automatisch Versionen wie tägliche Word-Dateien, aber sauber, strukturiert und professionell.\n✔ Wichtige Befehle: git init, git add, git commit, git push, git pull, git branch, git merge → Schritt für Schritt lernen.\n✔ Vorteile: Versionskontrolle = alte Versionen wiederherstellen, Fehler schneller finden, sehen wer was geändert hat, Chaos durch finale_n-Dateien vermeiden.\n✔ Teamarbeit: Mehrere Entwickler parallel, eigene Branches, Konflikte erkennen, Zusammenführen. Ohne Git chaotisch.\n✔ Verlässlichkeit: Jede Version stabil, nichts geht verloren, Fehler nachvollziehbar, kaputte Versionen sofort erkennbar.\n✔ Transparenz: wer wann was geändert hat, Commit-Nachrichten, betroffene Dateien, Projektentwicklung sichtbar → Entwickler, Projektleiter, Kunden profitieren.\n✔ Flexibilität: Branches für neue Ideen, Tests, Fehlerbehebung, Hauptsystem bleibt unversehrt, Versionen auf verschiedene Umgebungen ausrollen.\n✔ Mini-Merkregel: Git = Code speichern + Historie sichern + Branches nutzen + Teamarbeit + Backup → sichere, transparente, flexible Projekte"
    },
    {
        "title": "Git-Lokal, Remote, Portable & GUI-Clients",
        "textVertical": "Git • Lokal • Remote • GitHub • GitLab • Bitbucket • Portable • GUI • Backup • Teamarbeit",
        "textHorizontal": "Git kann lokal auf deinem PC laufen, mit Remote-Servern für Teamarbeit und Backups verbunden sein, portabel genutzt werden oder über grafische Clients bedient werden.",
        "ptext": "✔ Git (Lokal): Läuft nur auf deinem PC, offline, alle Versionen bleiben privat. Repository erstellen, Commits machen, Branches nutzen → private Versionskontrolle.\n✔ Git mit Remote-Server: Repository online (GitHub, GitLab, Bitbucket) speichern. Vorteile: Backup, Teamarbeit, CI/CD-Integration, Versions-Tracking. Wichtige Befehle: git push, git pull, git clone.\n✔ Portable Git: Git ohne Installation, z. B. auf USB-Stick. Ideal für Schul- oder Firmenrechner ohne Adminrechte. Alle Funktionen wie normales Git.\n✔ GUI-Clients: Grafische Oberfläche für Git (GitHub Desktop, Sourcetree, GitKraken, TortoiseGit, VS Code Git Panel). Vorteile: visuelle Branches, grafische Commit-Historie, einfaches Mergen, weniger Fehler, leichter für Einsteiger.\n✔ Mini-Zusammenfassung: \n- Git (Lokal) = offline, privat, alle Versionen lokal\n- Git Remote = online, Teamarbeit & Backup\n- Portable Git = Git zum Mitnehmen\n- GUI-Clients = Git grafisch bedienen, einfacher & übersichtlicher"
    },
    {
        "title": "Git-Repository",
        "textVertical": "Repository • Projektordner • Versionierung • Branches • Änderungen • Teamarbeit",
        "textHorizontal": "Ein Git-Repository ist dein Projektordner, in dem alle Dateien, Änderungen und Versionshistorien gespeichert werden. Es ermöglicht Teamarbeit und Rückkehr zu älteren Versionen.",
        "ptext": "✔ Git-Repository = Projektordner mit allen Dateien und Änderungen\n✔ Enthält: Code, Bilder, Dokumente, Versionshistorie, wer was geändert hat\n✔ Vorteile: Änderungen nachvollziehen, Fehler rückgängig machen, im Team arbeiten, Branches erstellen für alternative Versionen\n✔ Mini-Merkregel: Repository = zentraler Ort für Projekt + Historie + Teamarbeit"
    },
    {
        "title": "Git: Lokal vs. Remote Repository",
        "textVertical": "Lokal • Remote • GitHub • GitLab • Bitbucket • Push • Pull • Status",
        "textHorizontal": "Ein lokales Repository liegt auf deinem PC im Projektordner. Ein Remote Repository liegt auf GitHub, GitLab oder Bitbucket und kann synchronisiert werden. Lokale Änderungen kann man per Push hochladen und per Pull Updates holen.",
        "ptext": "✔ Lokales Repository: liegt auf deinem PC, im Projektordner, sichtbar in VS Code oder Terminal (git init)\n✔ Remote Repository: liegt online auf GitHub/GitLab/Bitbucket, kann synchronisiert werden (push/pull)\n✔ Prüfen: git status → zeigt, ob das Projekt ein Repository ist (On branch main = Ja, fatal: not a git repository = Nein)\n✔ Mini-Merkregel: Lokal = offline & privat, Remote = online & für Teamarbeit & Backup"
    },
    {
        "title": "Git: Lokal vs. Remote Repository",
        "textVertical": "Lokal • Remote • GitHub • GitLab • Bitbucket • Push • Pull • Synchronisation",
        "textHorizontal": "Ein lokales Repository liegt auf deinem PC im Projektordner. Ein Remote Repository liegt online (GitHub, GitLab, Bitbucket) und kann synchronisiert werden. Push lädt Änderungen hoch, Pull holt Updates.",
        "ptext": "✔ Lokales Repository = auf deinem PC, sichtbar in VS Code oder Terminal (git init)\n✔ Remote Repository = online auf GitHub/GitLab/Bitbucket, für Teamarbeit & Backup\n✔ Push = eigene Änderungen hochladen\n✔ Pull = Änderungen anderer Entwickler herunterladen\n✔ Prüfen: git status → zeigt, ob das Projekt ein Repository ist (On branch main = Ja, fatal: not a git repository = Nein)\n✔ Mini-Merkregel: Lokal = offline & privat, Remote = online & für Teamarbeit"
    },
    {
        "title": "Git Rebase Editor",
        "textVertical": "Rebase • Commit • pick • reword • edit • squash • fixup • drop",
        "textHorizontal": "Im Git-Rebase-Editor kannst du bestehende Commits bearbeiten, zusammenführen oder löschen. Jeder Befehl hat eine bestimmte Funktion für die Commit-Historie.",
        "ptext": "✔ pick = Commit beibehalten\n✔ reword = Commit-Message ändern\n✔ edit = Commit bearbeiten\n✔ squash = Commit mit vorherigem zusammenführen\n✔ fixup = wie squash, aber Commit-Message wird verworfen\n✔ drop = Commit löschen\n✔ Mini-Merkregel: Rebase-Editor = Commits aufräumen, zusammenführen oder anpassen"
    },
    {
        "title": "Wichtige Git-Befehle",
        "textVertical": "git init • git add • git commit • git status • git push • git pull • git branch • git merge • git clone",
        "textHorizontal": "Git-Befehle ermöglichen Versionskontrolle, Teamarbeit und das Verwalten von Branches. Sie bilden die Grundlage für die Arbeit mit Git-Repositories.",
        "ptext": "✔ git init = Git in einem Ordner aktivieren (Repository erstellen)\n✔ git add = Dateien für den nächsten Commit vormerken\n✔ git commit = Änderungen als neue Version speichern (Snapshot)\n✔ git status = aktuellen Status der Dateien und Branch anzeigen\n✔ git push = Änderungen zum Remote-Repository hochladen\n✔ git pull = Änderungen vom Remote-Repository herunterladen und integrieren\n✔ git branch = neuen Branch erstellen oder anzeigen\n✔ git merge = Branches zusammenführen\n✔ git clone = bestehendes Repository kopieren\n✔ Mini-Merkregel: init = starten, add = vormerken, commit = speichern, push/pull = synchronisieren, branch/merge = Versionszweige verwalten"
    },
    {
        "title": "CPS – Cyber-Physical System",
        "textVertical": "CPS • Cyber-Physical System • Hardware • Software • Sensoren • Aktoren • Steuerung • Vernetzung • Prototyp",
        "textHorizontal": "Ein CPS verbindet physische Komponenten (Maschinen, Sensoren, Aktoren) mit Computersystemen (Software, Steuerungen, Netzwerke). Beispiele: Industrie 4.0, autonome Fahrzeuge, Smart-Home, medizinische Geräte.",
        "ptext": "✔ CPS = Cyber-Physical System → Verbindung von Hardware + Software + Kommunikation\n✔ Betrieb nehmen: Hardware vorbereiten, Software installieren, System integrieren, Testbetrieb\n✔ Prototypen: Anforderungen klären → Sensoren/Aktoren wählen → Controller bestimmen → Software schreiben → Verkabelung & Vernetzung → Simulation & Testlauf → Iteration\n✔ Merksätze: \n   • Betrieb: Maschine + Software arbeiten zusammen, Signale fließen korrekt\n   • Prototyp: Mini-CPS bauen & testen, bevor das große System entsteht"
    },
    {
        "title": "CPS-Prototyp",
        "textVertical": "CPS • Prototyp • Sensoren • Aktoren • Software • Integration • Test • Optimierung • Sicherheit",
        "textHorizontal": "Ein CPS-Prototyp ist ein funktionsfähiges Modell eines Cyber-Physical Systems, das physische Prozesse mit digitaler Steuerung verbindet. Ziel: Funktionen testen, Schnittstellen prüfen, Datenflüsse simulieren, Risiken erkennen.",
        "ptext": "✔ CPS-Prototyp = Mini-Modell eines Cyber-Physical Systems\n✔ Ziel: Funktionen testen, Schnittstellen prüfen, Datenflüsse simulieren, Risiken erkennen\n✔ Beispiele: Mini-Roboterarm, autonomes Fahrzeug-Modell, Smart-Home-Gerät\n✔ Schritte:\n   1. Anforderungen definieren → Prozesse, Sensoren, Aktoren, Softwarefunktionen\n   2. Hardware auswählen → Sensoren, Aktoren, Controller, Verbindung\n   3. Software/Steuerung → Sensorabfragen, Aktorensteuerung, Echtzeit-Datenverarbeitung, Visualisierung\n   4. Integration → Sensoren, Aktoren & Software verbinden, Schnittstellen prüfen, Datenfluss testen\n   5. Testen & Optimieren → Funktion, Reaktion, Sicherheit, Datenfluss\n✔ Hinweise: schnelle Iterationen, Fehler früh erkennen, Dokumentation, Sicherheitsvorkehrungen"
    },
    {
        "title": "Arduino-IDE",
        "textVertical": "Arduino • IDE • Mikrocontroller • Programmieren • C/C++ • Upload • Debugging • Sensoren • Aktoren",
        "textHorizontal": "Die Arduino-IDE ist eine Entwicklungsumgebung, mit der du Arduino-Mikrocontroller programmieren kannst. Sie ermöglicht Code schreiben, Upload auf das Board und Debuggen / serielle Kommunikation anzeigen.",
        "ptext": "✔ Arduino-IDE = Integrated Development Environment für Mikrocontroller\n✔ Unterstützt viele Boards (Uno, Nano, Mega, ESP32, …)\n✔ Ermöglicht:\n   • Code schreiben in C/C++\n   • Upload auf das Arduino-Board\n   • Debugging und serielle Kommunikation\n✔ Setup:\n   1. Installation → Arduino-Seite besuchen, IDE herunterladen, installieren\n   2. Board anschließen → USB verbinden, IDE öffnen, Board auswählen (Werkzeuge → Board), richtigen Port auswählen (Werkzeuge → Port)\n✔ Hinweis: Treiber ggf. installieren, damit das Board erkannt wird\n✔ Mini-Merkregel: Arduino-IDE = Programmieren + Hochladen + Debuggen für Mikrocontroller"
    },
    {
        "title": "MQTT",
        "textVertical": "MQTT • Broker • Publisher • Subscriber • IoT • CPS • Nachrichten • Topics • Mosquitto",
        "textHorizontal": "MQTT (Message Queuing Telemetry Transport) ist ein leichtgewichtiges Protokoll für die Kommunikation zwischen Geräten, ideal für IoT und CPS. Publisher senden Daten, der Broker verteilt sie an Subscriber.",
        "ptext": "✔ MQTT = leichtgewichtiges Protokoll für Gerätedaten (IoT/CPS)\n✔ Funktionsprinzip:\n   • Publisher → sendet Daten (z. B. Sensorwerte)\n   • Broker → empfängt und verteilt Daten an Subscriber\n   • Subscriber → empfängt Daten (z. B. Aktor, Dashboard, Smartphone)\n✔ MQTT-Broker:\n   • Zentrale für Nachrichten\n   • Aufgaben: empfangen, weiterleiten, Topics verwalten (z. B. raum/temperatur)\n✔ Open-Source-Broker:\n   • Mosquitto → leichtgewichtig, stabil, MQTT v3/v5, kostenlos\n   • EMQX → Enterprise-fähig, Cluster, Open Source Version\n   • HiveMQ Community → für kleine Projekte, Open Source\n✔ Broker auf Raspberry Pi:\n   • Installation: sudo apt update && sudo apt install mosquitto mosquitto-clients\n   • Aktivieren & starten: sudo systemctl enable/start mosquitto\n   • Test: mosquitto_sub -h localhost -t \"test/topic\", mosquitto_pub -h localhost -t \"test/topic\" -m \"Hallo Welt\"\n✔ Mini-Merkregel: MQTT = Publisher sendet → Broker verteilt → Subscriber empfängt"
    },
    {
        "title": "Node-RED",
        "textVertical": "Node-RED • Flows • Nodes • Wires • CPS • IoT • Sensoren • Aktoren • MQTT",
        "textHorizontal": "Node-RED ist eine grafische Entwicklungsumgebung für CPS und IoT. Mit Drag-and-Drop werden Flows erstellt, die Sensoren, Aktoren, Funktionen und Dienste verbinden.",
        "ptext": "✔ Node-RED = Open-Source Software von IBM für grafische Flows\n✔ Kernkonzepte:\n   • Nodes → Bausteine (Sensor, Aktor, Berechnung, Nachricht)\n   • Wires → Verbindungen zwischen Nodes, Datenfluss\n   • Flows → kompletter Ablauf, z. B. Sensor → Funktion → Aktor\n✔ Arbeitsweise:\n   • Web-Oberfläche, Drag-and-Drop, Parameter einstellen, deployen\n✔ Einsatz im CPS-Prototyp:\n   • Sensoren auslesen (z. B. Arduino + MQTT)\n   • Daten verarbeiten (Filter, Berechnungen)\n   • Aktionen steuern (LED, Motor, Relais)\n   • Dashboards erstellen (Graphen, Anzeigen, Schalter)\n✔ Beispiel Flow: [MQTT-In] → [Function Node prüfen Sensorwert] → [MQTT-Out / Aktor Node]\n   • Temperatur meldet Sensor → Flow prüft → Lüfter schaltet ein/aus\n✔ Vorteile:\n   • Kein tiefes Programmierwissen nötig\n   • Schnelle Prototypenentwicklung\n   • Integration von IoT, CPS, Cloud-Diensten\n   • Visuelle Darstellung von Abläufen → leicht verständlich\n✔ Merksatz: Node-RED = grafischer Baukasten für CPS-Flows, verbindet Sensoren, Aktoren und Softwarefunktionen einfach"
    },
    {
        "title": "Projekt-Review & Lessons Learned",
        "textVertical": "Projekt-Review • Lessons Learned • Reflexion • Verbesserung • CPS • Erkenntnisse • Optimierung",
        "textHorizontal": "Projekt-Review = strukturierter Rückblick auf ein Projekt. Lessons Learned = Erfahrungen und Erkenntnisse dokumentieren, um zukünftige Projekte zu verbessern.",
        "ptext": "✔ Ziele des Projekt-Reviews:\n   • Prüfen, ob Projektziele erreicht wurden\n   • Erkenntnisse festhalten: Was lief gut, was nicht\n   • Verbesserungspotenzial identifizieren\n   • Grundlage für weitere Projekte oder Optimierungen schaffen\n✔ Ausgangssituation erfassen:\n   • Ressourcen, Probleme, bisheriger Stand dokumentieren\n   • Beispiel: CPS-Prototyp vor Projektstart nur grundlegende Sensorik\n✔ Fragestellung formulieren:\n   • Zentrale Frage definieren, Fokus behalten\n   • Beispiele: Funktion der CPS-Erweiterung, Produktionssteuerung, Sicherheit\n✔ Inhalte des Projekts:\n   • Hardware: Sensoren, Aktoren, Mikrocontroller\n   • Software: Arduino-Code, Node-RED-Flows, MQTT-Broker\n   • Tests: Funktionalität, Kommunikation, Sicherheit\n   • Beispiel: Sensordaten über MQTT an Node-RED senden, Aktoren steuern\n✔ Dokumentation der Erkenntnisse:\n   • Ziele erreicht?\n   • Probleme aufgetreten?\n   • Lösungsansätze getestet?\n   • Beispiel-Tabelle: Sensorik / Kommunikation / Sicherheit\n✔ Verbesserungsvorschläge:\n   • Konkrete Maßnahmen notieren, priorisieren\n   • Beispiele: Sensorwerte kalibrieren, MQTT-Broker stabilisieren, Dashboard erweitern\n✔ Merksatz: Review = Strukturierte Reflexion: Ausgangssituation → Fragestellung → Inhalte → Erkenntnisse → Verbesserungsvorschläge\n✔ Lessons Learned:\n   • Erfahrungen und Erkenntnisse aus Projekt sichern\n   • Ziel: Fehler vermeiden, Wissen sichern, zukünftige Projekte verbessern\n   • Unterschied Review vs. Lessons Learned: Review = „Was ist passiert?“ | Lessons Learned = „Was haben wir gelernt?“"
    },
    {
        "title": "Lessons Learned",
        "textVertical": "Lessons Learned • Erfahrungen • Verbesserung • Teamarbeit • Best Practices • Prozessoptimierung • Dokumentation",
        "textHorizontal": "Lessons Learned sammeln Erfahrungen aus einem Projekt, um Fehler zu vermeiden, Best Practices zu sichern und zukünftige Projekte effizienter zu gestalten.",
        "ptext": "✔ Warum Lessons Learned wichtig sind:\n   • Fehler vermeiden, Wiederholungen verhindern\n   • Best Practices für zukünftige Projekte entwickeln\n   • Team- und Wissensaustausch fördern\n   • Prozessoptimierung erleichtern\n✔ Inhalte von Lessons Learned:\n   1. Erfolgreiche Methoden / Vorgehensweisen (z. B. MQTT-Broker stabil auf Raspberry Pi)\n   2. Probleme / Herausforderungen (z. B. Sensorwerte bei hoher Temperatur instabil)\n   3. Lösungsansätze / Workarounds (z. B. Kalibrierung der Sensoren)\n   4. Empfehlungen für zukünftige Projekte (z. B. Node-RED-Flows vor Deployment testen)\n✔ Form der Dokumentation:\n   • Tabellarisch, stichpunktartig oder beschreibend\n   • Beispiel-Tabelle:\n     Kategorie | Erfahrung | Empfehlung\n     Hardware | Ultraschall-Sensoren liefern bei Kälte ungenaue Werte | Sensoren kalibrieren\n     Kommunikation | MQTT über WLAN stabil, Verzögerungen bei vielen Clients | Raspberry Pi als Broker, Traffic testen\n     Software | Node-RED-Dashboard verständlich | Dashboard für Bediener anpassen\n✔ Tipps für effektive Lessons Learned:\n   • Zeitnah dokumentieren\n   • Konkret bleiben\n   • Team einbeziehen\n   • Erkenntnisse in Wissensdatenbank aufnehmen\n✔ Merksatz: Lessons Learned = Erfahrungswerte, die zukünftige Projekte einfacher, schneller und sicherer machen."
    },
    {
        "title": "10-Punkte-Plan zur Sicherung eines CPS",
        "textVertical": "CPS • Sicherheit • Zugriffsschutz • Verschlüsselung • Updates • Monitoring • Backup • Authentifizierung • Firewalls • Tests • Risikoanalyse",
        "textHorizontal": "Ein strukturierter Plan, um ein Cyber-Physical System gegen Fehler, Angriffe und Ausfälle abzusichern.",
        "ptext": "✔ 1. Risikoanalyse durchführen → Bedrohungen und Schwachstellen identifizieren\n✔ 2. Zugriffskontrolle implementieren → nur berechtigte Nutzer / Geräte dürfen auf das CPS zugreifen\n✔ 3. Authentifizierung & Autorisierung einrichten → starke Passwörter, Tokens, Zertifikate\n✔ 4. Verschlüsselung von Daten → Daten während Übertragung und Speicherung schützen\n✔ 5. Netzwerkabsicherung → Firewalls, VPN, Segmentierung der CPS-Komponenten\n✔ 6. Regelmäßige Updates → Firmware, Software, Bibliotheken aktuell halten\n✔ 7. Monitoring & Logging → Aktivitäten, Fehlfunktionen und Sicherheitsvorfälle erfassen\n✔ 8. Backup & Wiederherstellung → regelmäßige Sicherungen, Notfallpläne testen\n✔ 9. Sicherheitstests / Penetrationstests → CPS auf Schwachstellen prüfen\n✔ 10. Schulung & Awareness → Team auf Sicherheitsrichtlinien und Best Practices schulen\n✔ Merksatz: CPS-Sicherheit = Prävention + Kontrolle + Monitoring + regelmäßige Optimierung"
    },
    {
        "title": "10-Punkte-Plan zur Sicherung digital vernetzter Systeme",
        "textVertical": "Risikoanalyse • Kritische Prozesse • Störungsrisiken • IT-Sicherheit • Standardisierung • MDM • Trennung privat/geschäftlich • RBAC • SaaS • Security Awareness",
        "textHorizontal": "Strukturierter Leitfaden, um digitale Systeme, Maschinen, Netzwerke und Daten zuverlässig abzusichern.",
        "ptext": "✔ 1. Bereiche digital vernetzt analysieren → Transparenz schaffen, Risiken erkennen\n✔ 2. Unternehmenskritische Prozesse identifizieren → besonders wichtige Bereiche schützen\n✔ 3. Störungs- oder Ausfallrisiken prüfen → Hardware, Software, Sensoren, Netzwerk\n✔ 4. Gefährdungspotenzial in der IT erkennen → offene Ports, unsichere Protokolle, fehlende Updates\n✔ 5. Komplexe IT-Strukturen reduzieren oder standardisieren → Fehlerquellen minimieren\n✔ 6. Mobile Device Management (MDM) einführen → zentrale Verwaltung von Smartphones, Tablets, Laptops\n✔ 7. Trennung zwischen privaten und geschäftlichen Geräten/Daten → BYOD-Risiken reduzieren\n✔ 8. Rollenbasierte Zugriffe (RBAC) & Service-Level → Rechte gezielt vergeben\n✔ 9. Security as a Service (SaaS) nutzen → professionelle Sicherheitsdienste extern einsetzen\n✔ 10. Mitarbeiter sensibilisieren (Security Awareness) → Phishing, sichere Passwörter, Umgang mit Daten\n✔ Merksatz: Sicherheit = Risikoanalyse + Schutz kritischer Prozesse + Kontrolle + Awareness"
    },
    {
        "title": "FMEA (Fehler-Möglichkeits- und Einfluss-Analyse)",
        "textVertical": "FMEA • Risiken • Fehlerarten • Fehlerfolgen • Fehlerursachen • RPZ • CPS • Sensor • Aktor • Netzwerk",
        "textHorizontal": "FMEA ist eine Methode, um Risiken frühzeitig zu erkennen, zu bewerten und zu reduzieren. Besonders bei CPS werden sowohl physische als auch digitale Fehlerquellen betrachtet.",
        "ptext": "✔ Ziel der FMEA: Risiken erkennen, bewerten und reduzieren\n✔ Analysepunkte: Fehlerarten (Was kann schiefgehen?), Fehlerfolgen (Was passiert dann?), Fehlerursachen (Warum passiert es?), Bewertung: Bedeutung, Auftreten, Entdeckbarkeit → RPZ\n✔ Anwendung bei CPS:\n   • Physische Fehlerquellen: Sensor defekt, Aktor reagiert falsch, Motor überhitzt, Stromversorgung fällt aus\n   • Digitale Fehlerquellen: Netzwerkstörungen, manipulierte Daten, Hackerangriffe, Firmware-Fehler, Cloud-Server nicht erreichbar\n✔ Merksatz: FMEA = Risiken systematisch erkennen + bewerten + Maßnahmen ableiten"
    },
    {
        "title": "FMEA (Fehler-Möglichkeits- und Einfluss-Analyse)",
        "textVertical": "FMEA • RPZ • Severity • Occurrence • Detection • Fehleranalyse • Risiko • CPS",
        "textHorizontal": "FMEA ist eine Methode, um Risiken frühzeitig zu erkennen, zu bewerten und zu reduzieren. RPZ = B × A × E, also Bedeutung × Auftreten × Entdeckbarkeit. Bei CPS werden physische und digitale Fehlerquellen betrachtet.",
        "ptext": "✔ FMEA = Methode zur systematischen Risikoanalyse\n✔ RPZ (Risikoprioritätszahl) = Severity × Occurrence × Detection → Maß für Risiko\n✔ Severity (B) = Wie schwerwiegend ist die Auswirkung eines Fehlers?\n✔ Occurrence (A) = Wie häufig tritt der Fehler auf?\n✔ Detection (E) = Wie wahrscheinlich wird der Fehler erkannt?\n✔ PFMEA / DFMEA = Prozessbezogen vs. Designbezogen\n✔ CPS-FMEA = FMEA für Cyber-Physical Systems (physische + digitale Fehlerquellen)\n✔ Ziel: Fehler früh erkennen, bewerten und Maßnahmen ableiten\n✔ Mini-Merkregel: FMEA = Fehler erkennen + RPZ berechnen + Risiken reduzieren"
    },
    {
        "title": "FMEA – Fehler bewerten & Verbesserungen ableiten",
        "textVertical": "FMEA • Risiko • RPZ • Severity • Occurrence • Detection • Maßnahmen • Priorisierung",
        "textHorizontal": "FMEA bewertet Fehler nach Bedeutung (S), Auftreten (A) und Entdeckbarkeit (E). So lassen sich die größten Risiken erkennen und priorisierte Maßnahmen ableiten.",
        "ptext": "✔ Fehler qualitativ bewerten: Jeder potenzielle Fehler wird nach Severity (Bedeutung), Occurrence (Auftreten) und Detection (Entdeckung) bewertet → Prioritätenliste für Maßnahmen.\n✔ Verbesserungen planbar machen: Aus bewerteten Fehlern konkrete Maßnahmen ableiten → Risiken minimieren, Qualität steigern, Prozesse sicherer machen.\n✔ Merksatz: FMEA erkennt Fehlerursachen, bewertet Risiken und macht Verbesserungen planbar."
    },
    {
        "title": "FMEA – Vollständiger 7-Schritte-Prozess",
        "textVertical": "FMEA • Vorbereitung • Team • Strukturanalyse • Funktionsanalyse • Fehleranalyse • Risikobewertung • Optimierung",
        "textHorizontal": "Der FMEA-Prozess hilft, Fehler frühzeitig zu erkennen, Risiken zu bewerten und Maßnahmen abzuleiten. 7 Schritte: Vorbereiten, Team bilden, Struktur analysieren, Funktionen prüfen, Fehler analysieren, Risiken bewerten, Maßnahmen optimieren.",
        "ptext": "✔ Schritt 1 – Vorbereiten: Ziel, Umfang, Produkt/Prozess auswählen, Daten sammeln, Verantwortlichkeiten klären.\n✔ Schritt 2 – Team bilden: Interdisziplinäres Team, Rollen & Aufgaben festlegen.\n✔ Schritt 3 – Strukturanalyse: System in Baugruppen, Komponenten, Prozessschritte zerlegen.\n✔ Schritt 4 – Funktionsanalyse: Funktionen jedes Elements beschreiben, Zweck + Anforderung.\n✔ Schritt 5 – Fehleranalyse: Fehlerarten, Folgen, Ursachen sammeln.\n✔ Schritt 6 – Risikobewertung: S (Bedeutung), A (Auftreten), E (Entdeckung) bewerten, RPZ berechnen, priorisieren.\n✔ Schritt 7 – Optimieren: Maßnahmen ableiten, Verantwortlichkeiten definieren, Umsetzung kontrollieren, Dokumentation aktualisieren.\n✔ Merksatz: Vorbereiten – Team – Struktur – Funktion – Fehler – Risiko – Optimieren."
    },
    {
        "title": "FMEA – Risikoprioritätszahl (RPZ)",
        "textVertical": "RPZ • S • A • E • Risiko • Bewertung • Maßnahmen",
        "textHorizontal": "RPZ = S × A × E. Sie bewertet, wie kritisch ein Fehler ist. S = Bedeutung, A = Auftreten, E = Entdeckung. Hohe RPZ = dringender Handlungsbedarf, niedrige RPZ = akzeptables Risiko.",
        "ptext": "✔ S = Bedeutung (Severity): Wie schlimm ist der Fehler für Kunde/Prozess? Skala 1–10\n✔ A = Auftreten (Occurrence): Wie häufig tritt die Fehlerursache wahrscheinlich auf? Skala 1–10\n✔ E = Entdeckung (Detection): Wie gut wird der Fehler vor Auslieferung entdeckt? 1 = sehr gut erkennbar, 10 = kaum erkennbar\n✔ RPZ berechnen: RPZ = S × A × E\n✔ Beispiel: S=8, A=5, E=6 → RPZ = 8 × 5 × 6 = 240\n✔ Interpretation: Hohe RPZ → hohes Risiko → Maßnahmen notwendig; Niedrige RPZ → akzeptables Risiko"
    },
    {
        "title": "FMEA-Arten",
        "textVertical": "Design-FMEA • Prozess-FMEA • Konstruktion • Fertigung • Risiko • Fehleranalyse",
        "textHorizontal": "Es gibt zwei Hauptarten der FMEA: Design-FMEA für Produkte/Konstruktion und Prozess-FMEA für Fertigung oder Abläufe. Jede betrachtet potenzielle Fehlerquellen und Ursachen.",
        "ptext": "✔ Design-FMEA (Konstruktions-FMEA): Analysiert Produkte. Typische Fragen: Welche Teile könnten versagen? Welche Konstruktionsschwächen gibt es?\n✔ Prozess-FMEA: Analysiert Fertigung oder Abläufe. Typische Fragen: Welche Prozessschritte sind fehleranfällig? Welche Ursachen entstehen durch Maschinen, Menschen oder Material?"
    },
    {
        "title": "FMEA in verschiedenen Bereichen",
        "textVertical": "Design-FMEA • Prozess-FMEA • Qualitäts-FMEA • Entwicklung • Produktion • Qualitätssicherung • Risiko • Fehleranalyse",
        "textHorizontal": "FMEA wird in unterschiedlichen Phasen eines Produkts oder Prozesses eingesetzt: Entwicklungs-FMEA prüft Produkte und Baugruppen, Prozess-FMEA analysiert Fertigungsschritte, und Qualitäts-FMEA sichert Fehlerfreiheit für den Kunden.",
        "ptext": "A. Entwicklungs-FMEA / Design-FMEA:\n✔ Zweck: Risiken und Fehler früh in der Produktentwicklung erkennen\n✔ Typische Schritte: Produkt analysieren, Fehlerarten auflisten, S/A/E bewerten, Maßnahmen definieren\n✔ Informationsquellen: Lastenheft, technische Zeichnungen, Normen, frühere FMEAs\n\nB. Prozess-FMEA / Produktions-FMEA:\n✔ Zweck: Risiken im Herstellungsprozess erkennen und reduzieren\n✔ Typische Schritte: Prozessschritte analysieren, Fehlerarten notieren, S/A/E bewerten, Maßnahmen ableiten\n✔ Informationsquellen: Arbeitsanweisungen, Maschinen-/Werkzeugdaten, Qualitätsberichte, Pilotläufe\n\nC. Qualitäts-FMEA / Qualitätssicherung:\n✔ Zweck: Fehler erkennen/verhindern bevor Kunde betroffen ist\n✔ Typische Schritte: Prüfpunkte analysieren, Entdeckungswahrscheinlichkeit (E) bewerten, Maßnahmen ableiten\n✔ Informationsquellen: Qualitätsstandards, Prüfpläne, Kundenreklamationen"
    },
    {
        "title": "FMEA - Informationsquellen",
        "textVertical": "Lastenheft • Pflichtenheft • Technische Zeichnungen • Normen • Erfahrungen • Prozessbeschreibungen • Qualitätsberichte",
        "textHorizontal": "Für eine FMEA werden unterschiedliche Informationsquellen genutzt: Lastenheft, Pflichtenheft, technische Zeichnungen, Normen, Erfahrungen, Prozessbeschreibungen und Qualitätsberichte. Sie helfen, Fehlerarten, Ursachen und Risiken richtig zu bewerten.",
        "ptext": "Informationsart und Nutzung in FMEA:\n✔ Lastenheft: Anforderungen und Funktionen → Grundlage für Design-FMEA\n✔ Pflichtenheft: Technische Lösungen, Tests → Bewertung von Fehlerfolgen\n✔ Technische Zeichnungen: Maße, Toleranzen, Materialien → mögliche Fehlerursachen erkennen\n✔ Normen / Vorschriften: Sicherheits- und gesetzliche Anforderungen → Bewertung Severity (S)\n✔ Erfahrungen / frühere FMEAs: Bekannte Fehlerquellen → Auftreten (A) einschätzen\n✔ Prozessbeschreibungen / Arbeitsanweisungen: Fertigungsfehler erkennen → Ursache und Entdeckung (E)\n✔ Qualitätsberichte / Reklamationen: Tatsächlich aufgetretene Fehler → realistische Bewertung von A und E\n\n⭐ Zusammenfassung:\n- Entwicklungs-/Konstruktions-FMEA: Fokus auf Design und Funktion, Fehler vermeiden vor Produktion\n- Produktions-/Prozess-FMEA: Fokus auf Fertigungsabläufe und Prozessrisiken\n- Qualitäts-FMEA: Fokus auf Prüfbarkeit und Entdeckung von Fehlern\n- Informationsbeschaffung: Alle relevanten Dokumente und Erfahrungen zusammenführen"
    },
    {
        "title": "FMEA-Strukturanalyse",
        "textVertical": "System • Komponenten • Baugruppen • Prozesse • Fehleridentifikation • Detaillierung",
        "textHorizontal": "Die FMEA-Strukturanalyse ist der erste Schritt der FMEA. Sie zerlegt das System in logische Einheiten und Komponenten, um Fehler systematisch identifizieren zu können.",
        "ptext": "✔ Ziel der Strukturanalyse: System in Bausteine oder Prozesse zerlegen → Fehler systematisch erkennen\n✔ Vorgehensweise: Von oben nach unten schauen, vom Gesamtsystem bis zu den einzelnen Komponenten\n✔ Jede Ebene bekommt eigene Detailtiefe, damit spätere Fehleranalyse gezielt erfolgen kann\n✔ Merksatz: Strukturanalyse = System in überschaubare Einheiten gliedern, bevor Fehler bewertet werden"
    },
    {
        "title": "FMEA-Strukturanalyse",
        "textVertical": "System • Komponenten • Baugruppen • Prozesse • Fehleridentifikation • Detailtiefe",
        "textHorizontal": "Die FMEA-Strukturanalyse zerlegt ein System in logische Einheiten, um Fehler systematisch zu identifizieren. Sie bildet die Basis für die spätere Fehler- und Risikobewertung.",
        "ptext": "✔ Ziel: System in Bausteine oder Prozesse zerlegen → Fehler gezielt erkennen\n✔ Vorgehensweise: Von oben nach unten schauen, vom Gesamtsystem bis zu einzelnen Komponenten\n✔ Jede Ebene bekommt eigene Detailtiefe für präzise Analyse\n✔ Merksatz: Strukturanalyse = System in überschaubare Einheiten gliedern, bevor Fehler bewertet werden"
    },
    {
        "title": "FMEA-Strukturanalyse - Vorgehensweise",
        "textVertical": "System • Subsysteme • Komponenten • Funktionen • Unterfunktionen • Ebenen",
        "textHorizontal": "Die Strukturanalyse zerlegt ein System in Ebenen: vom Gesamtsystem über Subsysteme und Komponenten bis zu Funktionen und optional Unterfunktionen. So werden Fehler systematisch erkannt und Verantwortlichkeiten zugeordnet.",
        "ptext": "✔ Schritt-für-Schritt:\n1️⃣ System definieren (Ebene 0): Gesamtes Produkt oder Prozess überblicken\n2️⃣ Subsysteme / Baugruppen identifizieren (Ebene 1): Große funktionale Blöcke erkennen\n3️⃣ Komponenten / Unterbaugruppen bestimmen (Ebene 2): Einzelteile oder Unterprozesse analysieren\n4️⃣ Funktionen der Komponenten analysieren (Ebene 3): Aufgaben der Teile festlegen\n5️⃣ Optional: Unterfunktionen (Ebene 4): Bei komplexen Systemen zusätzliche Details erfassen\n\n✔ Warum diese Struktur wichtig ist:\n• Verhindert, dass Fehler übersehen werden → systematische Analyse von oben nach unten\n• Klarheit für das Team → jeder weiß, welche Ebene bewertet wird\n• Einfacher Bezug zu FMEA-Bewertungen → Fehler werden einer Ebene zugeordnet\n• Verantwortlichkeiten leichter verteilen: Konstruktion, Produktion, QS"
    },
    {
        "title": "FMEA - Funktionsanalyse",
        "textVertical": "Systemebene • Subsysteme • Komponenten • Funktionen • Fehlerquelle",
        "textHorizontal": "Die Funktionsanalyse beschreibt die Aufgaben und Zwecke eines Systems oder Bauteils. Sie verknüpft die Systemstruktur mit der Fehleranalyse und hilft, Fehlerquellen gezielt zu identifizieren.",
        "ptext": "✔ Ziel der Funktionsanalyse:\n- Klar definieren, welche Funktion ein Bauteil oder eine Baugruppe erfüllt\n- Systemstruktur mit Fehleranalyse verbinden\n- Fehlerquellen gezielt identifizieren, da jede Funktion potenzielle Fehler haben kann\n\n✔ Vorgehensweise:\n1️⃣ Systemebene analysieren: Was soll das Gesamtsystem leisten? Beispiel: \"Kaffeemaschine liefert heißen Kaffee\"\n2️⃣ Subsysteme / Baugruppen analysieren: Welche Aufgaben haben die Subsysteme? Beispiel: \"Heizeinheit → Wasser erhitzen\"\n3️⃣ Komponenten / Bauteile analysieren: Welche Funktion hat jedes Teil? Beispiel: \"Thermostat → Temperatur überwachen\"\n\n✔ Merksatz:\nJede Funktion kann Fehler verursachen → genaue Analyse erleichtert spätere FMEA-Bewertungen"
    },
    {
        "title": "FMEA - Fehlerursachen & Risikobewertung",
        "textVertical": "Fehlerursachen • Mensch • Material • Maschine • Risikoanalyse • RPZ • Maßnahmen Risikoprioritätzahl zwischen 100 und 150- optimieren ",
        "textHorizontal": "Fehlerursachen erkennen, Risiken bewerten und passende Maßnahmen ableiten.",
        "ptext": "✔ Fehlerursachen analysieren:\n- Menschlich: z. B. Montage- oder Bedienfehler\n- Material: z. B. Materialschwäche, Verschleiß\n- Maschine: z. B. falsche Werkzeuge, Fertigungsfehler\n\n✔ Risikobewertung (S, A, E):\n- Severity (S): Wie schlimm ist die Auswirkung?\n- Occurrence (A): Wie oft tritt der Fehler auf?\n- Detection (E): Wie gut kann man ihn entdecken?\n→ RPZ = S × A × E\n\n✔ Maßnahmen ableiten:\nJe höher die RPZ, desto dringender:\n- Design verbessern\n- Prüfmethoden optimieren\n- Prozess oder Schulung anpassen"
    },
    {
        "title": "FMEA - Handlungslogik bei S, A oder E ≥ 8",
        "textVertical": "Hohe Severity • Hohe Occurrence • Hohe Detection • Sofort handeln • Risiko reduzieren",
        "textHorizontal": "Wenn S, A oder E einen Wert von 8 oder höher erreichen, besteht dringender Handlungsbedarf.",
        "ptext": "✔ Bedeutung von hohen Werten (≥ 8):\n- S ≥ 8: Kritische Auswirkung für Kunde oder Sicherheit → sofort Maßnahmen planen\n- A ≥ 8: Fehler tritt sehr häufig auf → Ursache priorisiert beseitigen\n- E ≥ 8: Fehler wird kaum erkannt → Prüfprozess dringend verbessern\n\n✔ Handlungslogik:\n- Schon EIN Wert ≥ 8 reicht für Pflichtmaßnahmen\n- Kombination mehrerer hoher Werte = sehr hohes Risiko\n- Ziel: Risiko reduzieren durch Designänderungen, Prozessoptimierung oder bessere Prüfungen"
    },
    {
        "title": "FMEA - Präsentation & Vorbereitung",
        "textVertical": "Vorbereitung • Prioritäten • Visualisierung • Präsentationsstruktur • Maßnahmen • Zeitplan • Innovation",
        "textHorizontal": "Leitfaden zur Vorbereitung und Präsentation deiner FMEA-Ergebnisse.",
        "ptext": "✔ Vorbereitung vor dem Gespräch:\n- FMEA-Ergebnisse sammeln: Tabellen zu System, Funktionen, Fehlerarten, Ursachen, Folgen, S/A/E, RPZ.\n- Kritische Punkte markieren: S, A, E ≥ 8 oder RPZ > 200.\n- Visualisierung vorbereiten: Ampelsystem (Rot = kritisch, Gelb = mittel, Grün = gering).\n\n✔ Struktur der Präsentation:\n1️⃣ Einleitung: Ziel der FMEA = Risiken erkennen & minimieren.\n2️⃣ System- & Funktionsanalyse: Ebenen 0–3 kurz zeigen.\n3️⃣ Fehleranalyse & RPZ: Fehlerarten, Ursachen, Folgen und kritische RPZ hervorheben.\n4️⃣ Maßnahmen: Designänderungen, Prozessanpassungen, Prüfpunkte, Materialänderungen.\n5️⃣ Prioritäten & Zeitplan: Sofortmaßnahmen vs. langfristige Optimierungen.\n\n✔ Präsentationstipps:\n- Klar & strukturiert präsentieren, Fokus auf kritische Risiken.\n- Ampel- oder Balkendiagramme nutzen.\n- Maßnahmen begründen: Wie senken sie das Risiko?\n\n✔ Beispiel (RPZ-Reduktion):\n- Fehler: Schrauben lösen sich → Gehäuse wackelt.\n- S6/A4/E5 → RPZ 120.\n- Maßnahme: Montagehinweis + Nachziehen.\n- Neue RPZ: 60 → Risiko gering.\n\n✔ Innovativer Vorschlagsaufbau:\n- Lösung: kreativ & wirksam.\n- Problem: klar benennen.\n- Kosten: realistisch einschätzen.\n- Nutzen: weniger Ausfälle, höhere Sicherheit.\n\n✔ Beispiel Innovation:\n- Verriegelung statt Schrauben → Problem: Schrauben lösen sich → Kosten: 500 € → Nutzen: stabiler & weniger Montagefehler.\n- Verstärkter Kunststoff → Problem: Materialbruch → Kosten: 1000 € → Nutzen: langlebiger & weniger Reklamationen."
    },
    {
        "title": "Elevator Pitch – Ziel",
        "textVertical": "Kernbotschaft • Nutzen • Problem • Lösung • Interesse wecken",
        "textHorizontal": "Der Elevator Pitch vermittelt eine Idee oder Lösung in 30–60 Sekunden klar und überzeugend.",
        "ptext": "✔ Ziel eines Elevator Pitch:\n- Eine Idee kurz, verständlich und spannend erklären.\n- Das wichtigste Problem benennen – und die passende Lösung liefern.\n- Sofort zeigen, welchen Nutzen die Idee bietet.\n- Interesse der Zuhörer wecken (z. B. Auftraggeber, Chef, Investor).\n- Gesprächsbereitschaft erzeugen: 'Erzähl mir mehr!'\n\nMerksatz: Kurz, klar, knackig → Problem, Lösung, Nutzen."
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
          <div class = seidMenu"" > </div>
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

