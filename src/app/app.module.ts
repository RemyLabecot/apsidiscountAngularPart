import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ArticleService } from './service/article.service';
import { StockDirective } from './stock.directive';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailArticleComponent,
    ListeArticlesComponent,
    StockDirective,
    GestionArticleComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
