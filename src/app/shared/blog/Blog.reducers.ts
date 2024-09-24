import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { loadblog, loadblogsuccess, loadblogfail, addblog, addblogsuccess } from "./Blog.actions";
import { state } from "@angular/animations";
export const _blogReducer = createReducer(BlogState,
    on(loadblog, (state) => {
        return {
            ...state
        };
    }),
    on(loadblogsuccess, (state, action) => {  //The on function is being used to listen for the loadBlogSuccess action. When this action is dispatched, the provided callback (state, action) is executed.
        //state represents the current state of the slice of the application, and action contains any data passed with the loadBlogSuccess action.
        return {
            ...state,//This spreads the current state object into a new object. It ensures that all existing properties of the state remain unchanged unless explicitly overridden in the following lines.
            bloglist: [...state.bloglist],//This creates a shallow copy of the bloglist array from the current state.
                                        //It does not seem to be modifying the contents of bloglist here; instead, it's just copying the array. This is likely done to maintain immutability, which is a core principle of Redux. Even though no changes are made to bloglist, creating a new reference ensures that the state update is handled properly in case other parts of the application depend on detecting changes.
            Errormessage: ''  //This typically happens when a previous attempt to load blogs might have failed, but since this is a success action (loadBlogSuccess), the error message is cleared.
        }
    }),
    on(loadblogfail, (state, action) => {
        console.log(action.Errortext);
        return {
            ...state,
            bloglist: [],
            Errormessage: action.Errortext.message
        }
    }),
    // on(addblog,(state,action)=>{
    //     const _blog={...action.bloginput};
    //     _blog.id=state.bloglist.length+1;
    //     return{
    //         ...state,
    //         bloglist:[...state.bloglist,_blog]
    //     }
    // }),
    on(addblogsuccess, (state, action) => {
        const _blog = { ...action.bloginput };

        return {
            ...state,
            bloglist: [...state.bloglist, _blog]
        }
    }),
)