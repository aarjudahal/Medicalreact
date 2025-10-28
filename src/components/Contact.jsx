import React from 'react'

const Contact = () => {
  const font = 'font-sans'
  return (
    <div className='max-w-4xl mx-auto p-6 mt-20'>
      <h2 className={`text-3xl font-bold underline mt-20 text-center ${font}`}>Contact Us Page</h2>
      <p className='mt-4 text-lg text-center'>This is the Contact Us page where you can reach out to us.</p>
      <p className='mt-2 text-lg text-center'>We value your feedback and inquiries.</p>
      <p className='mt-2 text-lg text-center'>Feel free to get in touch with us!</p>
    </div>
  )
}

export default Contact
