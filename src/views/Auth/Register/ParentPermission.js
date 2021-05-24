import { Link, useHistory } from 'react-router-dom'
import { 
    IconArrowRight
} from '../../../assets/icons'

import './style.scss'
import ContentLayout from '../../Layout/Content'

const ParentPermission = props => {
    const routerHistory = useHistory()

    return (
        <ContentLayout noFooter={true}>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-brand-darkblue mt-4 mb-6">Parent Permission</h1>
                <div className="w-500 rounded shadow bg-white max-w-full p-12">
                    <p className="text-xl text-gray-40 text-center">
                        Enter your parent’s email. We will then send a verification email that will allow you to finish setting up your account
                    </p>
                    <div className="mt-14">
                        <label className="block text-xs font-semibold text-gray-70 mb-1 uppercase">Parent’s email</label>
                        <input className="border-2 border-brand-bg rounded p-2 w-full focus:outline-none" placeholder="Parent’s email"/>
                    </div>
                    <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-6 relative" onClick={() => routerHistory.push("/thankyou")}>
                        Submit
                        <div className="absolute right-0 top-0 pt-5 pr-8">
                            <IconArrowRight/>
                        </div>
                    </button>
                    <div className="flex justify-center mt-6">
                        <Link to="/age-verification"><span className="text-xl font-semibold text-gray-40">Back</span></Link>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default ParentPermission;
