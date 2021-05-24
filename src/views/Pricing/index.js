import { useRef } from 'react'
import Slider from "react-slick"
import SendEmailSection from '../../components/SendEmailSection'
import StarRate from '../../components/StarRate'
import { 
    IconCheck,
    IconBlueLeftArrow
} from '../../assets/icons'
import { HaayLogo, ExamLearnLogo, GradeAcademyLogo, PocketPaperLogo } from '../../assets/images'

import './style.scss'
import ContentLayout from '../Layout/Content'

const Pricing = props => {
    const slider = useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const sliderNext = () => {
        slider.current.slickNext()
    }

    const sliderPrev = () => {
        slider.current.slickPrev()
    }
    return (
        <ContentLayout className="bg-brand-bg">
            <div className="container mx-auto">
                <h1 className="md:text-4xl text-2xl font-bold text-brand-text mt-16 max-w-xl mx-auto text-center mb-2">
                    Upgrade to ExamLearn Pro to get the most out of your revision.
                </h1>
                <p className="text-gray-40 text-xl text-center max-w-xl mx-auto">
                    We provide the best material from best resources and have more friendly platform to achieve your study goals.
                </p>
                <div className="-mx-5">
                    <div className="mt-10 relative z-10">
                        <div className="lg:flex block items-center lg:mx-40 md:mx-20 mx-5 bg-brand-blue rounded py-10 lg:px-16 px-8 text-white shadow-xl">
                            <div className="w-72 mr-12">
                                <p className="text-2xl font-bold">Examlearn Pro!</p>
                                <p className="text-6xl font-bold">€59.99 <span className="text-xl font-bold">/year</span></p>
                                <p className="text-sm text-white text-opacity-60">Membership auto-renews after 12 months.  Cancel subscription at any time.</p>
                            </div>
                            <div className="flex-1 md:mt-0 mt-4">
                                <button className="rounded bg-brand-orange py-3 px-5 text-xl font-semibold w-full">Get ExamLearn Pro now!</button>
                                <p className="font-semibold lg:text-center text-left mt-8">No thanks, continue with free account</p>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-16">
                        <div className="pt-16 lg:mx-20 mx-0 bg-white rounded shadow pb-12 px-8">
                            <h1 className="md:text-5xl text-2xl text-brand-darkblue font-bold mt-8 mb-12 text-center">What’s included?</h1>
                            <div className="lg:flex block">
                                <div className="flex-1 px-8">
                                    <div className="flex mb-6">
                                        <div className="mr-3 mt-1">
                                            <div className={"h-5 w-5 rounded-full flex items-center justify-center bg-success"}>
                                                <IconCheck />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold text-brand-darkblue">Comprehensive revision guides</p>
                                            <p className="text-sm text-gray-70">Some text about this feature in two line max to keep the design consistence </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-6">
                                        <div className="mr-3 mt-1">
                                            <div className={"h-5 w-5 rounded-full flex items-center justify-center bg-success"}>
                                                <IconCheck />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold text-brand-darkblue">Video Tutorial</p>
                                            <p className="text-sm text-gray-70">Some text about this feature in two line max to keep the design consistence </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="mr-3 mt-1">
                                            <div className={"h-5 w-5 rounded-full flex items-center justify-center bg-success"}>
                                                <IconCheck />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold text-brand-darkblue">Quizzes</p>
                                            <p className="text-sm text-gray-70">Some text about this feature in two line max to keep the design consistence </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 px-8 lg:mt-0 mt-6">
                                    <div className="flex mb-6">
                                        <div className="mr-3 mt-1">
                                            <div className={"h-5 w-5 rounded-full flex items-center justify-center bg-success"}>
                                                <IconCheck />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold text-brand-darkblue">Questions by Topic</p>
                                            <p className="text-sm text-gray-70">Some text about this feature in two line max to keep the design consistence </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-6">
                                        <div className="mr-3 mt-1">
                                            <div className={"h-5 w-5 rounded-full flex items-center justify-center bg-success"}>
                                                <IconCheck />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold text-brand-darkblue">Past Exam Papers</p>
                                            <p className="text-sm text-gray-70">Some text about this feature in two line max to keep the design consistence </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="mr-3 mt-1">
                                            <div className={"h-5 w-5 rounded-full flex items-center justify-center bg-success"}>
                                                <IconCheck />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold text-brand-darkblue">Exam Generator</p>
                                            <p className="text-sm text-gray-70">Some text about this feature in two line max to keep the design consistence </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <h1 className="md:text-5xl text-2xl text-brand-darkblue font-bold mb-8 text-center">Why Upgrade to ExamLearn Pro?</h1>
                    <div className="md:flex block justify-center">
                        <div className="rounded overflow-hidden shadow-md w-72 md:mr-6 mr-auto md:ml-0 ml-auto md:mb-0 mb-8">
                            <div className="bg-brand-blue text-white text-2xl font-bold py-4 px-8">
                                Free User
                            </div>
                            <div className="py-6 px-8 bg-gray-3">
                                <div className="text-brand-text font-semibold">
                                    <div className="flex border-b pb-3">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2 mt-2"></div>
                                        <p>Access All Exam Papers</p>
                                    </div>
                                    <div className="flex mt-3 pb-3 border-b">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2 mt-2"></div>
                                        <div>
                                            <p className="">Access All Topics</p>
                                            <p className="text-xs text-gray-40">but no paper generator</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-3 pb-3 border-b">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2 mt-2"></div>
                                        <div>
                                            <p className="">Limited Lessons</p>
                                            <p className="text-xs text-gray-40">Limited quizzes available</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-3 pb-3">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2 mt-2"></div>
                                        <div>
                                            <p className="">Another Bullet point</p>
                                            <p className="text-xs text-gray-40">Some Decription about it</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center justify-center bg-transparent text-brand-blue w-full py-2 font-semibold mt-4">
                                    Register now 
                                    <IconBlueLeftArrow className="transform rotate-180 ml-3"/>
                                </button>
                            </div>
                        </div>
                        <div className="rounded overflow-hidden shadow-md w-72 md:mx-0 mx-auto">
                            <div className="bg-brand-orange text-white text-2xl font-bold py-4 px-8">
                                ExamLearn Pro User
                            </div>
                            <div className="py-6 px-8 bg-gray-3">
                                <div className="text-brand-text font-semibold">
                                    <div className="flex border-b pb-3">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-orange mr-2 mt-2"></div>
                                        Access All Exam Papers
                                    </div>
                                    <div className="flex mt-3 pb-3 border-b">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-orange mr-2 mt-2"></div>
                                        <div>
                                            <p className="">Access All Topics</p>
                                            <p className="text-xs text-brand-orange">Ability for Exam Paper Generator</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-3 pb-3 border-b">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-orange mr-2 mt-2"></div>
                                        <div>
                                            <p className="">Limited Lessons</p>
                                            <p className="text-xs text-brand-orange">You can access all quizzes</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-3 pb-3">
                                        <div className="w-2 h-2 rounded-full border-2 border-brand-orange mr-2 mt-2"></div>
                                        <div>
                                            <p className="">Another Bullet point</p>
                                            <p className="text-xs text-brand-orange">You can access all quizzes</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-brand-orange text-white rounded w-full py-2 font-semibold mt-4">Get EdamLearn Pro now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20">
                <div className="">
                    <h1 className="md:text-5xl text-2xl text-brand-darkblue font-bold mb-3 text-center">You are in good hands.</h1>
                    <p className="text-xl text-brand-darkblue text-center max-w-xl mx-auto">ExamLearn is part of the Haay Media group.</p>
                    <div className="mt-8">
                        <div className="md:flex block justify-center opacity-20 mb-8">
                            <div className="flex justify-center">
                                <img src={HaayLogo} className="md:mr-14 mr-10 object-contain md:w-full w-44 cursor-pointer"/>
                                <img src={GradeAcademyLogo} className="md:mr-14 mr-0 object-contain md:w-full w-20 cursor-pointer"/>
                            </div>
                            <div className="flex justify-center">
                                <img src={ExamLearnLogo} className="md:mr-14 mr-10 object-contain md:w-full w-40 cursor-pointer"/>
                                <img src={PocketPaperLogo} className="object-contain md:w-full w-32 cursor-pointer"/>
                            </div>
                        </div>
                        <div className="md:flex block justify-center -mb-10">
                            <div className="w-72 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mb-10 mb-4 md:mr-10 md:ml-0 ml-auto mr-auto">
                                <p className="text-brand-orange text-5xl font-bold mb-4">99%</p>
                                <p className="text-brand-darkblue font-semibold">
                                    of users report a grade <br /> increase.
                                </p>
                            </div>
                            <div className="w-72 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mb-10 mb-4 md:mr-10 md:ml-0 ml-auto mr-auto">
                                <p className="text-brand-orange text-5xl font-bold mb-4">11.8%</p>
                                <p className="text-brand-darkblue font-semibold">
                                    grade improvements <br /> on average
                                </p>
                            </div>
                            <div className="w-72 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mb-10 mb-4 md:mx-0 mx-auto">
                                <p className="text-brand-orange text-5xl font-bold mb-4">50%+</p>
                                <p className="text-brand-darkblue font-semibold">
                                    of all secondary school students use a Haay Media product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-20 py-16">
                <div className="container mx-auto">
                    <p className="text-center text-gray-40 text-xs font-semibold">HAAY MEDIA GROUP</p>
                    <h1 className="md:text-5xl text-4xl text-brand-darkblue font-bold mb-3 text-center">1,000+ 5-star reviews</h1>
                    <div className="mt-14 relative">
                        <div className="absolute left-0 slick-arrow z-10 lg:block hidden">
                            <div className="h-12 w-12 shadow-md rounded-full bg-white flex items-center justify-center -ml-12 cursor-pointer" onClick={sliderPrev}>
                                <IconBlueLeftArrow />
                            </div>
                        </div>
                        <div className="absolute right-0 slick-arrow z-10 lg:block hidden">
                            <div className="h-12 w-12 shadow-md rounded-full bg-white flex items-center justify-center -mr-12 cursor-pointer" onClick={sliderNext}>
                                <IconBlueLeftArrow className="transform rotate-180"/>
                            </div>
                        </div>
                        <Slider ref={slider} {...settings}>
                            <div className="px-4">
                                <div className="w-full h-full rounded shadow-sm bg-white px-6 py-6 mx-auto">
                                    <h3 className="text-brand-text font-semibold">Name goes here</h3>
                                    <StarRate progress={80}/>
                                    <p className="text-brand-text mt-3">
                                        Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. 
                                        Fusce at egestas libero. Cras convallis egestas ullamcorper. 
                                        Suspendisse sed ultricies nisl, pharetra rutrum mauris. 
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 h-full">
                                <div className="w-full h-full rounded shadow-sm bg-white px-6 py-6 mx-auto">
                                    <h3 className="text-brand-text font-semibold">Name goes here</h3>
                                    <StarRate progress={80}/>
                                    <p className="text-brand-text mt-3">
                                        Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. 
                                        Fusce at egestas libero. Cras convallis egestas ullamcorper. 
                                        Suspendisse sed ultricies nisl, pharetra rutrum mauris. 
                                    </p>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="w-full h-full rounded shadow-sm bg-white px-6 py-6 mx-auto">
                                    <h3 className="text-brand-text font-semibold">Name goes here</h3>
                                    <StarRate progress={80}/>
                                    <p className="text-brand-text mt-3">
                                        Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. 
                                        Fusce at egestas libero. Cras convallis egestas ullamcorper. 
                                        Suspendisse sed ultricies nisl, pharetra rutrum mauris. 
                                    </p>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="w-full h-full rounded shadow-sm bg-white px-6 py-6 mx-auto">
                                    <h3 className="text-brand-text font-semibold">Name goes here</h3>
                                    <StarRate progress={80}/>
                                    <p className="text-brand-text mt-3">
                                        Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. 
                                        Fusce at egestas libero. Cras convallis egestas ullamcorper. 
                                        Suspendisse sed ultricies nisl, pharetra rutrum mauris. 
                                    </p>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="w-full h-full rounded shadow-sm bg-white px-6 py-6 mx-auto">
                                    <h3 className="text-brand-text font-semibold">Name goes here</h3>
                                    <StarRate progress={80}/>
                                    <p className="text-brand-text mt-3">
                                        Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. 
                                        Fusce at egestas libero. Cras convallis egestas ullamcorper. 
                                        Suspendisse sed ultricies nisl, pharetra rutrum mauris. 
                                    </p>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="w-full h-full rounded shadow-sm bg-white px-6 py-6 mx-auto">
                                    <h3 className="text-brand-text font-semibold">Name goes here</h3>
                                    <StarRate progress={80}/>
                                    <p className="text-brand-text mt-3">
                                        Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. 
                                        Fusce at egestas libero. Cras convallis egestas ullamcorper. 
                                        Suspendisse sed ultricies nisl, pharetra rutrum mauris. 
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <SendEmailSection />
        </ContentLayout>
    )
}

export default Pricing;
