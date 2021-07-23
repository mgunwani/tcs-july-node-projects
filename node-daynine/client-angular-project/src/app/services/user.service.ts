import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>
            ('http://localhost:3000/users')
    }

}