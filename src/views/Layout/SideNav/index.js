import { Link, useHistory, withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import {
    IconArrowRight,
    IconFavIcon,
    IconAccounting,
    IconAgriculturalEconomics,
    IconAgriculturalScience,
    IconAncientGreek,
    IconArtDesign,
    IconArt,
    IconBiology,
    IconBulgarian,
    IconBusiness,
    IconChemistry,
    IconClassicalStudies,
    IconConstructionStudies,
    IconCroatian,
    IconCSPE,
    IconCzech,
    IconAppliedMaths,
} from '../../../assets/icons'
import './style.scss'

const SideNav = props => {
    const { location } = props

    const routerHistory = useHistory()

    const [level, setLevel] = useState('leaving')
    const [hoverSubject, setHoverSubject] = useState()
    const [favHoverSubject, setFavHoverSubject] = useState()
    const [selectedType, setSelectedType] = useState()

    const subjects = [
        {
            title: "Accounting",
            icon: IconAccounting,
            isFav: true
        },
        {
            title: "Agricultural Economics",
            icon: IconAgriculturalEconomics,
            isFav: true
        },
        {
            title: "Agricultural Science",
            icon: IconAgriculturalScience,
            isFav: true
        },
        {
            title: "Ancient Greek",
            icon: IconAncientGreek,
            isFav: true
        },
        {
            title: "Applied Maths",
            icon: IconAppliedMaths,
            isFav: false
        },
        {
            title: "Art Craft & Design",
            icon: IconArtDesign,
            isFav: false
        },
        {
            title: "Art",
            icon: IconArt,
            isFav: false
        },
        {
            title: "Biology",
            icon: IconBiology,
            isFav: false
        },
        {
            title: "Bulgarian",
            icon: IconBulgarian,
            isFav: false
        },
        {
            title: "Business Studies",
            icon: IconBusiness,
            isFav: false
        },
        {
            title: "Chemistry",
            icon: IconChemistry,
            isFav: false
        },
        {
            title: "Classical Students",
            icon: IconClassicalStudies,
            isFav: false
        },
        {
            title: "Construction Studies",
            icon: IconConstructionStudies,
            isFav: false
        },
        {
            title: "Croatian",
            icon: IconCroatian,
            isFav: false
        },
        {
            title: "CSPE",
            icon: IconCSPE,
            isFav: false
        },
        {
            title: "Czech",
            icon: IconCzech,
            isFav: false
        },
    ]

    useEffect(() => {
        const params = queryString.parse(location.search)
        if (params && params.type) {
            setSelectedType(params.type)
        }
    }, [location])

    const favSubjects = () => {
        return subjects.filter(it => it.isFav)
    }

    const goToLink = (subject, type) => {
        routerHistory.push(`/subject/notes?type=${type}`)
    }

    return (
        <div className="bg-white min-h-screen w-80 rounded pb-1 shadow z-10 relative">
            <div className="">
                <div className="p-2 mb-3">
                    <div className="flex border-2 border-brand-blue rounded">
                        <button className={"relative flex-1 py-2 rounded-r-sm focus:outline-none " + (level === 'leaving' ? "font-bold text-white bg-brand-blue" : "text-gray-40")} onClick={() => setLevel('leaving')}>
                            Leaving Cert
                            {level === 'leaving' && <div className="arrow-down"></div>}
                        </button>
                        <button className={"relative flex-1 py-2 rounded-l-sm focus:outline-none " + (level === 'junior' ? "font-bold text-white bg-brand-blue" : "text-gray-40")} onClick={() => setLevel('junior')}>
                            Junior Cert
                            {level === 'junior' && <div className="arrow-down"></div>}
                        </button>
                    </div>
                </div>
                <div>
                    <p className="px-6 uppercase text-xs font-semibold text-gray-40 mb-3">My Subjects</p>
                    <div className="mb-10">
                        {favSubjects().map((sub, index) => (
                            <div key={index} onMouseEnter={() => setFavHoverSubject(sub.title)} onMouseLeave={() => setFavHoverSubject(null)}>
                                {
                                    favHoverSubject === sub.title ? (
                                        <div className="bg-brand-bg mx-3 px-3 py-2 flex rounded-sm justify-between">
                                            <button className="rounded bg-brand-blue w-85px py-2 text-sm font-semibold text-white">Higher</button>
                                            <button className="rounded border-2 w-85px border-brand-blue py-2 text-sm font-semibold text-brand-blue">Ordinary</button>
                                            <button className="rounded border-2 w-85px border-brand-blue py-2 text-sm font-semibold text-brand-blue">Foundation</button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center px-6">
                                            <div className="flex flex-1 items-center py-2 border-b mr-5">
                                                <img src={sub.icon} className="mr-2"/>
                                                <p className="font-semibold text-gray-70">{sub.title}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>

                    <p className="px-6 uppercase text-xs font-semibold text-gray-40 mb-3">All Subjects</p>
                    <div className="mb-10">
                        {subjects.map((sub, index) => (
                            <div key={index} onMouseEnter={() => setHoverSubject(sub.title)} onMouseLeave={() => setHoverSubject(null)}>
                                {
                                    hoverSubject === sub.title ? (
                                        <div className="bg-brand-bg mx-3 px-3 py-2 flex rounded-sm justify-between">
                                            <button 
                                                className={`rounded border-2 
                                                    border-brand-blue 
                                                    w-85px 
                                                    py-2 
                                                    text-sm 
                                                    font-semibold 
                                                    focus:outline-none
                                                    ${selectedType == 'higher' ? 'bg-brand-blue text-white' : 'bg-transparent text-brand-blue'}`
                                                }
                                                onClick={() => goToLink(sub, 'higher')}
                                            >Higher</button>
                                            <button 
                                                className={`rounded border-2 
                                                    border-brand-blue 
                                                    w-85px 
                                                    py-2 
                                                    text-sm 
                                                    font-semibold 
                                                    focus:outline-none
                                                    ${selectedType == 'ordinary' ? 'bg-brand-blue text-white' : 'bg-transparent text-brand-blue'}`
                                                }
                                                onClick={() => goToLink(sub, 'ordinary')}
                                            >Ordinary</button>
                                            <button 
                                                className={`rounded border-2 
                                                    border-brand-blue 
                                                    w-85px 
                                                    py-2 
                                                    text-sm 
                                                    font-semibold 
                                                    focus:outline-none
                                                    ${selectedType == 'foundation' ? 'bg-brand-blue text-white' : 'bg-transparent text-brand-blue'}`
                                                }
                                                onClick={() => goToLink(sub, 'foundation')}
                                            >Foundation</button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center px-6">
                                            <div className="flex flex-1 items-center py-2 border-b mr-5">
                                                <img src={sub.icon} className="mr-2"/>
                                                <p className="font-semibold text-gray-70">{sub.title}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SideNav);
