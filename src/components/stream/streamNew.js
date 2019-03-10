import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamNew extends React.Component{

    renderError({error, touched}){
        if(touched && error)
        {
           return (
            <div className="ui error message">
            <div className="header">{error}</div>
            </div>
           )
        }
        
    }

    renderInput=({input, label,meta})=>
   
    {
        const className =`field ${meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={className}>
            <label>{label}</label>
            <input {...input} />
            <div>{meta.errors}</div>
            </div>
        )
       
    }

    onSubmit=(formValues)=>{
      console.log(formValues)
      this.props.StreamNew(formValues)
    }
    render(){
        return(
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
            </form>
        )
    }

}

const validate = (formValues) =>{
    const errors={};
    if(!formValues.title){

        errors.title="You muster"
    }

    if(!formValues.description){

        errors.description="You muster"
    }

    return errors;
}
const formWrapped = reduxForm({form: "streamCreate",
validate})(StreamNew);


export default connect (null, {StreamNew}) (formWrapped);