import { NotFoundError } from './not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../app-error';


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

 deletePostService(id: any){
 return  this.http.delete(this.url + '/' + id)
 .pipe(catchError((error: Response)=> {
   if (error.status === 404)
    return Observable.throw(new NotFoundError(error));
   return Observable.throw(new AppError(error));
 
 })


 )}}
