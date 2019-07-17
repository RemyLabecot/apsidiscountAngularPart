import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
    {
        path: 'gestionArticle', component: GestionArticleComponent,
        children: [
            { path: '', component: ListeArticlesComponent, outlet: 'list' },
            { path: ':id', component: DetailArticleComponent, outlet: 'detail' }]
    },
    { path: 'accueil', component: AccueilComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: AccueilComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
