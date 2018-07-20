import React                from 'react';
import {PropTypes}          from 'prop-types';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';   
import * as courseActions   from '../../actions/courseActions';


class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: " " }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course });
    }

    onClickSave() {
        //calling reducer function with state as it's parameter
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render(){
        // debugger;
        return(
            <div>
                <h1> Courses page</h1>
                {this.props.courses.map(this.courseRow)}
                <h2> Add Course </h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
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
        // debugger;
      return {
          courses: state.courses
      };
}


// const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);