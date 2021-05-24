import { useHistory } from 'react-router-dom'
import ContentLayout from '../../Layout/Content'

import './style.scss'

const Thankyou = props => {
    const routerHistory = useHistory()

    return (
        <ContentLayout className="bg-brand-bg min-h-screen flex flex-col" noFooter={true}>
            <div className="flex items-center justify-center flex-1">
                <div className="w-500 rounded shadow bg-white max-w-full p-12">
                    <h1 className="text-4xl font-bold text-brand-blue mb-6 text-center">Thank You!</h1>
                    <p className="text-xl text-gray-40 text-center">
                        We’ve sent your parent an email. They must click on the verification link to allow you to set up your account.
                    </p>
                    <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-14 relative" onClick={() => routerHistory.push("/")}>
                        Resend Verification Code
                    </button>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Thankyou;
