import { createAction, props } from "@ngrx/store";
import {BlogModel} from './Blog.model';

export const Load_Blog_Success='[blog page] load block success';
export const Load_Blog_Fail='[blog page] load block fail';
export const Load_Blog='[blog page] load block';


export const loadblog=createAction(Load_Blog);
export const loadblogsuccess=createAction(Load_Blog_Success,props<{bloglist:BlogModel}>());
export const loadblogfail=createAction(Load_Blog_Fail,props<{Errortext:any}>());


export const Add_Blog='[blog page] add blog';  // [blog page] is the source or the part of the application that is responsible for dispatching the action.
                                                      // add blog and add blog success describe the specific action.
export const Add_Blog_Success='[blog page] add blog success'; //addblogsuccess:

//This action is created using createAction, which takes the action type (Add_Blog_Success) as the first argument.
// The second argument is a props function, which allows the action to carry a payload (in this case, bloginput, which is of type BlogModel).
// This action represents a successful blog addition and will include the blog data (bloginput) as its payload when dispatched.
export const addblogsuccess=createAction(Add_Blog_Success,props<{bloginput:BlogModel}>());
export const addblog=createAction(Add_Blog,props<{bloginput:BlogModel}>());

export const deleteblog=createAction('deleteblog',props<{bloginput:BlogModel}>());
export const updateblog=createAction('updateblog',props<{id:number}>());