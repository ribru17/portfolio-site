import {FormEvent} from "react"
import './CSS/contact.css'
import GithubIcon from "../SVGs/Github/Github"
import LinkedInIcon from "../SVGs/LinkedIn/LinkedIn"
import { Link } from "react-router-dom"

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
        let messageName = fields.name?.value || ""
        let messageContent = fields.message?.value || ""
        if (fields.name) {
            fields.name.value = ''
        }
        if (fields.message) {
            fields.message.value = ''
        }
        await fetch(`${rootUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: messageName,
                message: messageContent
            })
        })
    }

    return (
        <>
            <h1>Contact</h1>
            <div id="contactInvite">
                <p>
                    Check out my linked profiles on the right.
                    If you have a question or you want to work with me, send me an email below!
                </p>
                <div id="logoCont">
                    <a href="https://github.com/ribru17"><GithubIcon /></a>
                    <a href="https://www.linkedin.com/in/riley-bruins/"><LinkedInIcon /></a>
                </div>
            </div>
            <form onSubmit={sendMail} id='contactForm'>
                <input type="text" placeholder="Your name" name="name" required></input>
                <input type="text" placeholder="Your message" name="message" required></input>
                <input type="submit" name="submit" value="Send"></input>
            </form>
        </>
    )
}