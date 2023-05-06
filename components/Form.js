import { useState } from 'react';
import styles from '@/styles/Form.module.css';

function Form(props) {
  const getNewState = () => ({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState(getNewState());

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(getNewState());
  };

  const { name, email, message } = formState;

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      data-netlify='true'
      name='contact'
    >
      <input type='hidden' name='form-name' value='contact' />
      <label htmlFor='name'>Name:</label>
      <input
        id='name'
        type='text'
        name='name'
        onChange={handleChange}
        value={name}
      />
      <label htmlFor='email'>Email:</label>
      <input
        id='email'
        type='text'
        name='email'
        onChange={handleChange}
        value={email}
      />
      <label htmlFor='message'>Message:</label>
      <textarea
        id='message'
        name='message'
        onChange={handleChange}
        value={message}
      />
      <input type='submit' value='Send Message' />
    </form>
  );
}

export default Form;
