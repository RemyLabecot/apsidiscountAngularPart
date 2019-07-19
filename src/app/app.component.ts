import { Component } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientService } from './service/client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matInfo';
  subscription: Subscription;
  nomClient: string;
  prenomClient: string;

  constructor(private clientService: ClientService) {
    this.subscription = this.clientService.client.subscribe(
      client => {
        this.nomClient = client.nom
        this.prenomClient = client.prenom
      }
    )
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
