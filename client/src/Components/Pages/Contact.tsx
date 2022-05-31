import {FormEvent} from "react"

export default function Contact() {

    interface ContactForm extends HTMLFormControlsCollection {
        name?: HTMLInputElement,
        message?: HTMLInputElement,
        submit?: HTMLInputElement
    }

    const sendMail = async (e: FormEvent) => {
        e.preventDefault()
        let fields: ContactForm = (e.target as HTMLFormElement).elements
        let rootUrl = process.env.NODE_ENV === 'production' ? 'https://rb-portfolio-site.herokuapp.com' : ''
        await fetch(`${rootUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: fields.name?.value || "",
                message: fields.message?.value || ""
            })
        })
    }

    return (
        <>
            <h1>Contact</h1>
            <form onSubmit={sendMail}>
                <input type="text" placeholder="Enter your name" name="name" required></input>
                <input type="textarea" placeholder="Enter message" name="message" required></input>
                <input type="submit" name="submit" value="Send"></input>
            </form>
        </>
    )
}