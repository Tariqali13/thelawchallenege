const Validator=require('validator');
const isEmpty=require('./is_empty');

module.exports=function validateRegisterInput(data){
    let error={};
    data.name=!isEmpty(data.name)?data.name:'';
    data.email=!isEmpty(data.email)?data.email:'';
    data.subject=!isEmpty(data.subject)?data.subject:'';
    data.message=!isEmpty(data.message)?data.message:'';

    if(!Validator.isLength(data.name, { min: 3, max: 30 })) {
        errors.name = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }


    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.name, { min: 3, max: 30 })) {
        errors.subject = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.subject = 'Name field is required';
    }

    if(!Validator.isLength(data.name, { min: 2, max: 500 })) {
        errors.message = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.message= 'Name field is required';
    }



    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}