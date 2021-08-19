
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  public post: any[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private service: PostService) { 
   
   }

  ngOnInit():void {
  this.service.getPosts()
    .subscribe(response => {
      this.post = response;
    }, 
    error => {
      alert('An unexpected error occurred.');
      console.log(error);
    });
    
  }

  createPost(input: HTMLInputElement) {
    let post: any ={ title: input.value };
    input.value = '';
  
    this.service.createPostService(post)
      .subscribe((response: any) => {
        post.id = response.id;
        this.post.splice(0, 0 , post);
      }, 
      error => {
        alert('An unexpected error occurred.');
      });

  }

    deletePost(post: any){
    this.service.deletePostService(345)
    .subscribe(response=> {
      let index = this.post.indexOf(post);
      this.post.splice(index, 1);

    }, 
    (error:Response) => {
      if (error.status === 404)
       alert('This post has already been deleted.')
      else {
        alert('An unexpected error occurred.');
        console.log(error);
      }
      });
  }
  
  // updatePost(post: any){
  //   this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead : true }))
  //   .subscribe(response =>{
  //     console.log(response);
  //   })

  // }
}
