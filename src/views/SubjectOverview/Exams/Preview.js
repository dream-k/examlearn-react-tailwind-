import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import {
    IconArrowRight,
    IconAppliedMaths,
    IconPrinter,
    IconDownload
} from '../../../assets/icons'
import ContentLayout from '../../Layout/Content'
import './style.scss'

const ExamPreview = props => {
    const routerHistory = useHistory()
    const [selectedTopic, setSelectedTopic] = useState()

    const topics = [
        {
            id: 1,
            name: "Circular Motion SHM",
            count: 5
        },
        {
            id: 2,
            name: "Collisions",
            count: 28
        },
        {
            id: 3,
            name: "Differential Equations ",
            count: 3
        },
        {
            id: 4,
            name: "Hydrostatics",
            count: 31
        },
        {
            id: 5,
            name: "Liner Motion",
            count: 1
        },
        {
            id: 6,
            name: "Moments of Inertia",
            count: 5
        }
    ]

    const questions = [
        {
            year: "2012",
            question: {

            }
        },
        {
            year: "2012",
            question: {
                
            }
        }
    ]

    const handleTopic = (value) => {
        setSelectedTopic(value)
    }
    
    return (
        <ContentLayout noFooter={true}>
            <div className="container mx-auto py-5 flex">
                <div className="lg:block hidden w-80 mr-4">
                    <div className="mb-4">
                        <button className="flex items-center py-2 rounded bg-brand-blue text-white font-semibold px-4" onClick={() => routerHistory.push('/subject/exams')}>
                            <IconArrowRight className="transform rotate-180 mr-2"/>
                            Back
                        </button>
                    </div>
                    <div className="rounded bg-white px-4 py-6">
                        <div className="flex items-center mb-7">
                            <img src={IconAppliedMaths} className="md:w-8 w-8 md:mr-4 mr-4"/>
                            <p className="text-brand-text font-bold text-xl">Applied Maths</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-40 mb-3">All Topics</p>
                            {
                                topics.map((topic, index) => (
                                    <div className="flex items-center py-3 border-b">
                                        <p className="text-brand-text font-semibold mr-1">{topic.name}</p>
                                        <span className="text-gray-40 font-semibold bg-gray-40 bg-opacity-10 px-2 rounded">{topic.count}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <button className="lg:hidden flex items-center py-2 rounded bg-brand-blue text-white font-semibold px-4" onClick={() => routerHistory.push('/subject/exams')}>
                            <IconArrowRight className="transform rotate-180 mr-2"/>
                            Back
                        </button>
                        <button className="lg:flex hidden items-center py-2 rounded bg-white text-gray-70 font-semibold px-4">
                            Questions Added
                            <span className="bg-brand-blue bg-opacity-10 text-brand-blue px-1 ml-8 rounded">23</span>
                        </button>
                        <button className="flex items-center py-2 rounded bg-brand-blue text-white font-semibold px-4">
                            Preview Exam
                            <IconArrowRight className="ml-2"/>
                        </button>
                    </div>
                    <div className="lg:hidden block my-4">
                        <select className="p-3 rounded bg-brand-orange text-white font-semibold w-full focus:outline-none" value={selectedTopic} onChange={(e) => handleTopic(e.target.value)}>
                            {
                                topics.map((topic, index) => (
                                    <option value={topic.id} key={index}>{topic.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        {
                            questions.map((question, index) => (
                                <div className={"py-6 md:px-8 px-4 rounded bg-white mb-4"} key={index}>
                                    <div className="bg-gray-40 px-3 py-2 mb-3 rounded-t text-xl text-white font-semibold">
                                        {question.year}
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default ExamPreview;
