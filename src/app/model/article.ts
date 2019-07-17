export class Article {

  constructor(public id: number,
    public designation: string,
    public image: string,
    public prix: number,
    public content: string,
    public categorie: string,
    public constructeur: string,
    public dateMiseEnLigne: Date,
    public stock: number){
    }

  


}
