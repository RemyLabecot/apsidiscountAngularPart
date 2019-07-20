import { Article } from './article';

export class Panier {
    constructor(
        public id: number,
        public articles: Article[]
    ){}
}