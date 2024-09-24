import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { MasterService } from "src/app/master.service";
import { addblog, Load_Blog, loadblogfail, loadblogsuccess } from "./Blog.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

Injectable()
export class BlogEffect {
    constructor(private action$: Action, private service: MasterService) {

    }
// NgRx is a state management library for Angular applications, inspired by the Redux pattern from the JavaScript ecosystem.
// It is used to manage the application state in a predictable, scalable, and maintainable way.
    _loadblog = createEffect(() =>
        this.action$
            .pipe( //pipe: The pipe method is essential in NgRx Effects because it enables a series of operations (such as filtering, mapping, merging, or catching errors) on an observable stream of actions, allowing us to respond to specific actions and dispatch new ones as needed.
                ofType(Load_Blog),
                exhaustMap((action) => {  //exhaust map: In NgRx Effects, the exhaustMap operator is used to handle side effects (like HTTP requests) in response to actions. It ensures that only one observable (e.g., API request) is active at a time, ignoring any new requests until the first one completes. This is particularly useful when you want to prevent multiple concurrent requests for the same action
                    return this.service.GetAllBlogs().pipe(
                        map((data) => {
                            return loadblogsuccess({ bloglist: data });
                        }),
                        catchError((_error) => of(loadblogfail({ Errortext: _error })))
                    )
                })
            )
    );

    _AddBlog = createEffect(() =>
        this.action$
            .pipe(
                ofType(addblog),
                exhaustMap((action) => {
                    return this.service.CreateBlog(action.bloginput).pipe(
                        map((data) => {  
                            return loadblogsuccess({ bloginput:action.bloginput });
                        }),
                        catchError((_error) => of(loadblogfail({ Errortext: _error })))
                    )
                })
            )
    );
}