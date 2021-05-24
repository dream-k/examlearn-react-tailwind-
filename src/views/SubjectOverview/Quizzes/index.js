import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    IconArrowRight,
    IconCheckCircle,
    IconLock,
    IconAppliedMaths
} from '../../../assets/icons'
import './style.scss'

const Quizzes = props => {
    const quizzes = [
        {
            title: "Directions",
            status: 1
        },
        {
            title: "Calculus Differentions",
            status: 0
        },
        {
            title: "Thermochemistry and Hydrocarbons",
            status: 0
        },
        {
            title: "Newtons Law",
            status: 0
        }
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-40 mb-3">Quizzes</h2>
            <div className={"py-6 md:px-8 px-4 rounded bg-white"}>
                {
                    quizzes.map((quiz, index) => (
                        <Link to="/subject/quizzes/preview">
                            <div className={"py-3 md:pl-8 pl-4 pr-5 flex items-center quiz-item rounded cursor-pointer" + 
                                (index !== quizzes.length - 1 && " mb-2") +
                                (quiz.status === 1 ? " bg-success bg-opacity-10 text-success" : " bg-gray-3 text-brand-darkblue")} 
                                key={index}
                            >
                                {quiz.status === 1 && <IconCheckCircle className="mr-3"/>}
                                <p className="flex-1 font-semibold">{quiz.title}</p>
                                <div className="mr-7 flex items-center">
                                    <p className={"md:block hidden font-semibold" + (quiz.status === 1 ? " text-success" : " text-gray-40")}>{quiz.status === 1 ? "Start again" : "Start quiz"}</p>
                                </div>
                                <IconArrowRight className={quiz.status === 1 ? "success" : ""}/>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Quizzes;
