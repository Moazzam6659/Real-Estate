import { useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'motion/react'

const Contact = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setResult('Sending....')
    const formData = new FormData(e.target)

    formData.append('access_key', 'a4a1fd22-afb9-4846-9fe0-1f5d9ae94131')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('')
      toast.success('Form Submitted Successfully')
      e.target.reset()
    } else {
      console.log('Error', data)
      toast.error(data.message)
      setResult('')
    }
  }

  return (
    <motion.div
      id='Contact'
      className='text-center p-6 lg:px-32 w-full overflow-hidden'
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}>
      <h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span>
      </h2>
      <p className='text-gray-500 max-w-80 text-center mb-12 mx-auto'>
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      {/* Contact Form */}
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type='text'
              name='Name'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type='email'
              name='Email'
              placeholder='Enter your email'
              required
            />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name='Message'
            placeholder='Tell us about your project'
            required></textarea>
        </div>
        <button className='w-full bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
          {result ? result : 'Send Message'}
        </button>
      </form>
    </motion.div>
  )
}

export default Contact
