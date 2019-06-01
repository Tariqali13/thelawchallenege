import React from 'react';

const InputField = ({type, name, onvalueChange, label, onSubmit}) => {
    return (
        <div className="form">
            <input type={type} name={name} id={name} placeholder={`Enter ${label} `} onChange={onvalueChange}   onSubmit={onSubmit}/>
        </div>
    );
}

export default InputField;