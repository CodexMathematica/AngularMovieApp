import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public allComments!: any[];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  addComment(form : any) {
    this.commentService.createComment(form.value);
    form.reset();
    this.allComments = this.commentService.getComments();
  }

}
