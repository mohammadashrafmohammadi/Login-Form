// import { useForm } from 'react-hook-form';

// const LoginForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Here you can handle your login logic
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" {...register('username', { required: 'Username is required' })} />
//           {errors.username && <span className="error-message">{errors.username.message}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" {...register('password', { required: 'Password is required' })} />
//           {errors.password && <span className="error-message">{errors.password.message}</span>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle your login logic
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" {...register('username', { required: 'Username is required' })} />
          {errors.username && <span className="error-message">{errors.username.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register('password', { 
            required: 'Password is required',
            minLength: { value: 5, message: 'Password must be at least 5 characters long' },
            maxLength: { value: 10, message: 'Password cannot be longer than 10 characters' }
          })} />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
