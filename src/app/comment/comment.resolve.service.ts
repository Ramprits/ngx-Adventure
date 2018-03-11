import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { AdventureTrackerError } from "@app/core/adventure.Error";
import { CommentService } from "@app/comment/comment.service";

@Injectable()
export class CommentResolveService implements Resolve<any[] | AdventureTrackerError> {
  constructor(private commentService: CommentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[] | AdventureTrackerError> {
    return this.commentService.GetAllComments().pipe(catchError(err => of(err)));
  }
}
