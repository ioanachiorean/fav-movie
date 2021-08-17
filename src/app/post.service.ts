import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';


constructor(private http: HttpClient) { }

getPosts(){
   return this.http.get<Response[]>(this.url);
  }
 
createPostService(post: any){
 return this.http.post(this.url, JSON.stringify(post));
}

deletePostService(post: any){
 return  this.http.delete(this.url + '/' + post.id)
  
}
}
