import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <a href='login.html'>Sign In</a>
      </p>
    </>
  );
};

export default Register;