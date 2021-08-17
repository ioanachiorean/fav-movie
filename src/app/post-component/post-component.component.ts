import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  public post: any[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { 
    this.http.get<Response[]>(this.url)
    .subscribe(response => {
      this.post = response
    } )
   }

  ngOnInit(): void {
    
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

}
