import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    IconArrowRight,
    IconLock,
    IconAppliedMaths
} from '../../assets/icons'
import './style.scss'
import DashboardLayout from '../Layout/Dashboard'
import Quizzes from './Quizzes'
import Topics from './Topics'
import Papers from './Papers'
import Exams from './Exams'
import Notes from './Notes'

const SubjectOverview = props => {
    const routerHistory = useHistory()
    const [selectedTab, setSelectedTab] = useState("notes")

    const tabs = [
        {
            label: "Revision Guides",
            value: "notes"
        },
        {
            label: "Questions by Topic",
            value: "topics"
        },
        {
            label: "Quizzes",
            value: "quizzes"
        },
        {
            label: "Papers",
            value: "papers"
        },
        {
            label: "Exam Generator",
            value: "exams"
        },
    ]

    useEffect(() => {
        switch (props.match.params.param) {
            case 'notes':
                setSelectedTab('notes')
                break;
            case 'papers':
                setSelectedTab('papers')
                break;
            case 'topics':
                setSelectedTab('topics')
                break;
            case 'quizzes':
                setSelectedTab('quizzes')
                break;
            case 'exams':
                setSelectedTab('exams')
                break;
            default:
                routerHistory.push('/subject/notes')
                setSelectedTab('notes')
                break;                
        }
    }, [props.match.params])

    const handleTab = (value) => {
        routerHistory.push('/subject/' + value)
        setSelectedTab(value)
    }

    return (
        <DashboardLayout className="bg-brand-bg min-h-screen">
            <div className="py-8 px-10 bg-white rounded md:flex block">
                <div className="md:w-24 w-full flex-shrink-0 md:block flex items-center mr-12 md:mb-0 mb-3">
                    <img src={IconAppliedMaths} className="md:w-24 w-12 md:mr-0 mr-4"/>
                    <h1 className="md:text-5xl text-xl text-brand-darkblue font-bold md:mb-3 mb-0 md:hidden block">Applied Maths - Higher</h1>
                </div>
                <div>
                    <h1 className="text-5xl text-brand-darkblue font-bold mb-3 md:block hidden">Applied Maths - Higher</h1>
                    <p className="text-sm text-brand-darkblue">
                        Both Leaving Cert and Junior Cert Maths have two papers, all of which are 2.5 hours long. 
                        All questions in both papers must be answered. It is difficult to study maths by reading alone, 
                        so on Examlearn we have a combination of typed notes and video tutorials.
                        <Link to="#" className="inline-block ml-3"><span className="uppercase font-semibold flex items-center">Read More <IconArrowRight className="read-more transform rotate-90 ml-2"/></span></Link>
                    </p>
                </div>
            </div>
            <div className="md:flex hidden my-4">
                {
                    tabs.map((tab, index) => (
                        <button key={index} className={"rounded py-2 px-5 mr-2 font-semibold focus:outline-none " + (selectedTab === tab.value ? "text-white bg-brand-blue" : "bg-white text-brand-text")} onClick={() => handleTab(tab.value)}>{tab.label}</button>
                    ))
                }
            </div>
            <div className="md:hidden block my-4">
                <select className="p-3 rounded bg-brand-blue text-white font-semibold w-full focus:outline-none" value={selectedTab} onChange={(e) => handleTab(e.target.value)}>
                    {
                        tabs.map((tab, index) => (
                            <option value={tab.value} key={index}>{tab.label}</option>
                        ))
                    }
                </select>
            </div>
            {
                selectedTab === 'notes' && (
                    <Notes />
                )
            }
            {
                selectedTab === 'topics' && (
                   <Topics />
                )
            }
            {
                selectedTab === 'quizzes' && (
                    <Quizzes />
                )
            }
            {
                selectedTab === 'papers' && (
                    <Papers />
                )
            }
            {
                selectedTab === 'exams' && (
                    <Exams />
                )
            }
        </DashboardLayout>
    )
}

export default SubjectOverview;
