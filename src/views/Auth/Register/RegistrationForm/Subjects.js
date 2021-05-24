import { Link } from 'react-router-dom'
import Checkbox from '../../../../components/Checkbox'
import { 
    IconBlueFacebook,
    IconGoogle
} from '../../../../assets/icons'
import PropTypes from 'prop-types'
import './style.scss'
import { useState } from 'react'
import Input from '../../../../components/Input'

const leavingSubjects = [
    {
        name: "Accounting"
    },
    {
        name: "Agricultural Science"
    },
    {
        name: "Ancient Greek"
    },
    {
        name: "Applied Maths"
    },
    {
        name: "Art Craft & Design"
    },
    {
        name: "Art"
    },
    {
        name: "Biology"
    },
    {
        name: "Bulgarian"
    },
    {
        name: "Buiness Studies"
    },
    {
        name: "Chemistry"
    },
    {
        name: "Classical Studies"
    },
    {
        name: "Construction Studies"
    },
    {
        name: "Croatian"
    },
    {
        name: "Cspe"
    },
    {
        name: "Czech"
    },
    {
        name: "Accounting"
    },
]

const Subjects = props => {
    const { subjects, onSubmit } = props

    const [school, setSchool] = useState('')
    const [level, setLevel] = useState('leaving')
    const [subjectsData, setSubjectData] = useState(subjects ? subjects : [])

    const schoolHandler = (val) => {
        setSchool(val)
    }

    const handleSubject = (subject) => {
        const index = subjectsData.indexOf(subject)
        subject.isSelected = !!!subject.isSelected
        subjectsData[index] = subject
        setSubjectData(subjectsData)
    }

    const handleSubmit = () => {
        onSubmit()
    }

    return (
        <div className="">
            <div className="mt-4">
                <div className="mb-5">
                    <Input label="SCHOOL" value={school} onChange={schoolHandler} placeholder="School"/>
                </div>
            </div>
            <div>
                <div className="flex border-b">
                    <div className={"flex-1 py-4 cursor-pointer " + (level === 'leaving' && "border-b-4 border-brand-blue")} onClick={() => setLevel('leaving')}>
                        <p className="uppercase text-xs font-semibold text-gray-70 text-center">Leaving cert Subject</p>
                    </div>
                    <div className={"flex-1 py-4 cursor-pointer " + (level === 'junior' && "border-b-4 border-brand-blue")} onClick={() => setLevel('junior')}>
                        <p className="uppercase text-xs font-semibold text-gray-70 text-center">junior Cert Subject</p>
                    </div>
                </div>
                <div className="mt-6">
                    {
                        subjectsData.map((subject, index) => {
                            return (
                                <div className={"flex items-center " + (index !== subjectsData.length - 1 && "mb-6")} key={index}>
                                    <Checkbox value={subject.isSelected} onChange={() => handleSubject(subject)}/> <span className="ml-5 font-semibold text-gray-70">{subject.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-12">
                    <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-6 relative" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

Subjects.propTypes = {
    subjects: PropTypes.array
}

Subjects.defaultProps = {
    subjects: leavingSubjects
}

export default Subjects;
