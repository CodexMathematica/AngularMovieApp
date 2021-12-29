import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments :any[] = [];

  constructor() { }

  createComment(comment : any): void {
    const newComment = {id: Date.now(), ...comment};
    this.comments = [newComment, ...this.comments];
    console.log(this.comments); 
  }

  getComments(): any[]{
    return this.comments;
  }

  deleteComment(comment: any): void {
    this.comments = this.comments.filter(t => t.id !== comment.id); 
  }
}
