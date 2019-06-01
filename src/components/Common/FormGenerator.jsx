import React from 'react';
import InputField from '../Common/InputField';
import TextField from '../Common/TextField';
import ButtonGenerator from '../Common/ButtonGenerator';

const FormGenerator = ({ onChange,  inputs, inputmsg, inputbtn }) => {
    const mapInput = inputs.map((input, index) => {
        return (
            <InputField key={index} type={input.type} name={input.name}   onvalueChange={onChange} label={input.label} />
        )
    })
    const mapInputmsg = inputmsg.map((inputmsgs, index) => {
        return (
            <TextField key={index} type={inputmsgs.typemsg} name={inputmsgs.namemsg} onvalueChange={onChange} label={inputmsgs.labelmsg} />
        )
    })
    const mapInputbtn = inputbtn.map((inputbtn, index) => {
        return (
            <ButtonGenerator key={index} type={inputbtn.typebtn} label={inputbtn.labelbtn} id="submit"/>
        )
    })
    return (
        <div className="form">

            {mapInput}
            {mapInputmsg}
            {mapInputbtn}
        </div>
    );
}

export default FormGenerator;