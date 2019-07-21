import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent implements OnInit {


  constructor() {
   }

  ngOnInit() {
  }
}
