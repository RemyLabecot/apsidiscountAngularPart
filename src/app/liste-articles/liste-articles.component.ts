import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']

})
export class ListeArticlesComponent implements OnInit {

  listeArticles: Article[];
  message: string;
  stockSelected: number;
  typeListe: number;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getAllArticles().subscribe(
      articles => this.listeArticles = articles
    );
    this.message = 'Pas d\'articles dans la liste';
    this.stockSelected = 0;
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

  selectArticle(art: Article){
    console.log('selectArticle : id =' + art.id);
    let link=['/gestionArticle', {outlets: {'detail': [art.id]}}];
    this.router.navigate(link);
  }
}
