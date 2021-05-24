import { useHistory } from 'react-router-dom'
import ContentLayout from '../../Layout/Content'

import './style.scss'

const Congratulation = props => {
    const routerHistory = useHistory()

    return (
        <ContentLayout className="bg-brand-bg min-h-screen flex flex-col" noFooter={true}>
            <div className="flex items-center justify-center flex-1">
                <div className="w-500 rounded shadow bg-white max-w-full p-12">
                    <h1 className="text-4xl font-bold text-brand-blue mb-6 text-center">Congratulations!</h1>
                    <p className="text-xl text-gray-40 text-center">
                        You have completed your profile !
                    </p>
                    <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-14 relative" onClick={() => routerHistory.push("/")}>
                        View All Subjects
                    </button>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Congratulation;
