import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //client pour communication headers pour convertir en json
import { Observable, of } from 'rxjs'; //observable
import { catchError, map, tap } from 'rxjs/operators';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private base = 'http://localhost:8080/admin';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.base)
      .pipe(
        tap(_ => console.log('fetched Admins')),
        catchError(this.handleError<Admin[]>('getAdmins', []))
      );
  }
  createAdmin(admin:Admin):Observable<any>
  {
return this.http.post<Admin>(this.base,admin,this.httpOptions).pipe(
  tap(()=>console.log("ajouté")),
  catchError(this.handleError<Admin>('addAdmin'))
)
  }

  
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for Admin consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

