import { Component, OnInit } from "@angular/core";
import { CommentService } from "@app/comment/comment.service";
import { pageAnimation } from "@app/shared/animation/animation.motion";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
  animations: [pageAnimation]
})
export class CommentComponent implements OnInit {
  comments: any[];
  loading = false;
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.commentService.GetAllComments().subscribe(data => (this.comments = data));
      this.loading = false;
    }, 1000);
  }

  MyDocumemntPrint() {
    window.print();
  }
}
