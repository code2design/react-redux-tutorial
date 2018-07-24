import * as types           from './actionTypes';
import courseApi            from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    debugger;
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}


export function loadCourses(){
    return function(dispatch){
        //real api call goes below
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}