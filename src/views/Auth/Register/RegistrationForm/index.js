import { Link, useHistory } from 'react-router-dom'
import Checkbox from '../../../../components/Checkbox'
import { 
    IconBlueFacebook,
    IconGoogle
} from '../../../../assets/icons'

import React, { useEffect, useState } from 'react'
import ContentLayout from '../../../Layout/Content'
import Input from '../../../../components/Input'
import Steps from '../../../../components/Steps'
import PersonalDetail from './PersonalDetails'
import Subjects from './Subjects'


const RegistrationForm = props => {
    const routerHistory = useHistory()

    const steps = [
        {
            name: "Personal Details",
            component: PersonalDetail,
            props: {
                onSubmit: (data) => profileDetailsSubmit(data)
            }
        },
        {
            name: "Subjects",
            component: Subjects,
            props: {
                onSubmit: (data) => subjectsSubmit(data)
            }
        }
    ]

    const [selectedStep, setSelectedStep] = useState(steps[0])
    const [currentStep, setCurrentStep] = useState(1)

    useEffect(() => {
        setSelectedStep(steps[currentStep -1])
    }, [currentStep])

    const profileDetailsSubmit = (data) => {
        console.log(data)
        setCurrentStep(2)
    }

    const subjectsSubmit = (data) => {
        console.log(data)
        routerHistory.push("/contratulations")
    }

    return (
        <ContentLayout className="bg-brand-bg min-h-screen" noFooter={true}>
            <div className="pb-20">
                <div className="w-500 max-w-full mx-auto my-8">
                    <Steps steps={steps} currentStep={currentStep}/>
                </div>
                <div className="w-500 max-w-full rounded bg-white shadow md:px-12 px-4 pt-6 pb-12 mx-auto">
                    {
                        React.createElement(selectedStep.component, {...selectedStep.props})
                    }
                </div>
            </div>
        </ContentLayout>
    )
}

export default RegistrationForm;
