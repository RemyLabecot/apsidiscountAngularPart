import { Injectable } from "@angular/core";
import { Client } from '../model/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ClientService {

    baseURL = 'http://localhost:8081/apsidiscountweb/api';
    private _client = new Subject<Client>();

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {

    }

    public getClientByLoginAndPassword(email: string, password: string): Observable<Client> {
        let jsonObject = {
            "email": email,
            "password": password
        };
        return this.http.post<Client>(`${this.baseURL}/client`, jsonObject, this.httpOptions);
    }

    public get client() {
        return this._client;
    }
    public set client(value) {
        this._client = value;
    }

}