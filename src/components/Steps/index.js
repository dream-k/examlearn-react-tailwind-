import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Steps = (props) => {
    const {
        steps,
        currentStep
    } = props;

    return (
        <div className="w-full pt-1">
            <div className="flex items-center mt-8 mx-16">
                {
                    steps.map((step, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="relative">
                                    <div className={"w-5 h-5 border-2 rounded-full " + (currentStep - 1 > index ? "bg-brand-blue border-brand-blue" : (currentStep - 1 == index ? "border-brand-blue" : ""))}></div>
                                    <div className="absolute max-w-8 transform -translate-x-1/2 font-semibold text-gray-70 whitespace-nowrap" style={{left: '10px', top: '-30px'}}>{step.name}</div>
                                </div>
                                {index !== steps.length - 1 && (<div className={"flex-1 border-b-2 " + (currentStep - 1 > index ? "border-brand-blue" : "")}></div>)}
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

Steps.propTypes = {
    steps: PropTypes.array,
    currentStep: PropTypes.number
}

Steps.default = {
    steps: [],
    currentStep: 0
}

export default Steps
