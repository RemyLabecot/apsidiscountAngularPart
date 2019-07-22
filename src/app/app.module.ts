import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ArticleService } from './service/article.service';
import { StockDirective } from './stock.directive';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientService } from './service/client.service';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './service/panier.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CategorieService } from './service/categorie.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DetailArticleComponent,
    ListeArticlesComponent,
    StockDirective,
    GestionArticleComponent,
    AccueilComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })

  ],
  providers: [ArticleService, ClientService, PanierService, CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
