import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    IconArrowRight,
    IconError,
    IconSuccess
} from '../../../assets/icons'
import Progress from '../../../components/Progress'
import ContentLayout from '../../Layout/Content'
import './style.scss'

const QuizPreview = props => {
    const routerHistory = useHistory()
    const [answer, setAnswer] = useState()

    const quizzes = [
        {
            id: 1,
            title: "A group of similar cells carrying out the same function",
            correct: false
        },
        {
            id: 2,
            title: "All of the systems working together",
            correct: true
        },
        {
            id: 3,
            title: "Two or more tissues working together",
            correct: false
        },
        {
            id: 4,
            title: "A number of organs working together",
            correct: false
        }
    ]

    return (
        <ContentLayout noFooter={true}>
            <div className="container mx-auto py-5">
                <div className="flex items-center md:mb-4 mb-3">
                    <div className="w-72">
                        <button className="flex items-center py-2 rounded bg-brand-blue text-white font-semibold px-4" onClick={() => routerHistory.push('/subject/quizzes')}>
                            <IconArrowRight className="transform rotate-180 mr-2"/>
                            Back
                        </button>
                    </div>
                </div>
                <div className="md:mb-8 mb-6">
                    <h1 className="text-2xl font-bold text-brand-darkblue text-center md:mb-8 mb-3">Thermochemistry and Hydrocarbons</h1>
                    <div className="md:mx-36 mx-0">
                        <Progress percentClassName="bg-gradient-to-r from-warning to-success rounded px-4 text-right text-white" progressValue="3"/>
                    </div>
                </div>
                <div className="rounded bg-white md:p-10 p-4 md:mb-6 mb-3">
                    <p className="text-xl font-semibold text-gray-70 md:mb-8 mb-4">What is an organ made up of?</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-2">
                        {
                            quizzes.map((quiz, index) => (
                                <div 
                                    className={`rounded border px-2 py-3 text-center md:text-xl text-base font-semibold cursor-pointer
                                                ${answer && quiz.correct ? 'bg-success text-white' : (answer && answer.id === quiz.id && !quiz.correct ? 'bg-error text-white' : 'bg-gray-3 text-brand-darkblue')}`}
                                    key={index}
                                    onClick={() => !answer && setAnswer(quiz)}
                                >
                                    {quiz.title}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="md:flex block items-center">
                    <div className="flex-1 md:mr-4 mr-0">
                        {answer && (
                            <div className={`px-6 py-3 md:mb-0 mb-3 flex items-center rounded md:text-xl text-base font-semibold ${answer.correct ? 'bg-success text-success' : 'bg-error text-error'} bg-opacity-25`}>
                                {answer.correct ? (
                                    <>
                                        <IconSuccess />
                                        <p className="ml-3">Perfect! Thats correct answer</p>
                                    </>
                                ) : (
                                    <>
                                        <IconError />
                                        <p className="ml-3">Oops! Incorrect Please go to next question or try again</p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end">
                        {answer ? (
                            <button className="flex items-center rounded bg-brand-blue text-white font-semibold py-2 px-4 focus:outline-none" onClick={() => routerHistory.push('/subject/quizzes/finish')}>
                                Next Question
                                <IconArrowRight className="ml-2"/>
                            </button>
                        ) : (
                            <button className="rounded bg-brand-blue text-white font-semibold py-2 px-4 focus:outline-none" onClick={() => routerHistory.push('/subject/quizzes/finish')}>Skip Question</button>
                        )}
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default QuizPreview;
