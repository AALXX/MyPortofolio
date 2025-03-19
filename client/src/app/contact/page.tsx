'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import emailjs from '@emailjs/browser'

interface ContactFormData {
    name: string
    email: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    message?: string
}

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formErrors, setFormErrors] = useState<FormErrors>({})
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (formErrors[name as keyof FormErrors]) {
            setFormErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const validateForm = (): boolean => {
        const errors: FormErrors = {}

        if (!formData.name.trim()) {
            errors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required'
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Email is invalid'
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required'
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSubmitSuccess(false)
        setSubmitError(null)

        if (!validateForm()) {
            return
        }

        // Check if environment variables are available
        const serviceId = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
        const userId = process.env.NEXT_PUBLIC_USER_ID

        if (!serviceId || !templateId || !userId) {
            setSubmitError('Email configuration is missing. Please check environment variables.')
            return
        }

        setIsLoading(true)

        try {
            const response = await emailjs.sendForm(serviceId, templateId, e.currentTarget, userId)

            if (response.status === 200) {
                setSubmitSuccess(true)
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error('Failed to send email')
            }
        } catch (error) {
            setSubmitError(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            {submitSuccess && <div className="mb-4 w-full max-w-[50rem] rounded-xl bg-green-500/80 p-4 text-center text-white">Email sent successfully!</div>}

            {submitError && <div className="mb-4 w-full max-w-[50rem] rounded-xl bg-red-500/80 p-4 text-center text-white">{submitError}</div>}

            <form className="flex w-full max-w-[50rem] flex-col rounded-3xl bg-[#00000067] p-4 sm:p-6 md:p-8 lg:p-10" onSubmit={sendEmail}>
                <h1 className="font-monda mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-2xl md:mb-10 md:text-3xl lg:mb-10 lg:text-3xl xl:mb-12 xl:text-4xl">Send me an email</h1>

                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                    <div>
                        <h2 className="font-monda mb-2 text-base font-bold text-white sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Name</h2>
                        <input
                            type="text"
                            className={`h-10 w-full rounded-xl border-3 border-white bg-transparent p-2 text-sm text-white sm:h-11 sm:text-base md:h-12 md:text-base lg:h-14 lg:text-lg xl:h-16 xl:p-3 ${
                                formErrors.name ? 'border-red-500' : 'border-white'
                            }`}
                            placeholder="Your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                    </div>

                    <div>
                        <h2 className="font-monda mb-2 text-base font-bold text-white sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Email</h2>
                        <input
                            type="email"
                            className={`h-10 w-full rounded-xl border-3 border-white bg-transparent p-2 text-sm text-white sm:h-11 sm:text-base md:h-12 md:text-base lg:h-14 lg:text-lg xl:h-16 xl:p-3 ${
                                formErrors.email ? 'border-red-500' : 'border-white'
                            }`}
                            placeholder="Your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                    </div>

                    <div>
                        <h2 className="font-monda mb-2 text-base font-bold text-white sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Message</h2>
                        <textarea
                            className={`h-32 w-full rounded-xl border-3 border-white bg-transparent p-2 text-sm text-white sm:h-34 sm:text-base md:h-36 md:text-base lg:h-40 lg:text-lg xl:h-48 xl:p-3 ${
                                formErrors.message ? 'border-red-500' : 'border-white'
                            }`}
                            placeholder="Your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="font-monda mt-6 w-full cursor-pointer rounded-xl border-3 border-white p-3 text-center text-base font-bold text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-7 sm:p-3 sm:text-lg md:mt-8 md:p-3.5 md:text-lg lg:mt-10 lg:p-4 lg:text-xl xl:mt-12 xl:text-2xl"
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}

export default Contact
