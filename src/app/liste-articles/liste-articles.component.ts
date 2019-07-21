import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';
import { Client } from '../model/client';
import { AppComponent } from '../app.component';
import Swal from 'sweetalert2';
import { CategorieService } from '../service/categorie.service';
import { ClientService } from '../service/client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']

})
export class ListeArticlesComponent implements OnInit {

  private listeArticles: Article[] = [];
  private listArticlesPanier: Article[] = [];

  private client: Client;
  private idClient: number;

  private message: string;
  private stockSelected: number;
  private typeListe: number;

  private subscription: Subscription;

  constructor(private router: Router, private clientService: ClientService, private articleService: ArticleService, private categorieService: CategorieService, private appComponent: AppComponent) { 
    this.subscription = this.articleService._article
      .subscribe(
        articles => {
          this.listeArticles = articles
        }
      );
  }

  ngOnInit() {
    this.idClient = this.appComponent.idClient;
    this.articleService.getAllArticles()
      .subscribe(
        articles => this.listeArticles = articles
      );
    this.message = 'Pas d\'articles dans la liste';
    this.stockSelected = 0;

    console.log("Client connecté : " + this.idClient);
  }

  afficherArticlesAvecStock() {
    this.typeListe = 2;
    this.articleService.getArticlesAvecStock(this.stockSelected).subscribe(
      articles => this.listeArticles = articles
    );
  }

  afficherTousArticles() {
    this.typeListe = 1;
    this.articleService.getAllArticles().subscribe(
      articles => this.listeArticles = articles
    );
  }

  supprimerArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe(
      value => {
        switch (this.typeListe) {
          case 1: this.afficherTousArticles();
          case 2: this.afficherArticlesAvecStock();
          default: this.listeArticles = null;
        }
      },
      err => this.message = 'erreur lors de la suppression de l article'
    );
  }

  selectArticle(art: Article) {
    console.log('selectArticle : id =' + art.id);
    let link = ['gestionArticle', { outlets: { 'detail': [art.id] } }];
    this.router.navigate(link);
  }

  ajouterAuPanier(art: Article) {
    this.articleService.addPanier(this.idClient, art.id)
      .subscribe(
        article => {
          this.listArticlesPanier.push(article)
          Swal.fire(
            'Bravo !',
            'Votre article a bien été ajouté au panier !',
            'success'
          )
        }
      );
  }
}
