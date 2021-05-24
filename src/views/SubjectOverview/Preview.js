import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    IconArrowRight,
    IconPrinter,
    IconDownload
} from '../../assets/icons'
import './style.scss'
import DashboardLayout from '../Layout/Dashboard'
import NotePreview from './Notes/Preview'
import PaperPreview from './Papers/Preview'
import ExamPreview from './Exams/Preview'
import QuizPreview from './Quizzes/Preview'
import TopicPreview from './Topics/Preview'

const SubjectPreview = props => {
    const routerHistory = useHistory()

    const [selectedTab, setSelectedTab] = useState('notes')

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
    }, [])

    return (
        <div className="bg-brand-bg min-h-screen">
            {
                selectedTab === 'notes' && (
                    <NotePreview />
                )
            }
            {
                selectedTab === 'topics' && (
                   <TopicPreview />
                )
            }
            {
                selectedTab === 'quizzes' && (
                    <QuizPreview />
                )
            }
            {
                selectedTab === 'papers' && (
                    <PaperPreview />
                )
            }
            {
                selectedTab === 'exams' && (
                    <ExamPreview />
                )
            }
        </div>
    )
}

export default SubjectPreview;
