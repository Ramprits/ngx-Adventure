import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  GetAllComments(): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
}
