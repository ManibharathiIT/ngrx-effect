import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadblog } from './shared/blog/Blog.actions';
import { getbloginfo } from './shared/blog/Blog.selecters';
import { BlogModel, Blogs } from './shared/blog/Blog.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx_effect';
  
  constructor(private store: Store<AppStateModule>) {

  }
  bloglist!: BlogModel[];
  bloginfo!:Blogs;

  ngOnInit(): void {
    this.store.dispatch(loadblog())
    this.store.select(getbloginfo).subscribe(item => {
      this.bloginfo = item;
    })
  }
}
