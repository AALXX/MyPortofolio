'use client'
import { useState, FormEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare, User } from 'lucide-react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().trim().min(1, 'Name is required').max(100),
    email: z.string().trim().email('Invalid email address').max(255),
    message: z.string().trim().min(1, 'Message is required').max(1000)
})

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors({})

        // Validate form
        const validation = contactSchema.safeParse(formData)
        if (!validation.success) {
            const fieldErrors: Record<string, string> = {}
            validation.error.issues.forEach(err => {
                if (err.path[0]) {
                    fieldErrors[err.path[0] as string] = err.message
                }
            })
            setErrors(fieldErrors)
            return
        }

        setIsLoading(true)

        try {
            const serviceId = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID
            const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
            const userId = process.env.NEXT_PUBLIC_USER_ID

            if (!serviceId || !templateId || !userId) {
                toast.error('Email configuration missing. Please check environment variables.')
                return
            }

            const response = await emailjs.sendForm(serviceId, templateId, e.currentTarget, userId)

            if (response.status === 200) {
                toast.success('Message sent successfully!')
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error('Failed to send email')
            }
        } catch (error) {
            toast.error(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
            <div className="container mx-auto max-w-4xl px-6 py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
                <div className="space-y-4 text-center">
                    <h1 className="text-5xl font-bold tracking-tight">
                        Get In <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-muted-foreground text-xl">Have a project in mind? Let's work together to create something amazing.</p>
                </div>

                <div className="mb-12 grid gap-8 md:grid-cols-3">
                    {[
                        { icon: Mail, title: 'Email', value: 'alexserbwork@gmail.com' },
                        { icon: MessageSquare, title: 'Response Time', value: 'Within 24 hours' },
                        { icon: User, title: 'Availability', value: 'Open to opportunities' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-border bg-card space-y-2 rounded-xl border p-6 text-center"
                        >
                            <div className="bg-primary/10 inline-flex rounded-lg p-3">
                                <item.icon className="text-primary h-5 w-5" />
                            </div>
                            <h3 className="text-foreground font-semibold">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} onSubmit={handleSubmit} className="border-border bg-card space-y-6 rounded-xl border p-8">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-foreground text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`bg-background text-foreground focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:outline-none ${
                                errors.name ? 'border-destructive' : 'border-input'
                            }`}
                            placeholder="Your name"
                        />
                        {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-foreground text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`bg-background text-foreground focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:outline-none ${
                                errors.email ? 'border-destructive' : 'border-input'
                            }`}
                            placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-foreground text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className={`bg-background text-foreground focus:border-primary focus:ring-primary/20 w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:outline-none ${
                                errors.message ? 'border-destructive' : 'border-input'
                            }`}
                            placeholder="Tell me about your project..."
                        />
                        {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isLoading ? (
                            'Sending...'
                        ) : (
                            <>
                                <Send className="h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </button>
                </motion.form>
            </motion.div>
        </div>
    )
}

export default Contact
