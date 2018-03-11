import { Component, OnInit } from "@angular/core";
import { CommentService } from "@app/comment/comment.service";
import { pageAnimation } from "@app/shared/animation/animation.motion";
import { AdventureTrackerError } from "@app/core/adventure.Error";
import { ActivatedRoute } from "@angular/router";
import { IComment } from "@app/comment/comment";
import { trigger, state, style, animate, transition, query, stagger } from "@angular/animations";
@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
  animations: [
    trigger("listStagger", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-10px)" }),
            stagger("50ms", animate("550ms ease-out", style({ opacity: 1, transform: "translateY(0px)" })))
          ],
          { optional: true }
        ),
        query(":leave", animate("50ms", style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
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
