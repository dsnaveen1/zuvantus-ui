import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRoleModel } from './role.service';

export interface DataTablesResponse {
    draw?: number;
    recordsTotal: number;
    recordsFiltered: number;
    data: any[];
    search?: { value: string };
    filter?: { 'Employment Status': string };
}

export interface IUserModel {
    avatar?: null | string;
    created_at?: string;
    email: string;
    email_verified_at?: string;
    id: number;
    last_login_at?: null | string;
    last_login_ip?: null | string;
    name?: string;
    profile_photo_path?: null | string;
    updated_at?: string;
    password?: string;
    roles?: IRoleModel[];
    role?: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = 'https://preview.keenthemes.com/starterkit/metronic/laravel/api/v1/users';
    // private apiUrl = 'http://127.0.0.1:8000/api/v1/users';

    private getAllRecords = 'https://zu-backend.onrender.com/records/getRecords';
    private ffcodes ='https://zu-backend.onrender.com/records/ffcodes';


    constructor(private http: HttpClient) { }

    getRecords_Status(dataTablesParameters: DataTablesResponse,filter: string): Observable<DataTablesResponse> {
        const url = `${this.getAllRecords}`;
        dataTablesParameters.filter = { 'Employment Status': filter };
        return this.http.post<DataTablesResponse>(url, dataTablesParameters);
    }
    getRecords(dataTablesParameters: DataTablesResponse): Observable<DataTablesResponse> {
        const url = `${this.getAllRecords}`;
        return this.http.post<DataTablesResponse>(url, dataTablesParameters);
    }

    getFFcodes(dataTablesParameters: DataTablesResponse): Observable<DataTablesResponse> {
        const url = `${this.ffcodes}`;
        return this.http.post<DataTablesResponse>(url, dataTablesParameters);
    }
    getUsers(dataTablesParameters: any): Observable<DataTablesResponse> {
        const url = `${this.apiUrl}-list`;
        return this.http.post<DataTablesResponse>(url, dataTablesParameters);
    }

    getUser(id: number): Observable<IUserModel> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<IUserModel>(url);
    }

    createUser(user: IUserModel): Observable<IUserModel> {
        return this.http.post<IUserModel>(this.apiUrl, user);
    }

    updateUser(id: number, user: IUserModel): Observable<IUserModel> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<IUserModel>(url, user);
    }

    deleteUser(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}