import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { catchError, map, tap } from 'rxjs/operators';
import { Rdv } from '../model/rdv';


@Injectable({
  providedIn: 'root'
})
export class RdvService {

  private base = 'http://localhost:8080/rdv';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }
  getRdvs(): Observable<Rdv[]> {
    return this.http.get<Rdv[]>(this.base)
      .pipe(
        tap(_ => console.log('fetched Rdvs')),
        catchError(this.handleError<Rdv[]>('getRdves', []))
      );
  }
  createRdv(rdv:Rdv):Observable<any>
  {
return this.http.post<Rdv>(this.base,rdv,this.httpOptions).pipe(
  tap(()=>console.log("ajouté")),
  catchError(this.handleError<Rdv>('addRdv'))
)

  }
  deleteRdv(id: number) {
    const url = `${this.base}/${id}`;

    return this.http.delete<Rdv>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<Rdv>('deleteHero'))
    );
  
  }

  




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for Rdv consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}