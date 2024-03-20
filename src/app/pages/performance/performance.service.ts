
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// export interface IRoleModel {
//     id: number;
//     name: string;
//     created_at?: string;
//     updated_at?: string;
//     permissions: IPermissionModel[];
//     users: IUserModel[];
//   }

@Injectable({
    providedIn: 'root'
  })
  export class PerformanceApiService {
  
    constructor(private http: HttpClient) { }
  
    async getPerformanceData(): Promise<any[]> {
      try{
      return await this.http.get<any>('./assets/performance.json').toPromise();
    } catch (error) {
      console.error('Error fetching mock data:', error);
      return [];
    }
    }
  }

