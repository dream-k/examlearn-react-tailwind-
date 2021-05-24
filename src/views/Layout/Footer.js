import { Link } from 'react-router-dom'
import { logoWhiteImg, linesImage } from "../../assets/images"
import { IconFacebook, IconTelegram, IconTictok, IconInstagram } from '../../assets/icons'

const Footer = (props) => {
    return (
        <div className="bg-brand-text bg-opacity-95">
            <div className="container mx-auto h-full md:flex hidden py-12 relative">
                <div className="md:max-w-13 max-w-15 md:flex-1">
                    <p className="text-brand-blue text-sm font-semibold mb-3">EXAM LEARN</p>
                    <Link to="/"><p className="text-white mb-3">About Us</p></Link>
                    <Link to="/contact-us"><p className="text-white mb-3">Contact Us</p></Link>
                    <Link to="/pricing"><p className="text-white mb-3">Pricing</p></Link>
                    <Link to="/"><p className="text-white mb-3">Privacy Policy</p></Link>
                    <Link to="/"><p className="text-white mb-3">Terms of Use</p></Link>
                </div>
                <div className="md:max-w-16 max-w-13 md:flex-1">
                    <p className="text-brand-blue text-sm font-semibold mb-3">TOOLS</p>
                    <Link to="/"><p className="text-white mb-3">Revision Guides</p></Link>
                    <Link to="/"><p className="text-white mb-3">Questions by Topic</p></Link>
                    <Link to="/"><p className="text-white mb-3">Quizzes</p></Link>
                    <Link to="/"><p className="text-white mb-3">Exam Papers</p></Link>
                    <Link to="/"><p className="text-white mb-3">Exam Generator</p></Link>
                </div>
                <div className="max-w-15 flex-1">
                    <p className="text-brand-blue text-sm font-semibold mb-3">HAAY MEDIA GROUP</p>
                    <Link to="/"><p className="text-white font-semibold mb-3">Haay.com</p></Link>
                    <Link to="/"><p className="text-white font-semibold mb-3">GradeAcademy.ie</p></Link>
                    <Link to="/"><p className="text-white font-semibold mb-3">PocketPaper.ie</p></Link>
                </div>
                <div className="max-w-13 z-10">
                    <img src={logoWhiteImg} />
                    <p className="text-white mt-4 text-xs text-gray-70 mb-12">
                        Copyright © 2021 Haay Media Ltd CRO 682612 All rights reserved.
                    </p>
                    <p className="text-brand-blue font-semibold uppercase text-sm mb-5">We are social</p>
                    <div className="flex">
                        <IconTelegram className="mr-6 cursor-pointer"/>
                        <IconTictok className="mr-6 cursor-pointer" />
                        <IconInstagram className="mr-6 cursor-pointer" />
                        <IconFacebook className="cursor-pointer" />
                    </div>
                </div>
                <img src={linesImage} className="absolute right-0 bottom-0 z-0"/>
            </div>

            <div className="container mx-auto h-full md:hidden block py-12 relative">
                <div className="flex mb-8">
                    <div className="flex-1">
                        <p className="text-brand-blue text-sm font-semibold mb-3">EXAM LEARN</p>
                        <Link to="/"><p className="text-white mb-3">About Us</p></Link>
                        <Link to="/contact-us"><p className="text-white mb-3">Contact Us</p></Link>
                        <Link to="/pricing"><p className="text-white mb-3">Pricing</p></Link>
                        <Link to="/"><p className="text-white mb-3">Privacy Policy</p></Link>
                        <Link to="/"><p className="text-white mb-3">Terms of Use</p></Link>
                    </div>
                    <div className="flex-1">
                        <p className="text-brand-blue text-sm font-semibold mb-3">TOOLS</p>
                        <Link to="/"><p className="text-white mb-3">Revision Guides</p></Link>
                        <Link to="/"><p className="text-white mb-3">Questions by Topic</p></Link>
                        <Link to="/"><p className="text-white mb-3">Quizzes</p></Link>
                        <Link to="/"><p className="text-white mb-3">Exam Papers</p></Link>
                        <Link to="/"><p className="text-white mb-3">Exam Generator</p></Link>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="flex-1">
                        <p className="text-brand-blue text-sm font-semibold mb-3">HAAY MEDIA GROUP</p>
                        <Link to="/"><p className="text-white font-semibold mb-3">Haay.com</p></Link>
                        <Link to="/"><p className="text-white font-semibold mb-3">GradeAcademy.ie</p></Link>
                        <Link to="/"><p className="text-white font-semibold mb-3">PocketPaper.ie</p></Link>
                    </div>
                    <div className="flex-1">
                        <p className="text-brand-blue font-semibold uppercase text-sm mb-5">We are social</p>
                        <div>
                            <div className="flex mb-4">
                                <IconTelegram className="mr-6 cursor-pointer"/>
                                <IconTictok className="cursor-pointer" />
                            </div>
                            <div className="flex">
                                <IconInstagram className="mr-6 cursor-pointer" />
                                <IconFacebook className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="z-10">
                    <img src={logoWhiteImg} />
                    <p className="text-white mt-4 text-xs text-gray-70 mb-12">
                        Copyright © 2021 Haay Media Ltd CRO 682612 All rights reserved.
                    </p>
                </div>
                <img src={linesImage} className="absolute right-0 bottom-0 z-0"/>
            </div>
        </div>
    )
}

export default Footer;