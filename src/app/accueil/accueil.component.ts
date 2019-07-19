import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  email: FormControl;
  password: FormControl;

  loginForm: FormGroup;
  error: string;

  constructor(private clientService: ClientService, private builder: FormBuilder, private router: Router, private app: AppComponent) {

    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);


    this.loginForm = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
  }

  public getClientByLoginAndPassword() {
    let email = this.email.value;
    let password = this.password.value;
    this.clientService.getClientByLoginAndPassword(email, password).subscribe(client => {
      this.clientService.client.next(client)
      this.router.navigate(['gestionArticle']);
    }
      ,
      err => this.error = err.error.message
    );
  }
}
