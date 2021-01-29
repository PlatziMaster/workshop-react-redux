import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addUsername } from '@actions';
import Button from '../components/Button';
import CloudAnimation from '../components/CloudAnimation';

import '../styles/Login.css'

const Login = (props) => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        if (data.password.length >= 8){
            console.log(data);
            props.addUsername(data);
        } else {
            console.log('password mas grande')
        }
    }

    console.log(props.user)
    return (
        <div className='Login-Container'>
            <h1>{props.user[0]?.username}</h1>
            <CloudAnimation />
            <form ref={formRef} className='Form-Container'>
                <input
                    className='Input-Styles'
                    type='email'
                    name='username'
                    placeholder='Your e-mail'
                />
                <input
                    className='Input-Styles'
                    type='password'
                    name='password'
                    placeholder='Password'
                />
                <Button text='Iniciar Sesión' onClick={handleSubmit} />
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    addUsername
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);