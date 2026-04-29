const dataVaillantGas = [
  {
    code: "F22",
    bedeutung: "Wasserdruck zu niedrig",
    hinweis: "Anlagendruck prüfen und ggf. Wasser nachfüllen.",
    geraet: "Vaillant Gasgerät"
  },
  {
    code: "F27",
    bedeutung: "Flammensignal erkannt, obwohl kein Gas freigegeben ist",
    hinweis: "Ionisationselektrode, Feuchtigkeit oder Elektronik prüfen.",
    geraet: "Vaillant Gasgerät"
  },
  {
    code: "F28",
    bedeutung: "Keine Zündung",
    hinweis: "Gasversorgung, Zündung und Elektroden prüfen.",
    geraet: "Vaillant Gasgerät"
  },
  {
    code: "F29",
    bedeutung: "Flamme während Betrieb erloschen",
    hinweis: "Gasdruck, Verbrennung und Abgasweg prüfen.",
    geraet: "Vaillant Gasgerät"
  },
  {
    code: "F75",
    bedeutung: "Druckanstieg beim Pumpenstart nicht erkannt",
    hinweis: "Pumpe, Drucksensor oder Luft in der Anlage prüfen.",
    geraet: "Vaillant Gasgerät"
  }
];

alleCodes.push(...dataVaillantGas);
