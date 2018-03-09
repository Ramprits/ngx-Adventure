import { Component, OnInit } from "@angular/core";
import { CommentService } from "@app/comment/comment.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  comments: any[];
  loading: boolean;
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
