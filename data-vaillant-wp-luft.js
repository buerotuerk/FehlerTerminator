const dataVaillantWPLuft = [
  {
    code: "N.685",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe / Notbetrieb",
    geraet: "Vaillant VWL / Hydraulikstation / uniTOWER",
    baujahr: "verschiedene",
    bedeutung: "Kommunikation Systemregler unterbrochen",
    ursache: "Fehler am Reglermodul oder Kabelverbindung unterbrochen.",
    hinweis: "Kabelverbindung zum Reglermodul prüfen. Ggf. Reglermodul austauschen."
  },

  {
    code: "F.022",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM / Hydraulikstation",
    baujahr: "verschiedene",
    bedeutung: "Wasserdruck zu niedrig / zu wenig Wasser im Produkt",
    ursache: "Zu wenig Wasser, Leckage, Luft im System, Fehler am Wasserdrucksensor oder Kabel zur Pumpe/Sensor lose oder defekt.",
    hinweis: "Heizungsanlage befüllen, Anlage auf Leckagen prüfen, Wasserdrucksensor und Kabelbaum prüfen."
  },

  {
    code: "F.042",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kodierwiderstand ungültig",
    ursache: "Kodierwiderstand beschädigt, nicht erkannt oder falscher Kabelbaum.",
    hinweis: "Kodierwiderstand und Stecker/Kabelbaum prüfen."
  },

  {
    code: "F.073",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Sensorfehler Wasserdrucksensor",
    ursache: "Sensor nicht angeschlossen, Leitung unterbrochen oder Kurzschluss.",
    hinweis: "Wasserdrucksensor, Stecker und Kabelbaum prüfen."
  },

  {
    code: "F.094",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / Hydraulikstation",
    baujahr: "verschiedene",
    bedeutung: "Fehler Volumenstromsensor / Vortex",
    ursache: "Volumenstromsensor nicht angeschlossen oder Sensoreingang kurzgeschlossen.",
    hinweis: "Sensor und Kabelbaum prüfen, ggf. austauschen."
  },

  {
    code: "F.103",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Fehler Ersatzteilkennung",
    ursache: "Falsche oder nicht passende Leiterplatte / Ersatzteilkennung.",
    hinweis: "Korrekte Leiterplatte bzw. Ersatzteil-Kompatibilität prüfen."
  },

  {
    code: "F.283",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL",
    baujahr: "verschiedene",
    bedeutung: "Enteisung nicht erfolgreich",
    ursache: "Nicht genügend Wärmeenergie, Elektro-Zusatzheizung nicht verfügbar oder Eisbildung am Verdampfer.",
    hinweis: "Heizkreise öffnen, Zusatzheizung prüfen, Außeneinheit auf Eisbildung prüfen."
  },

  {
    code: "F.514",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatursensor Kompressoreinlass ungültig",
    ursache: "Sensor defekt oder nicht angeschlossen.",
    hinweis: "Stecker, Temperatursensor, Kabelbaum und Leiterplatte prüfen."
  },

  {
    code: "F.517",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatursensor Kompressorauslass ungültig",
    ursache: "Sensor defekt oder nicht angeschlossen.",
    hinweis: "Stecker, Kabelbaum, Sensor und Leiterplatte prüfen."
  },

  {
    code: "F.519",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Rücklauftemperatursensor Gebäudekreis ungültig",
    ursache: "Rücklauftemperatursensor defekt oder nicht angeschlossen.",
    hinweis: "Stecker, Kabelbaum, Sensor und Leiterplatte prüfen."
  },

  {
    code: "F.520",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Vorlauftemperatursensor Gebäudekreis ungültig",
    ursache: "Vorlauftemperatursensor defekt oder nicht angeschlossen.",
    hinweis: "Stecker, Kabelbaum, Sensor und Leiterplatte prüfen."
  },

  {
    code: "F.526",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatursensor Verdampfereinlass ungültig",
    ursache: "Sensor nicht angeschlossen oder Sensoreingang kurzgeschlossen.",
    hinweis: "Stecker, Temperatursensor und Kabelbaum prüfen."
  },

  {
    code: "F.546",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Hochdrucksensor Kältemittelkreis ungültig",
    ursache: "Hochdrucksensor defekt oder nicht angeschlossen.",
    hinweis: "Stecker, Kabelbaum und Drucksensor prüfen."
  },

  {
    code: "F.582",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Fehler elektrisches Expansionsventil",
    ursache: "EEV nicht richtig angeschlossen oder Kabelbruch zur Spule.",
    hinweis: "Steckverbindungen prüfen, ggf. EEV-Spule austauschen."
  },

  {
    code: "F.585",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatursensor Verflüssigerauslass ungültig",
    ursache: "Temperatursensor am Kondensatorauslass defekt oder nicht angeschlossen.",
    hinweis: "Stecker, Kabelbaum, Sensor und Leiterplatte prüfen."
  },

  {
    code: "F.703",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Niederdrucksensor Kältemittelkreis ungültig",
    ursache: "Niederdrucksensor nicht angeschlossen oder Sensoreingang kurzgeschlossen.",
    hinweis: "Niederdrucksensor und Kabelbaum prüfen."
  },

  {
    code: "F.718",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Lüfter 1 Umweltkreis blockiert",
    ursache: "Lüfter rotiert nicht oder Luftweg blockiert.",
    hinweis: "Luftweg prüfen, Blockade entfernen, Lüftereinheit prüfen."
  },

  {
    code: "F.729",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatur Kompressorauslass zu niedrig",
    ursache: "Kompressorauslasstemperatur unplausibel niedrig.",
    hinweis: "Hochdrucksensor, EEV, Kondensatorauslassfühler und 4-Wege-Umschaltventil prüfen."
  },

  {
    code: "F.731",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Hochdruckschalter geöffnet",
    ursache: "Kältemitteldruck zu hoch oder Wärmeabgabe über Verflüssiger nicht ausreichend.",
    hinweis: "Gebäudekreis entlüften, Volumenstrom prüfen, Schmutzsiebe prüfen, Hochdruckschalter zurücksetzen."
  },

  {
    code: "F.732",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kompressorauslasstemperatur zu hoch",
    ursache: "Einsatzgrenzen überschritten, EEV arbeitet nicht korrekt oder Kältemittelmenge zu gering.",
    hinweis: "Kompressoreinlass-/Auslassfühler, EEV, Kältemittelmenge und Serviceventile prüfen."
  },

  {
    code: "F.733",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatur Verdampfung zu niedrig",
    ursache: "Zu geringer Luftvolumenstrom oder Kältemittelmenge zu gering.",
    hinweis: "Lüftereinheit, EEV, Kompressoreinlassfühler und Kältemittelmenge prüfen."
  },

  {
    code: "F.734",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatur Kondensation zu niedrig",
    ursache: "Heizkreistemperatur zu niedrig oder Kältemittelmenge zu gering.",
    hinweis: "EEV, Kompressoreinlassfühler, Kältemittelfüllmenge, Hochdrucksensor und Drucksensor prüfen."
  },

  {
    code: "F.735",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatur Verdampfung zu hoch",
    ursache: "Temperatur im Umweltkreis bzw. Gebäudekreis zu hoch für Kompressorbetrieb oder Fremdwärmeeinspeisung zu hoch.",
    hinweis: "Systemtemperaturen, Kältemittelfüllmenge, EEV, Verdampfungstemperatursensor, Volumenstrom und Luftvolumenstrom prüfen."
  },

  {
    code: "F.737",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kondensationstemperatur zu hoch",
    ursache: "Gebäudekreis zu warm, Fremdwärmeeintrag, Kältemittelkreis überfüllt oder zu geringer Durchfluss.",
    hinweis: "Fremdwärmeeintrag unterbinden, Zusatzheizung prüfen, EEV, Sensoren, Kältemittelfüllmenge und Heizungspumpe prüfen."
  },

  {
    code: "F.752",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Frequenzumrichter interner Fehler / unbekannter Kompressorfehler",
    ursache: "Interner Elektronikfehler am Umrichter oder Netzspannung außerhalb des zulässigen Bereichs.",
    hinweis: "Netzanschluss, Kompressor-Anschlusskabel, Netzspannung und Phasen prüfen. Ggf. Umrichter ersetzen."
  },

  {
    code: "F.753",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kommunikation mit Frequenzumrichter unterbrochen",
    ursache: "Kommunikation zwischen Umrichter und Reglerleiterplatte gestört.",
    hinweis: "Kabelbaum, Steckverbindungen und Umrichter-Ansteuerung prüfen."
  },

  {
    code: "F.755",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "4-Wege-Umschaltventil nicht in erwarteter Position",
    ursache: "4-Wege-Ventil mechanisch/elektrisch fehlerhaft oder Temperatursensor liefert falsche Werte.",
    hinweis: "4-Wege-Umschaltventil, Spule, Kabelbaum, Steckverbindungen und Temperatursensor prüfen."
  },

  {
    code: "F.757",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Mindestlaufzeit Kompressor zu oft unterschritten",
    ursache: "Zu geringes Heizwasservolumen oder ungünstige Startbedingungen.",
    hinweis: "Umlaufheizwasservolumen prüfen und ggf. erhöhen."
  },

  {
    code: "F.785",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Ventilator 2 Umweltkreis blockiert",
    ursache: "Bestätigungssignal fehlt, dass der Lüfter rotiert.",
    hinweis: "Luftweg prüfen, Blockade entfernen."
  },

  {
    code: "F.788",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Gebäudekreispumpe meldet internen Fehler",
    ursache: "Pumpe erkennt z. B. Trockenlauf, Blockade, Über- oder Unterspannung.",
    hinweis: "Wärmepumpe 30 Sekunden stromlos schalten, Steckkontakt, Pumpe und Gebäudekreis prüfen."
  },

  {
    code: "F.817",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kompressormotor oder Anschlusskabel defekt",
    ursache: "Kurzschluss im Kompressor, Umrichterfehler oder Anschlusskabel lose/defekt.",
    hinweis: "Wicklungswiderstand, Umrichterausgang, Kabelbaum und Steckverbindungen prüfen."
  },

  {
    code: "F.818",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Netzspannung am Frequenzumrichter fehlt oder außerhalb Toleranz",
    ursache: "Falsche Netzspannung oder EVU-Abschaltung.",
    hinweis: "Netzspannung messen und korrigieren. Zulässigen Bereich prüfen."
  },

  {
    code: "F.819",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Frequenzumrichter überhitzt",
    ursache: "Interne Überhitzung des Umrichters.",
    hinweis: "Umrichter abkühlen lassen, Luftweg und Lüfter prüfen."
  },

  {
    code: "F.820",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kommunikation mit Gebäudekreispumpe unterbrochen",
    ursache: "Pumpe meldet kein Signal an die Wärmepumpe zurück.",
    hinweis: "Kabel zur Pumpe prüfen und ggf. Pumpe ersetzen."
  },

  {
    code: "F.821",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Vorlauftemperatursensor elektrische Zusatzheizung ungültig",
    ursache: "Sensor nicht angeschlossen, Kurzschluss oder beide Vorlauftemperatursensoren defekt.",
    hinweis: "Sensor prüfen und ggf. austauschen. Kabelbaum prüfen."
  },

  {
    code: "F.822",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Drucksensor Sole/Gebäudekreis unterbrochen oder kurzgeschlossen",
    ursache: "Drucksensor oder Kabelbaum defekt.",
    hinweis: "Sensor und Kabelbaum prüfen."
  },

  {
    code: "F.823",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperaturschalter Kompressor ausgelöst",
    ursache: "Heißgasthermostat schaltet wegen zu hoher Kältemittelkreistemperatur ab.",
    hinweis: "EEV prüfen, Schmutzsiebe im Kältemittelkreis ggf. erneuern."
  },

  {
    code: "F.824",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Druck im Solekreislauf/Systemtrennung zu niedrig",
    ursache: "Kein Heizwasser im entkoppelten Gebäudekreis oder Druck zu niedrig.",
    hinweis: "Druck auf über 0,5 bar erhöhen und Sensor prüfen."
  },

  {
    code: "F.825",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Temperatursensor Verflüssigereinlass ungültig",
    ursache: "Kältemittelkreis-Temperatursensor nicht angeschlossen oder Kurzschluss.",
    hinweis: "Sensor und Kabel prüfen, ggf. austauschen."
  },

  {
    code: "F.827",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Wasserdrucksensor Gebäudekreis ungültig",
    ursache: "Sensor nicht angeschlossen oder Kurzschluss.",
    hinweis: "Sensor, Kabelbaum und Reglerleiterplatte prüfen."
  },

  {
    code: "F.905",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kommunikationsschnittstelle abgeschaltet",
    ursache: "Überstrom an der Kommunikationsschnittstelle.",
    hinweis: "Verbindung zwischen Leiterplatte und angeschlossenen Modulen prüfen."
  },

  {
    code: "F.1100",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / Hydraulikstation",
    baujahr: "verschiedene",
    bedeutung: "Sicherheitstemperaturbegrenzer elektrische Zusatzheizung ausgelöst",
    ursache: "Zu geringer Volumenstrom, Luft im Gebäudekreis, Heizstab bei leerem Kreis oder Fremdwärmeeintrag.",
    hinweis: "Gebäudekreispumpe, Absperrhähne, Schmutzsiebe prüfen. Sicherheitstemperaturbegrenzer austauschen."
  },

  {
    code: "F.1117",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Frequenzumrichter Phasenausfall",
    ursache: "Sicherung defekt, elektrische Anschlüsse fehlerhaft, Netzspannung zu niedrig oder EVU-Sperre zu lang.",
    hinweis: "Sicherung, elektrische Anschlüsse, Netzspannung und EVU-Sperrzeit prüfen."
  },

  {
    code: "F.1120",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / Hydraulikstation / uniTOWER",
    baujahr: "verschiedene",
    bedeutung: "Elektrische Zusatzheizung Phasenausfall",
    ursache: "Defekt der Elektro-Zusatzheizung, lose Elektroanschlüsse oder zu niedrige Netzspannung.",
    hinweis: "Elektro-Zusatzheizung, Anschlüsse und Spannung prüfen."
  },

  {
    code: "F.1288",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / uniTOWER / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Speichertemperaturfühler SP1 Fehler",
    ursache: "Sensor defekt oder nicht richtig angeschlossen.",
    hinweis: "Speicherfühler SP1 und Anschluss prüfen."
  },

  {
    code: "F.9997",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Kommunikation Inneneinheit/Außeneinheit wegen unterschiedlicher Bus-Protokolle nicht möglich",
    ursache: "Austausch-/Ersatzteilfall bei Reglerleiterplatte oder Außeneinheit.",
    hinweis: "Auf korrekte Gerätepaarung achten."
  },

  {
    code: "F.9998",
    hersteller: "Vaillant",
    gruppe: "Wärmepumpe",
    geraet: "Vaillant VWL / aroTHERM",
    baujahr: "verschiedene",
    bedeutung: "Keine Kommunikation zwischen Inneneinheit und Außeneinheit",
    ursache: "Kommunikationskabel nicht oder falsch angeschlossen oder Außeneinheit ohne Versorgungsspannung.",
    hinweis: "Kommunikationskabel zwischen Innen- und Außeneinheit sowie Versorgungsspannung prüfen."
  }
];

alleCodes.push(...dataVaillantWPLuft);
