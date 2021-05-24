import { useState } from 'react'
import Input from '../../components/Input'
import Collapse from '../../components/Collapse'
import SendEmailSection from '../../components/SendEmailSection'
import { 
    IconEmailLine,
    IconPhoneLine,
    IconTwitterColored,
    IconFacebookColored,
    IconTictokColored,
    IconInstagramColored,
    IconHelpDesk
} from '../../assets/icons'
import {  } from '../../assets/images'

import './style.scss'
import ContentLayout from '../Layout/Content'

const faqs = [
    {
        title: "What is the procedure to join Examlearn?",
        content: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus."
    },
    {
        title: "Can my parents join this platform and pass it to me?",
        content: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus."
    },
    {
        title: "How many certificates content provides by examlearn?",
        content: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus."
    },
    {
        title: "How much fee it takes for per year?",
        content: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus."
    },
    {
        title: "Can i generate multiple subject exams for students?",
        content: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus."
    },
]

const ContactUs = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    const emailValidators = [
        {
            check: (value) => {
                return value && value != ''
            },
            msg: "Oops! email is required"
        },
        {
            check: (value) => {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
            },
            msg: "Oops! email is incorrect"
        }
    ]

    const nameHandler = (val) => {
        setName(val)
    }

    const emailHandler = (val) => {
        setEmail(val)
    }

    const phoneNumberHandler = (val) => {
        setPhoneNumber(val)
    }

    const messageHandler = (val) => {
        setMessage(val)
    }

    return (
        <ContentLayout className="bg-brand-bg">
            <div className="container mx-auto">
                <h1 className="md:text-4xl text-2xl font-bold text-brand-text mt-16 max-w-xl mx-auto text-center mb-2">
                    Contact Us
                </h1>
                <p className="text-gray-40 text-xl text-center max-w-xl mx-auto">
                    We’re always trying to improve Examlearn so we love hearing any feedback you have.
                </p>
                <div className="lg:flex block mt-8 md:mx-0 -mx-5">
                    <div className="flex-1 bg-white rounded md:px-12 px-5 py-8 shadow lg:mr-14 mr-0 lg:mb-0 mb-8">
                        <div className="mb-5">
                            <Input label="YOUR FULL NAME" value={name} onChange={nameHandler} placeholder="John Doe"/>
                        </div>
                        <div className="mb-5">
                            <Input label="EMAIL" value={email} onChange={emailHandler} validators={emailValidators} placeholder="john@xyz.com"/>
                        </div>
                        <div className="mb-5">
                            <Input label="PHONE NUMBER" value={phoneNumber} onChange={phoneNumberHandler} placeholder="8349553329"/>
                        </div>
                        <div className="mb-5">
                            <Input label="YOUR MESSAGE" type="textarea" value={message} onChange={messageHandler} placeholder="Type your message here…."/>
                        </div>
                        <div className="">
                            <button className="bg-brand-blue rounded py-2 px-4 text-white">Send</button>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded md:px-12 px-5 py-8 shadow">
                        <h1 className="text-2xl text-gray-70 font-bold mb-8">If you'd like to get in touch with us then you can contact us :</h1>
                        <div>
                            <p className="uppercase text-xs font-semibold text-gray-40 mb-1">CALL US ON</p>
                            <div className="flex items-center mb-8 text-xl font-semibold text-brand-text">
                                <IconPhoneLine className="mr-3"/>
                                +353-1-1234567
                            </div>
                            <p className="uppercase text-xs font-semibold text-gray-40 mb-1">feel free to mail at</p>
                            <div className="flex items-center mb-8 text-xl font-semibold text-brand-text">
                                <IconEmailLine className="mr-3"/>
                                info@examlearn.ie
                            </div>
                            <p className="uppercase text-xs font-semibold text-gray-40 mb-1">We are social</p>
                            <div>
                                <div className="flex mb-4">
                                    <button className="flex items-center w-32">
                                        <IconTwitterColored className="mr-3" width="20" height="20"/>
                                        Twitter
                                    </button>
                                    <button className="flex items-center w-32">
                                        <IconFacebookColored className="mr-3" width="20" height="20"/>
                                        Facebook
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="flex items-center w-32">
                                        <IconTictokColored className="mr-3" width="20" height="20"/>
                                        TicTok
                                    </button>
                                    <button className="flex items-center w-32">
                                        <IconInstagramColored className="mr-3" width="20" height="20"/>
                                        Instagram
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="flex items-center bg-brand-blue rounded py-2 px-4 text-white font-semibold">
                                <IconHelpDesk className="mr-3"/>
                                Contact Help Desk
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:mt-28 mt-12 mb-40 md:mx-0 -mx-5">
                    <h1 className="md:text-4xl text-2xl font-bold text-brand-text text-center max-w-lg mx-auto mb-6">Some Frequently Asked Questions</h1>
                    <div className="max-w-3xl mx-auto rounded shadow bg-white py-10 md:px-12 px-5">
                        {
                            faqs.map((faq, index) => (
                                <div className={index === faqs.length - 1 ? "" : "mb-5"} key={index}>
                                    <Collapse title={faq.title} content={faq.content}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <SendEmailSection />
        </ContentLayout>
    )
}

export default ContactUs;
