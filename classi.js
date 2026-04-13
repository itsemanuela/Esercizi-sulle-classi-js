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
  this.coloreocchi = _azzurro;
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
