import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() public comment!: any;
  @Output() deleteComment = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(comment: any){
    this.deleteComment.emit(comment);
  }

}
