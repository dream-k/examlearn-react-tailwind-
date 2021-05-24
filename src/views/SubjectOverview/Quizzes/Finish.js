import { quizFinish } from '../../../assets/images'
import { IconArrowRight, IconClose } from '../../../assets/icons'
import './style.scss'
import ContentLayout from '../../Layout/Content'

const QuizFinish = () => {
    return (
        <ContentLayout noFooter={true}>
            <div className="container mx-auto flex items-center justify-center quiz-finish-wrapper">
                <div className="rounded bg-white shadow">
                    <img src={quizFinish}/>
                    <div className="mt-8 mb-14 px-10">
                        <h1 className="text-brand-text md:text-4xl text-xl font-bold text-center mb-2">Congratulations! Practice Complete</h1>
                        <p className="md:text-xl text-base text-gray-70 text-center">You Strengthened this lesson in your memory</p>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-center pb-16 px-10">
                        <button className="flex items-center focus:outline-none px-3 py-2 text-brand-blue rounded font-semibold mr-3 md:order-1 order-2">
                            <IconClose className="mr-2 exit-practice-icon"/>
                            Exit Practice
                        </button>
                        <button className="flex items-center focus:outline-none px-3 py-2 bg-brand-blue text-white rounded font-semibold order-1">
                            Next Lesson
                            <IconArrowRight className="ml-2"/>
                        </button>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default QuizFinish