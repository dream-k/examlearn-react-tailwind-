import { Link, useHistory } from 'react-router-dom'
import {
    IconArrowRight
} from '../../../assets/icons'
import './style.scss'
import ContentLayout from '../../Layout/Content'

const AgeVerification = props => {
    const routerHistory = useHistory()

    return (
        <ContentLayout className="bg-brand-bg" noFooter={true}>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-brand-darkblue mt-4 mb-6">Age Verification</h1>
                <div className="w-500 rounded shadow bg-white max-w-full p-12">
                    <p className="text-xl text-gray-40 text-center">
                        You need to be <span className="font-semibold">aged 16 or older</span> to join a website in Ireland without your parent’s permission.
                    </p>
                    <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-6 relative" onClick={() => routerHistory.push("/parent-permission")}>
                        Continue, I’m 16 or Over
                        <div className="absolute right-0 top-0 pt-5 pr-8">
                            <IconArrowRight/>
                        </div>
                    </button>
                    <div className="flex justify-center mt-6">
                        <Link to="/"><span className="text-xl font-semibold text-gray-40">I’m under 16</span></Link>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default AgeVerification;
