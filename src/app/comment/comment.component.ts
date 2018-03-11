import { Component, OnInit } from "@angular/core";
import { CommentService } from "@app/comment/comment.service";
import { pageAnimation, triggerAnimation } from "@app/shared/animation/animation.motion";
import { AdventureTrackerError } from "@app/core/adventure.Error";
import { ActivatedRoute } from "@angular/router";
import { IComment } from "@app/comment/comment";
@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
  animations: [triggerAnimation]
})
export class CommentComponent implements OnInit {
  cols: any[];
  comments: IComment[] | AdventureTrackerError;
  displayDialog: boolean;
  comment: IComment = {};
  newComment: boolean;
  selectedComment: IComment;
  loading = false;
  constructor(private commentService: CommentService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cols = [
      { field: "name", header: "Name" },
      { field: "email", header: "Email" },
      { field: "body", header: "Body" }
    ];
    this.loading = true;
    setTimeout(() => {
      const resolvedData: IComment[] | AdventureTrackerError = this.route.snapshot.data["resolvedBooks"];

      if (resolvedData instanceof AdventureTrackerError) {
        console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
      } else {
        this.comments = resolvedData;
      }
      this.loading = false;
    }, 1000);
  }
  showDialogToAdd() {}
  MyDocumemntPrint() {
    window.print();
  }

  onRowSelect(event: any) {
    this.newComment = false;
    this.comment = this.cloneComment(event.data);
    console.log(this.comment);
    this.displayDialog = true;
  }

  cloneComment(c: IComment): IComment {
    const comment = {};
    // tslint:disable-next-line:forin
    for (const prop in c) {
      comment[prop] = c[prop];
    }
    return comment;
  }
}
