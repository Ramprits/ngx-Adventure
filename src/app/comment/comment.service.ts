import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, catchError } from "rxjs/operators";
import { AdventureTrackerError } from "@app/core/adventure.Error";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export class CommentService {
  comments: any[];
  constructor(private httpClient: HttpClient) {}

  GetAllComments(): Observable<any[] | AdventureTrackerError> {
    if (this.comments) {
      console.log("Called from cached memory ->", new Date());
      return of(this.comments);
    }
    return this.httpClient
      .cache()
      .get<any[]>(`https://jsonplaceholder.typicode.com/comments`)
      .pipe(
        tap(data => {
          console.log(new Date());
          this.comments = data;
        }),
        catchError(err => this.handleHttpError(err))
      );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<AdventureTrackerError> {
    const dataError = new AdventureTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occurred retrieving data.";
    return ErrorObservable.create(dataError);
  }
}
