const User = function (_nome, _cognome, _eta, _paese) {
  this.nome = _nome;
  this.cognome = _cognome;
  this.eta = _eta;
  this.paese = _paese;

  this.presentazione = function () {
    return `( Ciao, mi chiamo ${this.nome} , il mio cognome è ${this.cognome} , ho ${this.eta} , vengo da ${this.paese})`;
  };
};
const nuovoutente = new User("Emanuela", "Carrubba", " 27 ", " salerno");
console.log(nuovoutente);
console.log(nuovoutente.presentazione());

const sorella = function (
  _nome,
  _cognome,
  _colorecapelli,
  _residenza,
  _coloreocchi,
) {
  this.nome = _nome;
  this.cognome = _cognome;
  this.colorecapelli = _colorecapelli;
  this.residenza = _residenza;
  this.coloreocchi = _coloreocchi;
  this.sorella = function () {
    return `(Mia sorella si chiama ${this.nome}, il suo cognome è ${this.cognome}, il suo colore di capelli è ${this.colorecapelli} , risiende in ${this.residenza} , il suo colore degli occhi è ${this._coloreocchi})`;
  };
};
const miasorella = new sorella(
  "Sara ",
  "Carrubba",
  "biondo",
  "Sicilia",
  "azzurro",
);
console.log(sorella());
console.log(miasorella.sorella());

const figlio = function (
  _nome,
  _cognome,
  _giocopreferito,
  _capelli,
  _compleanno,
) {
  this.nome = _nome;
  this.cognome = _cognome;
  this.giocopreferito = _giocopreferito;
  this.capelli = _capelli;
  this.compleanno = _compleanno;
  this.info = function () {
    return `( Mio figlio si chiama ${this.nome} , il suo cognome è ${this.cognome} , il suo gioco preferito è il  ${this.giocopreferito} ,i suoi capelli sono ${this.capelli} , il suo compleanno è il ${this.compleanno}  )    `;
  };
};
const identity = new figlio(
  "Elimane",
  "Samb",
  "calcio",
  "ricci",
  "24 settembre",
);
console.log(identity.info());

const cucina = function (
  _numerosedie,
  _numerotavolo,
  _numerofornello,
  _coloremobili,
  _televisione,
) {
  this.numerosedie = _numerosedie;
  this.numerotavolo = _numerotavolo;
  this.numerofornello = _numerofornello;
  this.coloremobili = _coloremobili;
  this.televisione = _televisione;
  this.cucina5 = function () {
    return `(La cucina è composta da ${this.numerosedie} sedie , possiede ${this.numerotavolo} tavolo, il piano cottura gestisce ${this.numerofornello} fornelli , le ante dei mobili hanno un ${this.coloremobili}, e ha un modello di televisione ${this.televisione})`;
  };
};

const accessoricucina = new cucina(
  "quattro",
  " un solo",
  " quattro",
  "colore bianco e nero",
  "avanzato",
);
console.log(accessoricucina.cucina5());
