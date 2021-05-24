import { Link, useHistory } from 'react-router-dom'
import Checkbox from '../../../components/Checkbox'
import { 
    IconBlueFacebook,
    IconGoogle,
    IconArrowRight
} from '../../../assets/icons'
import Input from '../../../components/Input'

import './style.scss'
import { useState } from 'react'
import ContentLayout from '../../Layout/Content'

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Register = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailValid, setEmailValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    const routerHistory = useHistory()

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

    const emailHandler = (value) => {
        setEmail(value)
    }

    const checkEmailValidation = () => {
        setEmailValid(re.test(email))
    }

    const passwordHandler = (value) => {
        setPassword(value)
    }

    const checkPasswordValidation = () => {

    }

    return (
        <ContentLayout noFooter={true}>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-brand-darkblue mt-4 mb-6">Join Examlearn</h1>
                <div className="w-500 rounded shadow bg-white max-w-full p-12">
                    <button className="bg-brand-darkblue text-white w-full flex items-center justify-center py-2 rounded-md mb-5">
                        <IconBlueFacebook className="mr-3"/>
                        Join with Facebook
                    </button>
                    <button className="bg-white text-white text-gray-50 w-full flex items-center justify-center py-2 rounded-md shadow">
                        <IconGoogle className="mr-3"/>
                        Join with Google
                    </button>
                    <div className="relative border-b border-brand-bg my-10">
                        <span className="absolute px-8 bg-white text-gray-70" style={{top: '-10px', left: '50%', transform: 'translateX(-50%)'}}>OR</span>
                    </div>
                    <div>
                        <div className="mb-5 relative">
                            <Input label="EMAIL" value={email} onChange={emailHandler} validators={emailValidators} placeholder="Email"/>
                        </div>
                        <div>
                            <Input label="PASSWORD" type="password" value={password} onChange={passwordHandler} placeholder="Password"/>
                        </div>
                        <div className="mt-4">
                            <p className="text-center text-sm">
                                By joining this site, you are agreeing to our <br/>
                                <Link to="/signup"><span className="text-brand-blue text-sm font-semibold mx-1">Privacy Policy</span></Link> and 
                                <Link to="/signup"><span className="text-brand-blue text-sm font-semibold ml-1">Terms & Conditions</span></Link>.
                            </p>
                        </div>
                        <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-6 relative" onClick={() => routerHistory.push("/age-verification")}>
                            Continue
                            <div className="absolute right-0 top-0 pt-5 pr-8">
                                <IconArrowRight/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Register;
