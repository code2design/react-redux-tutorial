import React                from 'react';
import {PropTypes}          from 'prop-types';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';   
import * as courseActions   from '../../actions/courseActions';
import CourseList           from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    
    render(){
        const {courses} = this.props;
        debugger;
        return(
            <div>
                <h1> Courses page</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired

};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
      return {
          courses: state.courses
      };
}


// const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);