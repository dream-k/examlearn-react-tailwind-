import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    IconArrowRight,
    IconLock,
    IconAppliedMaths
} from '../../../assets/icons'
import './style.scss'

const Topics = props => {
    const questions = [
        {
            title: "Directions",
            total: 2
        },
        {
            title: "Calculus Differentions",
            total: 4
        },
        {
            title: "Thermochemistry and Hydrocarbons",
            total: 1
        },
        {
            title: "Newtons Law",
            total: 8
        }
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-40 mb-3">Questions by Topic</h2>
            <div className={"py-6 md:px-8 px-4 rounded bg-white"}>
                {
                    questions.map((question, index) => (
                        <Link to="/subject/topics/preview">
                            <div className={"py-4 md:pl-8 pl-4 pr-5 cursor-pointer text-brand-darkblue bg-gray-3 hover:bg-brand-bg hover:text-brand-blue hover:border-brand-blue border-transparent border-2 rounded lesson-item" + (index !== questions.length - 1 && " mb-2")}>
                                <div className={"flex items-center lesson-item"} key={index}>
                                    <p className="flex-1 font-semibold">{question.title}</p>
                                    <div className="mr-7 md:flex hidden items-center">
                                        <p className="text-gray-40 md:block hidden font-semibold">{question.total} Questions</p>
                                    </div>
                                    <IconArrowRight />
                                </div>
                                <div className="mr-7 md:hidden flex items-center">
                                    <p className="text-gray-40 font-semibold text-xs">{question.total} Questions</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Topics;
