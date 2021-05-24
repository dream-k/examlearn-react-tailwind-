import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    IconArrowRight,
    IconPrinter,
    IconDownload
} from '../../../assets/icons'
import ContentLayout from '../../Layout/Content'
import './style.scss'

const TopicPreview = props => {
    const routerHistory = useHistory()
    const [year, setYear] = useState('all')

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
        <ContentLayout noFooter={true}>
            <div className="container mx-auto py-5">
                <div className="flex items-center md:mb-4 mb-3">
                    <div className="flex-1">
                        <button className="flex items-center py-2 rounded bg-brand-blue text-white font-semibold px-4" onClick={() => routerHistory.push('/subject/topics')}>
                            <IconArrowRight className="transform rotate-180 mr-2"/>
                            Back to Topics
                        </button>
                    </div>
                    <div className="flex">
                        <button className="prev-button flex items-center py-2 border-2 font-semibold md:w-28 w-8 justify-center mr-3" disabled={true}>
                            <IconArrowRight className="transform rotate-180 md:mr-2 mr-0" />
                            <span className="md:block hidden">Previous</span>
                        </button>
                        <button className="next-button flex items-center py-2 border-2 font-semibold md:w-28 w-8 justify-center">
                            <span className="md:block hidden">Next</span>
                            <IconArrowRight className="md:ml-2 ml-0" />
                        </button>
                    </div>
                </div>
                <div className="rounded bg-white md:p-10 p-4 mb-3">
                    <div className="flex pb-7 border-b-2">
                        <div className="flex-1">
                            <p className="uppercase text-xs text-brand-text">Applied Maths / Calculus differentiation</p>
                            <p className="text-2xl text-brand-darkblue font-bold">Double Differentiation</p>
                        </div>
                        <div className="flex text-white">
                            <div className="flex items-center justify-center rounded bg-brand-blue w-10 h-10 mr-3">
                                <IconPrinter />
                            </div>
                            <div className="flex items-center justify-center rounded bg-brand-orange w-10 h-10">
                                <IconDownload />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <p className="flex-1 text-sm font-semibold uppercase text-gray-40">Total 14 Quesitons</p>
                        <select value={year} onChange={(e) => handleYear(e.target.value)} className="text-brand-blue font-semibold bg-transparent focus:outline-none">
                            {
                                options.map((option, index) => (
                                    <option value={option.value} key={index}>{option.label}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="rounded bg-white md:p-10 p-4">
                    <div className="bg-gray-40 px-3 py-2 mb-3 rounded-t text-xl text-white font-semibold">
                        2012
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default TopicPreview;
