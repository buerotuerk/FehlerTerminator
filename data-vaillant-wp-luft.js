const dataVaillantWPSymptome = [
  {
    code: "SYMPTOM-DISPLAY-DUNKEL",
    suchbegriffe: ["display dunkel", "display aus", "kein display", "anzeige dunkel", "regler dunkel"],
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "aroTHERM",
    baujahr: "-",
    bedeutung: "Display bleibt dunkel",
    ursache: "Mögliche Ursachen sind fehlende Spannungsversorgung, ausgelöste Sicherung, Anschlussfehler oder keine Versorgung des Reglers.",
    hinweis: "Spannungsversorgung prüfen, Sicherungen prüfen, Regleranschluss prüfen, eBUS-Verbindung prüfen."
  },
  {
    code: "SYMPTOM-PUMPE-LAEUFT-NICHT",
    suchbegriffe: ["pumpe läuft nicht", "heizkreispumpe läuft nicht", "pumpe startet nicht", "keine pumpenfunktion"],
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "aroTHERM",
    baujahr: "-",
    bedeutung: "Heizkreispumpe läuft nicht an",
    ursache: "Mögliche Ursachen sind Luft im Heizkreis, fehlender Wasserdruck, blockierte Pumpe, defekte Verkabelung oder Pumpenfehler.",
    hinweis: "Anlagendruck prüfen, Heizkreis entlüften, Schmutzfilter prüfen, Pumpe und Verkabelung kontrollieren."
  },
  {
    code: "SYMPTOM-DURCHFLUSS",
    suchbegriffe: ["durchfluss zu niedrig", "zu wenig durchfluss", "volumenstrom", "wassermangel"],
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "aroTHERM",
    baujahr: "-",
    bedeutung: "Durchfluss im Heizkreis zu niedrig",
    ursache: "Mögliche Ursachen sind nicht entlüfteter Heizkreis, verstopfter Schmutzfilter, Wassermangel, hoher Druckverlust oder Pumpenproblem.",
    hinweis: "Heizkreis entlüften, Schmutzfilter reinigen, Anlagendruck prüfen, Pumpe prüfen."
  }
];

alleCodes.push(...dataVaillantWPSymptome);
