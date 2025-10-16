import React, { useState } from 'react'
import Navbar from '../components/Navbar';

function SignInForm() {
  const[formData,setFormData] = useState({fullName:"",email:"",password:""});
  const handleOnChange = (e) =>{
    const{name, value} = e.target;
    setFormData(prevData =>({...prevData, [name]:value}))
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormData('')
    console.log(formData)


  }

  return (
    <div>
      <div className='bg-gray-300 min-h-screen'>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input type="text" name='fullName' value={formData.fullName} onChange={handleOnChange}/>
        <input type="email" name='email' value={formData.email} onChange={handleOnChange}/>
        <input type="password" name='password' value={formData.password} onChange={handleOnChange}/>
        <input type="submit" />
      </form>
      </div>
      
    </div>
  )
}

export default SignInForm;