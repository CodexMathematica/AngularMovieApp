import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() public allComments!: any[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  deleteComment(comment: any){
    this.commentService.deleteComment(comment);
    this.allComments = this.commentService.getComments();
  }

}
