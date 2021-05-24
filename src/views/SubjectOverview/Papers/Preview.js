import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    IconArrowRight,
    IconPrinter,
    IconDownload
} from '../../../assets/icons'
import ContentLayout from '../../Layout/Content'
import './style.scss'

const PaperPreview = props => {
    const routerHistory = useHistory()

    const [type, setType] = useState('paper')

    return (
        <div className="container mx-auto py-5">
            <div className="flex items-center md:mb-4 mb-3">
                <div className="w-72">
                    <button className="flex items-center py-2 rounded bg-brand-blue text-white font-semibold px-4" onClick={() => routerHistory.push('/subject/papers')}>
                        <IconArrowRight className="transform rotate-180 mr-2"/>
                        Back to Papers
                    </button>
                </div>
                <p className="flex-1 text-center text-2xl text-brand-text font-bold">2012 Paper 2</p>
                <div className="flex w-72">
                    <button className="prev-button flex items-center py-2 px-3 border-2 font-semibold md:w-36 w-8 justify-center mr-3" disabled={true}>
                        <IconArrowRight className="transform rotate-180 md:mr-2 mr-0" />
                        <span className="md:block hidden whitespace-nowrap">2012 Paper 1</span>
                    </button>
                    <button className="next-button flex items-center py-2 px-3 border-2 font-semibold md:w-36 w-8 justify-center">
                        <span className="md:block hidden whitespace-nowrap">2012 Paper 3</span>
                        <IconArrowRight className="md:ml-2 ml-0" />
                    </button>
                </div>
            </div>
            <div className="mb-6">
                <div className="flex border-2 border-brand-blue rounded">
                    <button className={"relative flex-1 py-2 rounded-r-sm focus:outline-none " + (type === 'paper' ? "font-bold text-white bg-brand-blue" : "text-gray-40")} onClick={() => setType('paper')}>
                        Papers
                        {type === 'paper' && <div className="arrow-down"></div>}
                    </button>
                    <button className={"relative flex-1 py-2 rounded-sm focus:outline-none " + (type === 'scheme' ? "font-bold text-white bg-brand-blue" : "text-gray-40")} onClick={() => setType('scheme')}>
                        Marking Scheme
                        {type === 'scheme' && <div className="arrow-down"></div>}
                    </button>
                    <button className={"relative flex-1 py-2 border-r rounded-l-sm focus:outline-none " + (type === 'audio' ? "border-brand-blue font-bold text-white bg-brand-blue" : "text-gray-40")} onClick={() => setType('audio')}>
                        Audio Player
                        {type === 'audio' && <div className="arrow-down"></div>}
                    </button>
                </div>
            </div>
            <div id="pdf-viewer" className="rounded bg-white px-3 py-4">

            </div>
        </div>
    )
}

export default PaperPreview;
