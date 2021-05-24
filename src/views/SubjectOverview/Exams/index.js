import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    IconArrowRight,
    IconLock,
    IconAppliedMaths
} from '../../../assets/icons'
import './style.scss'

const Exams = props => {
    const exams = [
        {
            title: "Agricultural Economics",
            count: 2,
            date: '17 Jan, 2021'
        },
        {
            title: "Biology",
            count: 5,
            date: '17 Jan, 2021'
        },
        {
            title: "Business Studies",
            count: 8,
            date: '17 Jan, 2021'
        },
        {
            title: "Chemistry",
            count: 3,
            date: '17 Jan, 2021'
        }
    ]

    return (
        <div className="exam-wrapper">
            <button className="rounded bg-brand-orange py-3 w-full text-xl font-semibold text-white mb-4 focus:outline-none">Create New Exam</button>
            <h2 className="text-2xl font-bold text-gray-40 mb-3">Exams</h2>
            <div className={"py-6 md:px-8 px-4 rounded bg-white"}>
                {
                    exams.map((exam, index) => (
                        <Link to="/subject/exams/preview">
                            <div className={"py-3 md:pl-8 pl-4 pr-5 flex items-center lesson-item bg-gray-3 rounded cursor-pointer text-brand-darkblue hover:bg-brand-bg hover:text-brand-blue hover:border-brand-blue border-transparent border-2 " + (index !== exams.length - 1 && "mb-2")} key={index}>
                                <p className="flex-1 font-semibold">
                                    {exam.title}
                                    <span className="py-1 px-2 bg-brand-blue bg-opacity-10 rounded text-brand-blue font-normal text-base ml-2">{exam.count}</span>
                                </p>
                                <p className="date text-gray-40 md:block hidden text-sm mr-5">{exam.date}</p>
                                <IconArrowRight />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Exams;
