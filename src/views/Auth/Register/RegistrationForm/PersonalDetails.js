import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Checkbox from '../../../../components/Checkbox'
import Radio from '../../../../components/Radio'
import { 
    IconStudent,
    IconTeacher,
    IconArrowRight
} from '../../../../assets/icons'

import './style.scss'
import { useState } from 'react'
import Input from '../../../../components/Input'

const grades = [
    {
        value: 1,
        label: '1st'
    },
    {
        value: 2,
        label: '2nd'
    },
    {
        value: 3,
        label: '3rd'
    },
    {
        value: 4,
        label: '4th'
    },
    {
        value: 5,
        label: '5th'
    },
    {
        value: 6,
        label: '6th'
    },
]

const PersonalDetail = props => {
    const { onSubmit } = props

    const [year, setYear] = useState(1)
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('student')
    const [level, setLevel] = useState('leaving')
    
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

    const firstnameHandler = (val) => {
        setFirstname(val)
    }

    const emailHandler = (val) => {
        setEmail(val)
    }

    const surnameHandler = (val) => {
        setSurname(val)
    }

    const handleSubmit = () => {
        const data = {
            firstname: firstname,
            surname: surname,
            email: email,
            type: type,
            level: level
        }

        onSubmit(data)
    }

    return (
        <div className="">
            <p className="text-xl text-brand-text font-bold text-center mb-4">I’m</p>
            <div className="md:flex block pb-6 border-b-2 mb-6">
                <div className={"flex-1 rounded border-2 text-center py-6 md:mr-3 mr-0 md:mb-0 mb-3 cursor-pointer " + (type === 'student' ? 'active-type-card border-brand-blue bg-gray-5' : 'inactive-type-card bg-gray-3')} onClick={() => setType('student')}>
                    <IconStudent className="mx-auto mb-1"/>
                    <p className={"font-semibold " + (type === 'student' ? "text-brand-blue" : "text-gray-40")}>Student</p>
                </div>
                <div className={"flex-1 rounded border-2 text-center py-6 cursor-pointer " + (type === 'teacher' ? 'active-type-card border-brand-blue bg-gray-5' : 'inactive-type-card bg-gray-3')} onClick={() =>setType('teacher')}>
                    <IconTeacher className="mx-auto mb-1"/>
                    <p className={"font-semibold " + (type === 'teacher' ? "text-brand-blue" : "text-gray-40")}>Teacher</p>
                </div>
            </div>
            <p className="uppercase text-xs font-semibold text-gray-70">Exam level</p>
            <div className="md:flex block mb-3">
                <div className={"flex-1 rounded border-2 text-center py-6 md:mr-3 mr-0 md:mb-0 mb-3 cursor-pointer " + (level === 'leaving' ? 'border-brand-blue bg-gray-5' : 'bg-gray-3')} onClick={() => setLevel('leaving')}>
                    <p className={"text-gray-40 font-semibold " + (level === 'leaving' ? "text-brand-blue" : "text-gray-40")}>Leaving Cert</p>
                </div>
                <div className={"flex-1 rounded border-2 text-center py-6 cursor-pointer " + (level === 'junior' ? 'border-brand-blue bg-gray-5' : 'bg-gray-3')} onClick={() => setLevel('junior')}>
                    <p className={"text-gray-40 font-semibold " + (level === 'junior' ? "text-brand-blue" : "text-gray-40")}>Junior Cert</p>
                </div>
            </div>
            <p className="uppercase text-xs font-semibold text-gray-70 mb-1">Year</p>
            <div className="flex md:justify-between justify-start flex-wrap pb-6 border-b-2">
                {grades.map((grade, index) => (
                    <div className="md:mr-0 mr-3 md:mb-0 mb-3">
                        <Radio
                            key={index}
                            value={grade.value}
                            selected={year}
                            text={grade.label}
                            onChange={setYear}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <div className="mb-5">
                    <Input label="FIRST NAME" value={firstname} onChange={firstnameHandler} placeholder="First Name"/>
                </div>
                <div className="mb-5">
                    <Input label="SURNUMBER" value={surname} onChange={surnameHandler} placeholder="Surname"/>
                </div>
                <div className="">
                    <Input label="EMAIL" value={email} onChange={emailHandler} validators={emailValidators} placeholder="Email"/>
                </div>
                <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-6 relative" onClick={handleSubmit}>
                    Continue to Subjects
                    <div className="absolute right-0 top-0 pt-5 pr-8">
                        <IconArrowRight/>
                    </div>
                </button>
            </div>
        </div>
    )
}

PersonalDetail.propTypes = {
    onSubmit: PropTypes.func,
}

PersonalDetail.defaultProps = {
    onSubmit: () => {}
}

export default PersonalDetail;
