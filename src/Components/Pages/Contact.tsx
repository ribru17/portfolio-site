import React, { FormEvent, useRef, useState, forwardRef, useEffect } from "react"
import GithubIcon from "../SVGs/Github/Github"
import LinkedInIcon from "../SVGs/LinkedIn/LinkedIn"
import CoolButton from "../CoolButton/CoolButton"
import PageProps from '../../Types/PageProps'
import './CSS/contact.css'

// export default function Contact(props: PageProps) {
const Contact = forwardRef((props: PageProps, ref: React.ForwardedRef<HTMLDivElement>) => {

// })

    interface ContactForm extends HTMLFormControlsCollection {
        name?: HTMLInputElement,
        message?: HTMLInputElement,
        submit?: HTMLInputElement
    }

    const formRef = useRef<HTMLFormElement>(null)
    const [buttonText, setButtonText] = useState('Send')
    const [pageClass, setPageClass] = useState('pageDiv')

    useEffect(() => {
        if (props.standAlone) {
            setPageClass('pageDiv active')
        }
    }, [props.standAlone])

    const sendMail = async (e: FormEvent) => {
        e.preventDefault()
        let fields: ContactForm = (e.target as HTMLFormElement).elements
        // let rootUrl = process.env.NODE_ENV === 'production' ? 'https://rb-portfolio-site.herokuapp.com' : ''
        let rootUrl = 'https://rb-portfolio-site.herokuapp.com'
        let messageName = fields.name?.value || ""
        let messageContent = fields.message?.value || ""
        if (fields.name) {
            fields.name.value = ''
        }
        if (fields.message) {
            fields.message.value = ''
        }
        setButtonText('Message sent!')
        setTimeout(() => {
            setButtonText('Send')
        }, 1000)
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
        <div className={pageClass} ref={ref}>
            <h1>Contact</h1>
            <div id="contactInvite">
                <p>
                    Check out my linked profiles on the right.
                    If you have a question or you want to work with me, send me an email below!
                </p>
                <div id="logoCont">
                    <a target="_blank" rel="noreferrer" href="https://github.com/ribru17"><GithubIcon /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/riley-bruins/"><LinkedInIcon /></a>
                </div>
            </div>
            <form ref={formRef} onSubmit={sendMail} id='contactForm'>
                <input autoComplete="off" type="text" placeholder="Your name" name="name" required></input>
                <textarea rows={3} autoComplete="off" placeholder="Your message" name="message" required></textarea>
                <CoolButton title={buttonText} onClick={(e) => formRef.current?.submit} />
            </form>
        </div>
    )
})

export default Contact