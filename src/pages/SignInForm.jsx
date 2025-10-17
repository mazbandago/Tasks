import React, { useState } from 'react'
import Navbar from '../components/Navbar';

function SignInForm() {
  const[formData,setFormData] = useState({fullName:"",email:"",password:""});
  const [message, setMessage] = useState("");
  const [fakeId, setFakeId] = useState(null);

  const handleOnChange = (e) =>{
    const{name, value} = e.target;
    setFormData(prevData =>({...prevData, [name]:value}))
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response = await fetch('https://mustapha.free.beeceptor.com/forms', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), 
        });
      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
      setFakeId(data.id); // Extract and store the fake ID
      setMessage("Your form has been submitted successfully!");
      setFormData({ fullName: "", email: "", password: "" });
    } else {
      setMessage("Submission failed.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    setMessage("Network or server error.");
  }
        
 };

  return (
  <>
    <div className='bg-gray-300 min-h-screen'>
      <Navbar />
      <div className='p-4 mx-auto max-w-4xl'>
        <h2 className='mt-6 font-bold text-2xl text-gray-900 text-center'>ENTER YOUR DETAILS TO LOGIN</h2>
        {message && <p className="mt-4 text-center text-xl font-bold text-green-600">{message}</p>}
        {fakeId && <p className="mt-2 text-center text-blue-600">Fake ID returned: {fakeId}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col border-0 mt-10 bg-white shadow-lg rounded-xl p-6'>
           <input type="text" name='fullName' value={formData.fullName} onChange={handleOnChange} required placeholder='Enter Your Full Name Here' className='p-3 border-1 mb-4 w-full rounded font-bold text-xl text-gray-900 focus:ring-gray-300 '/>
           <input type="email" name='email' value={formData.email} onChange={handleOnChange} required placeholder='Enter Your Email' className='p-3 border-1 mb-4 w-full rounded font-bold text-xl text-gray-900 focus:ring-gray-300 '/>
           <input type="password" name='password' value={formData.password} onChange={handleOnChange} required placeholder='Enter Your Password Here' className='p-3 border-1 mb-4 w-full rounded font-bold text-xl text-gray-900 focus:ring-gray-300 '/>
           <button type='submit' className='border rounded font-medium mx-auto my-3 p-2 bg-black text-white shadow-lg hover:shadow-lg/200 hover:bg-blue-700'>Submit</button>
        </form>
      </div>
    </div>
  </>
  )
}

export default SignInForm;