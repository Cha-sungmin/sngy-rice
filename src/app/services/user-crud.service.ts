import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Menu {
  id: string;
  name: string;
  menu: string;
  cnt: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {

  endpoint = 'https://api-dev.sngy.io/v1/study/board';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMenu(menu: Menu): Observable<any> {
    return this.httpClient.post<Menu>(this.endpoint, JSON.stringify(menu), this.httpOptions)
      .pipe(
        catchError(this.handleError<Menu>('Error occured'))
      );
  }

  getMenu(id): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Menu fetched: ${id}`)),
        catchError(this.handleError<Menu[]>(`Get Menu id=${id}`))
      );
  }

  getMenus(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.endpoint)
      .pipe(
        tap(menus => console.log('Menus retrieved!')),
        catchError(this.handleError<Menu[]>('Get Menu', []))
      );
  }

  updateMenu(id, menu: Menu): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(menu), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Menu updated: ${id}`)),
        catchError(this.handleError<Menu[]>('Update menu'))
      );
  }

  deleteMenu(id: string): Observable<Menu[]> {
    return this.httpClient.delete<Menu[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Menu deleted: ${id}`)),
        catchError(this.handleError<Menu[]>('Delete menu'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

  
}
