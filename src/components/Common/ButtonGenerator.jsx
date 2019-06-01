import React from 'react';

const ButtonGenerator = ({ type, name, label }) => {
    return (
        <div >
            <button type={type} name={name} id={name} className="submit_button">{label}</button>
        </div>
    );
}

export default ButtonGenerator;