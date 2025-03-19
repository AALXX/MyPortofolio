'use client'

import emailjs from 'emailjs-com'


const Contact = () => {
    const SendEmail = (e: any) => {
        e.preventDefault()
        emailjs.sendForm(`${process.env.MAIL_SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, e.target, `${process.env.USER_ID}`).then(
            function (response) {
                window.alert('Email send  succesfully')
            },
            function (error) {
                window.alert(`FAILED: ${error}`)
            }
        )

        e.target.reset()
    }

    return (
        <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <form className="flex w-full max-w-[50rem] flex-col rounded-3xl bg-[#00000067] p-4 sm:p-6 md:p-8 lg:p-10" onSubmit={SendEmail}>
                <h1 className="font-monda mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-2xl md:mb-10 md:text-3xl lg:mb-10 lg:text-3xl xl:mb-12 xl:text-4xl">Send me an email</h1>
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                    <div>
                        <h2 className="font-monda mb-2 text-base font-bold text-white sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Name</h2>
                        <input
                            type="text"
                            className="h-10 w-full rounded-xl border-3 border-white bg-transparent p-2 text-sm text-white sm:h-11 sm:text-base md:h-12 md:text-base lg:h-14 lg:text-lg xl:h-16 xl:p-3"
                            placeholder="Your name"
                            name="name"
                        />
                    </div>
                    <div>
                        <h2 className="font-monda mb-2 text-base font-bold text-white sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Email</h2>
                        <input
                            type="email"
                            className="h-10 w-full rounded-xl border-3 border-white bg-transparent p-2 text-sm text-white sm:h-11 sm:text-base md:h-12 md:text-base lg:h-14 lg:text-lg xl:h-16 xl:p-3"
                            placeholder="Your email"
                            name="email"
                        />
                    </div>
                    <div>
                        <h2 className="font-monda mb-2 text-base font-bold text-white sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Message</h2>
                        <textarea
                            className="h-32 w-full rounded-xl border-3 border-white bg-transparent p-2 text-sm text-white sm:h-34 sm:text-base md:h-36 md:text-base lg:h-40 lg:text-lg xl:h-48 xl:p-3"
                            placeholder="Your message"
                            name="message"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="font-monda mt-6 w-full cursor-pointer rounded-xl border-3 border-white p-3 text-center text-base font-bold text-white transition-colors hover:bg-white/10 sm:mt-7 sm:p-3 sm:text-lg md:mt-8 md:p-3.5 md:text-lg lg:mt-10 lg:p-4 lg:text-xl xl:mt-12 xl:text-2xl"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact
