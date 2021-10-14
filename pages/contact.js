import emailjs from "emailjs-com"
import {useEffect} from "react";
import styles from "../styles/Contact.module.css"

export default function Contact() {


    useEffect(() => {
        console.log(process.env.tamplate_id)
    }, [])

    const SendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', `${process.env.tamplate_id}`, e.target, `${process.env.user_id}`)
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
                    <input />
                </div>
            </form>
        </div>
    )
}
