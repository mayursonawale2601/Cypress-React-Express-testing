
import { useForm } from 'react-hook-form';
// import {api} from '../api.js'
import apis from '../axios/index.js';

export const BasicForm = () => {

  const form = useForm();
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = async (formData) => {
    try {
      const response = await apis.submitApplication(formData);
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='form-container'>
      <h2 className='form-heading'>application form</h2>
      <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>First Name:</label>
        <input
          type='text'
          className='fname'
          {...register("fname", {
            required: {
              value: true,
              message: "First name is required!"
            }
          })}
        />
        <p className="error">{errors.fname?.message}</p>

        <label>Last Name:</label>
        <input
          type='text'
          className='lname'
          name='lname'
          {...register("lname", {
            required: {
              value: true,
              message: "Last name is required!"
            }
          })}
        />
        <p className="error">{errors.lname?.message}</p>

        <label>Email:</label>
        <input
          type='email'
          className='email'
          name='email'
          {...register("email", {
            required: {
              value: true,
              message: "email is required!"
            }, 
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message: "Invalid email format!"
            }
          })}
        />
        <p className="error">{errors.email?.message}</p>

        <label>Phone Number:</label>
        <input
          type='tel'
          className='phone'
          name='phone'
          {...register("phone", {
            required: {
              value: true,
              message: "phone is required!"
            },
            pattern: {
              value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
              message: "Invalid phone format!"
            }
          })}
        />
        <p className="error">{errors.phone?.message}</p>

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}