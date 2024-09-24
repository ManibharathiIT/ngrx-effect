import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BlogModel} from './shared/blog/Blog.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {

   }

   GetAllBlogs():Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs")
   }

   CreateBlog(bloginput:BlogModel){
    return this.http.post("http://localhost:3000/Blogs",bloginput)
   }
}
