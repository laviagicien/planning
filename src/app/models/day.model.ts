export class Day {
  public matin = {
    debut: String,
    fin: String
  };
  public soir = {
    debut: String,
    fin: String
  }

  constructor (matDeb, matFin, soirDeb, soirFin){
    this.matin.debut = matDeb;
    this.matin.fin = matFin;
    this.soir.debut = soirDeb;
    this.soir.fin = soirFin;

  }
}
