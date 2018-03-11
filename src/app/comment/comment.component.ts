import { Component, OnInit } from "@angular/core";
import { CommentService } from "@app/comment/comment.service";
import { pageAnimation } from "@app/shared/animation/animation.motion";
import { AdventureTrackerError } from "@app/core/adventure.Error";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
  animations: [pageAnimation]
})
export class CommentComponent implements OnInit {
  comments: any[] | AdventureTrackerError;
  loading = false;
  constructor(private commentService: CommentService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      const resolvedData: any[] | AdventureTrackerError = this.route.snapshot.data["resolvedBooks"];

      if (resolvedData instanceof AdventureTrackerError) {
        console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
      } else {
        this.comments = resolvedData;
      }
      this.loading = false;
    }, 1000);
  }

  MyDocumemntPrint() {
    window.print();
  }
}
