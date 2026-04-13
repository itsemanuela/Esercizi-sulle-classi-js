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
