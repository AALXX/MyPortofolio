import emailjs from "emailjs-com"
import { useEffect } from "react";
import styles from "../styles/Contact.module.css"

export default function Contact() {


    useEffect(() => {
        console.log(process.env.service_id)
    }, [])

    const SendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${process.env.service_id}`, `${process.env.tamplate_id}`, e.target, `${process.env.user_id}`)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={SendEmail}>
                <div className={styles.Background}>
                    <h1 className={styles.HeadText}>C&apos;mon email me</h1>
                    <h1 className={styles.HeadText}></h1>
                    <input className={styles.NameInput} type="text" placeholder="Name" name="name" required/>
                    <input className={styles.EmailInput} type="email" placeholder="example@gmail.com" name="email" required />
                    <textarea className={styles.textInput} cols="30" rows="8" placeholder="your message" name="message" required />
                    <input className={styles.SubmitInput} type="submit" value="Send Email" />
                    <h1 className={styles.FooterText}>my email: alexserbwork@gmail.com</h1>
                </div>
            </form>
        </div>
    )
}
