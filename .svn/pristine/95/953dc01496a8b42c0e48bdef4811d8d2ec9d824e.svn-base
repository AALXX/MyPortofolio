import React from 'react'
import emailjs from 'emailjs-com'

export default function contact() {

  const SendEmail = (e) => {
    e.preventDefault();
  emailjs.sendForm(`${process.env.service_id}`, `${process.env.tamplate_id}`, e.target, `${process.env.user_id}`)
      .then(function (response) {
        window.alert("Email send  succesfully");
      }, function (error) {
        window.alert(`FAILED: ${error}`);
      });

    e.target.reset();
  }


  return (
    <div className='flex sm:h-laptop_view_1920 items-center justify-center h-[100vh]'>
      <form onSubmit={SendEmail}>
        <div className='flex sm:h-contact-me-height sm:w-contact-me-width w-[20rem] h-[28rem] mt-8 flex-col bg-table-gray  items-center'>
          <h1 className='font-Exo_2 text-white self-center text-[1.2rem] sm:text-2xl mt-10'>Email me</h1>
          <input className='mt-10 bg-darker-gray w-10/12 text-white' type="text" placeholder="Name" name="name" required />
          <input className=' mt-5 bg-darker-gray w-10/12 text-white' type="email" placeholder="example@gmail.com" name="email" required />
          <textarea className='mt-5 bg-darker-gray w-10/12 text-white' cols={30} rows={8} placeholder="your message" name="message" required />
          <input className='sm:mt-10 mt-5  text-white border-2 cursor-pointer w-28 h-8' type="submit" value="Send Email" />
          <h1 className='mt-auto mb-5 text-white'>my email: alexserbwork@gmail.com</h1>
        </div>
      </form>
    </div>
  )
}

