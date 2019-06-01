import React from 'react';

const TextField = ({ type, name, onvalueChange, label,onSubmit}) => {
    return (
        <div className="form">
            <textarea type={type} name={name} id={name} placeholder={`Enter ${label} `} onChange={onvalueChange} onSubmit={onSubmit} ></textarea>
        </div>
    );
}

export default TextField;