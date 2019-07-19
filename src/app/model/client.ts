import { Panier } from './panier';

export class Client {

    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public adresse: string,
        public codePostal: string,
        public ville: string,
        public email: string,
        public motDePasse: string,
        public dateNaissance: Date,
        public panier: Panier
    ) {}
}