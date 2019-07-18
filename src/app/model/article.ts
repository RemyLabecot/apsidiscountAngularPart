import { categorie } from './categorie';
import { constructeur } from './constructeur';

export class Article {

  constructor(public id: number,
    public designation: string,
    public image: string,
    public prix: number,
    public content: string,
    public categorie: categorie,
    public constructeur: constructeur,
    public dateMiseEnLigne: Date,
    public stock: number){
    }
}
