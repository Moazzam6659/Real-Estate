import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    <motion.div
      id='Testimonials'
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}>
      <h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h2>
      <p className='text-gray-500 max-w-80 text-center mb-12 mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>

      {/* testimonial section */}
      <div className='flex items-center flex-col md:flex-row justify-center gap-8'>
        {testimonialsData.map((testimonial, i) => {
          return (
            <div key={i} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
              <img
                className='w-20 h-20 rounded-full mx-auto mb-4'
                src={testimonial.image}
                alt={testimonial.alt}
              />
              <h3 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h3>
              <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
              <div className='flex justify-center gap-1 text-red-500 mb-4'>
                {Array.from({ length: testimonial.rating }, (item, i) => {
                  return <img key={i} src={assets.star_icon} alt='' />
                })}
              </div>
              <p className='text-gray-600'>{testimonial.text}</p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Testimonials
