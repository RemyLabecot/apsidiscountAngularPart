import { Categorie } from './categorie';
import { Constructeur } from './constructeur';

export class Article {

  constructor(public id: number,
    public designation: string,
    public image: string,
    public prix: number,
    public content: string,
    public categorie: Categorie,
    public constructeur: Constructeur,
    public stock: number){
    }
}
