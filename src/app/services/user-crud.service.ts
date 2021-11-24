import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Menu {
  id: number;
  day: string;
  name: string;
  menu: string;
  cnt: number;
  price: number;
}

export class Badal {
  id: number;
  day: string;
  grp: string;
  menu: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {

  menupoint = 'https://api-dev.sngy.io/v1/study/board';

  badalpoint = 'https://api-dev.sngy.io/v1/study/badal';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  // postbadal(data: any): Observable<any> {
  //   return this.httpClient.post<Badal>(this.badalpoint, JSON.stringify(data), this.httpOptions)
  //     .pipe(
  //       tap(_ => console.log(`Menu fetched: ${data}`)),
  //       catchError(this.handleError<Badal>('Error occured'))
  //     );
  // }

  postMenu(data: any): Observable<any> {
    return this.httpClient.post<Menu>(this.menupoint, JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.handleError<Menu>('Error occured'))
      );
  }

  // getbadal(day: string): Observable<Menu[]> {
  //   return this.httpClient.get<Menu[]>(this.badalpoint + '?grp=sungmin&day=' + day)
  //     .pipe(
  //       tap(_ => console.log(`Menu fetched: ${day}`)),
  //       catchError(this.handleError<Menu[]>(`Get Menu id=${day}`))
  //     );
  // }

  getMenu(day: string): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.menupoint + '?grp=sungmin&day=' + day)
      .pipe(
        // tap(_ => console.log(`Menu fetched: ${day}`)),
        catchError(this.handleError<Menu[]>(`Get Menu id=${day}`))
      );
  }

  putMenu(day: string, menu: Menu): Observable<any> {
    return this.httpClient.put(this.menupoint + '?' + day, JSON.stringify(menu), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Menu updated: ${day}`)),
        catchError(this.handleError<Menu[]>('Update menu'))
      );
  }

  deleteMenu(day: string): Observable<Menu[]> {
    return this.httpClient.delete<Menu[]>(this.menupoint + '?' + day, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Menu deleted: ${day}`)),
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
