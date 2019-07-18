import { Article } from "./../model/article";
import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-detail-article",
  templateUrl: "./detail-article.component.html",
  styleUrls: ["./detail-article.component.css"]
  
})
export class DetailArticleComponent implements OnInit {
  // image = "assets/ecran_samsung_C27H580F.PNG";
  @Input() article: Article;
  alignement: string;
  disabled = false;

  constructor(private route:ActivatedRoute, private articleService : ArticleService) {}

  ngOnInit() {
    console.log('DetailArticleComponent - ngOnInit() appelée... ');
    this.route.paramMap.subscribe(param => {
      let id = parseInt(param.get('id'));
      this.articleService.getArticleById(id).subscribe(data => this.article = data);
    });
    this.gererAlignement();
  }

  // public augmenterPrix() {
  //   this.article.prix = this.article.prix + 5;
  //   this.article.stock--;
  //   this.gererAlignement();
  // }

  // public afficherStock() {
  //   console.log(' le stock dans le composant est de :' + this.article.stock);
  // }

  private gererAlignement() {
    this.alignement = 'center';
    if (this.article.prix < 15) {
      this.alignement = 'left';
    }
  }
}
