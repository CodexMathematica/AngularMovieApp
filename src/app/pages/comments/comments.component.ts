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
    let errorMessage = document.getElementById('errorMessage'); // 'Cibler' la balise p via son id
    if(form.value.username !='' && form.value.comment.length > 3){ // But : Empecher de soumettre un formulaire vide
      this.commentService.createComment(form.value);
      form.reset();
      errorMessage!.innerHTML =''; // Vider la balise p si message d'erreur afficher
      this.allComments = this.commentService.getComments();
    }else{
      errorMessage!.innerHTML = 'Identifiant ou Commentaire trop court ...'; // !verifie que pas null
    }
  }

}
