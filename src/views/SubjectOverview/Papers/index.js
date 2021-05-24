import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    IconArrowRight,
    IconLock,
    IconPaper,
    IconAppliedMaths
} from '../../../assets/icons'
import './style.scss'

const Papers = props => {
    const [year, setYear] = useState('all')

    const papers = {
        2012: [
            {
                title: "Paper 1",
                isPremium: false
            },
            {
                title: "Paper 1",
                isPremium: false
            },
            {
                title: "Paper 1",
                isPremium: false
            },
        ],
        2013: [
            {
                title: "Paper 1",
                isPremium: true
            },
            {
                title: "Paper 1",
                isPremium: true
            },
            {
                title: "Paper 1",
                isPremium: false
            },
        ],
        2014: [
            {
                title: "Paper 1",
                isPremium: true
            },
            {
                title: "Paper 1",
                isPremium: true
            },
            {
                title: "Paper 1",
                isPremium: false
            },
        ]
    }

    const options = [
        {
            label: "All Years",
            value: 'all'
        },
        {
            label: "2012",
            value: "2012"
        },
        {
            label: "2013",
            value: "2013"
        },
        {
            label: "2014",
            value: "2014"
        },
        {
            label: "2015",
            value: "2015"
        },
        {
            label: "2016",
            value: "2016"
        },
        {
            label: "2017",
            value: "2017"
        },
        {
            label: "2018",
            value: "2018"
        },
        {
            label: "2019",
            value: "2019"
        },
        {
            label: "2020",
            value: "2020"
        }
    ]

    const handleYear = (value) => {
        setYear(value)
    }

    return (
        <div>
            <div className="flex items-center">
                <h2 className="flex-1 text-2xl font-bold text-gray-40 mb-3">Papers</h2>
                <select value={year} onChange={(e) => handleYear(e.target.value)} className="text-brand-blue font-semibold bg-transparent focus:outline-none">
                    {
                        options.map((option, index) => (
                            <option value={option.value} key={index}>{option.label}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                {
                    Object.keys(papers).map((key, index) => {
                        const yearPapers = papers[key]
                        return (
                            <div className={"py-6 md:px-8 px-4 rounded bg-white mb-4"} key={index}>
                                <div className="bg-gray-40 px-3 py-2 mb-3 rounded-t text-xl text-white font-semibold">
                                    {key}
                                </div>
                                {
                                    yearPapers.map((paper, index) => {
                                        return (
                                            <Link to="/subject/papers/preview">
                                                <div className={"py-2 px-5 flex items-center paper-item bg-gray-3 border-gray-3 rounded border-2 text-brand-darkblue hover:border-brand-blue hover:bg-brand-bg hover:text-brand-blue " + (index !== yearPapers.length - 1 && "mb-2")} key={index}>
                                                    <IconPaper className="mr-3"/>
                                                    <p className="flex-1 font-semibold">{paper.title}</p>
                                                    {paper.isPremium && (
                                                        <div className="mr-7 flex items-center">
                                                            <IconLock className="mr-2"/>
                                                            <p className="text-gray-40 md:block hidden font-semibold">Premium</p>
                                                        </div>
                                                    )}
                                                    <IconArrowRight />
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Papers;
