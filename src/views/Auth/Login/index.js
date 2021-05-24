import { Link } from 'react-router-dom'
import Checkbox from '../../../components/Checkbox'
import { 
    IconBlueFacebook,
    IconGoogle
} from '../../../assets/icons'

import './style.scss'
import { useState } from 'react'
import Input from '../../../components/Input'
import ContentLayout from '../../Layout/Content'

const Login = props => {

    const [rememberMe, setRememberMe] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRememberMe = (val) => {
        setRememberMe(val)
    }

    const emailHandler = (val) => {
        setEmail(val)
    }

    const passwordHandler = (val) => {
        setPassword(val)
    }

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

    return (
        <ContentLayout className="bg-brand-bg min-h-screen" noFooter={true}>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-brand-darkblue mt-4 mb-6">Login</h1>
                <div className="w-500 rounded shadow bg-white max-w-full p-12">
                    <button className="bg-brand-darkblue text-white w-full flex items-center justify-center py-2 rounded-md mb-5">
                        <IconBlueFacebook className="mr-3"/>
                        Login with Facebook
                    </button>
                    <button className="bg-white text-white text-gray-50 w-full flex items-center justify-center py-2 rounded-md shadow">
                        <IconGoogle className="mr-3"/>
                        Login with Google
                    </button>
                    <div className="relative border-b border-brand-bg my-10">
                        <span className="absolute px-8 bg-white text-gray-70" style={{top: '-10px', left: '50%', transform: 'translateX(-50%)'}}>OR</span>
                    </div>
                    <div>
                        <div className="mb-5">
                            <Input label="EMAIL" value={email} onChange={emailHandler} validators={emailValidators} placeholder="Email"/>
                        </div>
                        <div>
                            <Input label="PASSWORD" type="password" value={password} onChange={passwordHandler} placeholder="Password"/>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <div className="text-gray-70 flex items-center">
                                <Checkbox value={rememberMe} onChange={handleRememberMe}/> <span className="ml-3">Remember me</span>
                            </div>
                            <div>
                                <span className="text-brand-blue text-sm font-semibold">Forget password?</span>
                            </div>
                        </div>
                        <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-6">Login</button>
                        <div className="mt-6 flex justify-center">
                            <Link to="/signup"><span className="text-brand-blue text-sm font-semibold">Create an Account</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Login;
