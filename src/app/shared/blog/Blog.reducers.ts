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
    on(loadblogsuccess, (state, action) => {
        return {
            ...state,
            bloglist: [...state.bloglist],
            Errormessage: ''
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