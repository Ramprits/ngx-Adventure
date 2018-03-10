import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class CommentService {
  comments: any[];
  constructor(private httpClient: HttpClient) {}

  GetAllComments(): Observable<any[]> {
    if (this.comments) {
      console.log("Call ====>", new Date());
      return of(this.comments);
    }
    return this.httpClient.cache().get<any[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
}
