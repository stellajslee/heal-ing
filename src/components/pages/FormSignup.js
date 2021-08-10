import React, { useEffect } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {

    const { handleChange, handleSubmit, errors } = useForm(
        submitForm,
        validate
    )

    return (
        <>
            <div>
                <form onSubmit={ handleSubmit } className='form' noValidate>
                    <h2 className="let-out-intro">
                        <br /> when you vent, you let something out.
                        <br /> generally, it's better to let things out than hold them in.
                        <br /> but sometimes you just can't find someone or somewhere that you feel comfortable enough to do so.
                        <br /> this is for those times.
                        <br /> however you are feeling, whatever you are going through, let them all out here.
                        <br /> no one will read it. nothing you write here will be saved.
                        <br /><br /><br />
                    </h2>
                    <h1>
                        you and your mental health matter.
                        <br /> your feelings are valid.
                        <br /> you have every right to feel whatever emotion you want.
                    </h1>
                    <div className='form-inputs'>
                    <textarea
                        className='form-input'
                        name='letout'
                        placeholder='type away.'
                        onChange={handleChange}
                        rows={22}
                    />
                        {errors.letout && <p>{errors.letout}</p>}
                    </div>
                    <button className='form-input-btn' type='submit' onClick={window.scrollTo(0, 0)}>
                        let it all out
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormSignup;