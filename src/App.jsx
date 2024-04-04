import React from 'react'
import Logo from '/signup.png'
import { useForm } from 'react-hook-form';

function App() {

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)

  const password = watch("password");


  return (
    <>
      <div className='lg:flex font-[sora] '>
        <div className='lg:w-[1000px] bg-slate-200 text-center space-y-4 '>
          <div>
            <img src={Logo} alt="" className='mx-auto rounded-md' />
          </div>

          <div className='space-y-3 px-2 py-5'>
            <h1 className='font-semibold text-2xl lg:text-4xl lg:w-[500px] mx-auto'>Become <span className='text-[#0649da]'>part</span> of the <span className='text-[#0649da]'>future</span></h1>
            <p className=' lg:text-xl lg:w-[400px] mx-auto text-[#0649da]'>Join us with a click of a button.</p>
          </div>
        </div>

        <div className='lg:w-[600px] text-center'>
              <div className='mt-[5rem] space-y-4'>
                <h1 className='font-semibold text-3xl text-[#0649da]'>Create an account</h1>
                <p className='text-xl text-slate-500'>Fill in your details</p>
              </div>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mx-auto mt-14'>
                <input 
                type="text" 
                name="username" 
                placeholder='Username' 
                className='w-[300px] lg:w-[400px] h-[50px] rounded-md text-xl border border-[#0649da] px-4 ' 
                {...register('userName', { required: "Username is required" })}
                />
                {errors.userName && <p className='text-red-500 text-sm'>Username is required.</p>}
              </div>

              <div className='mx-auto mt-6'>
                <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                className='w-[300px] lg:w-[400px] h-[50px] rounded-md text-xl border border-[#0649da] px-4 ' 
                {...register('email', { required: true })}
                />
                {errors.email && <p className='text-red-500 text-sm'>Email is required.</p>}
              </div>

                
              <div className='mx-auto mt-6 space-y-2'>
                <input 
                type="password" 
                name="password" 
                placeholder='Password'
                className='w-[300px] lg:w-[400px] h-[50px] rounded-md text-xl border border-[#0649da] px-4 ' 
                {...register('password', { required: "Password is required" })}
                />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
              </div>

              <div className='mx-auto mt-6 space-y-2'>
                <input type="password" 
                name="password2" 
                placeholder='Comfirm Password'
                className='w-[300px] lg:w-[400px] h-[50px] rounded-md text-xl border border-[#0649da] px-4 ' 
                {...register('password2', { required: true,
                validate: value => value === password || "The passwords do not match!" })}
                />
                {errors.password2 && <p className='text-red-500 text-sm'>{errors.password2.message}</p>}
              </div>

              <div onClick={handleSubmit(onSubmit)} className='mx-auto mt-6 w-[300px] lg:w-[400px] h-[50px] rounded-md text-center py-3 font-bold text-white  bg-[#0649da] cursor-pointer '>
                <button type="submit">Join Now</button>
              </div>

              <div className='flex lg:gap-5 justify-center mt-4 text-base px-[2rem] '>
                <p>Have an Account?  
                    <span className='text-[#0649da]'> Login</span>
                  </p>

                  <p>Forgot your password?
                    <span className='text-[#0649da]'> Click here</span>
                  </p>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
