import React, { Suspense, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox' 
import { Canvas } from '@react-three/fiber'
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'D.S Udana Pramodaya',
        from_email: form.email,
        to_email: 'pramodayaudan17@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: '' });
      }, 3000);

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.error('Failed to send message:', error);
      showAlert({ show: true, text: 'Failed to send message. Please try again later.', type: 'danger' });
    });       
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>

      {alert.show && <Alert {...alert}/>}

      <div className='flex-1 min-w-[50%] flex flex-col pb-10'>
        <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>Get in Touch</h1>

        <form 
          ref={formRef}
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          {/* Changed text-black-500 to text-slate-800 */}
          <label className='text-slate-800 font-semibold'>Name
            <input
              type="text"
              name='name'
              /* Added fallback inline Tailwind in case your .input class isn't in index.css */
              className='input bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 shadow-sm'
              placeholder='Udan Pramodaya'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-slate-800 font-semibold'>Email
            <input
              type="email"
              name='email'
              className='input bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 shadow-sm'
              placeholder='udanpramodaya@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-slate-800 font-semibold'>Your Message
            <textarea
              name='message'
              rows={4}
              className='input bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 shadow-sm'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            /* Added fallback inline Tailwind for the button */
            className='btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors disabled:bg-blue-300'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
           {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{ 
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />

          <Suspense fallback={<Loader/>}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact