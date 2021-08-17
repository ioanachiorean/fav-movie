
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

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
      this.post = response
    } )
    
  }

  createPost(input: HTMLInputElement) {
    let post: any ={ title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe((response: any) => {
        post.id = response.id;
        this.post.splice(0, 0 , post);
      })

  }

  updatePost(post: any){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead : true }))
    .subscribe(response =>{
      console.log(response);
    })

  }

  deletePost(post: any){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response=> {
      let index = this.post.indexOf(post);
      this.post.splice(index, 1);

    })
  }
}
