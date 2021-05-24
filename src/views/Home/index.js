import { useRef } from 'react'
import Slider from "react-slick"
import SendEmailSection from '../../components/SendEmailSection'
import StarRate from '../../components/StarRate'
import { 
    IconYellowPlay, 
    IconExamGenerator, 
    IconRevisionGuides, 
    IconQuizzes, 
    IconQuestionByTopic, 
    IconExamPapers,
    IconBlueLeftArrow,
    IconYellowCheck
} from '../../assets/icons'
import { homeTopImg, dashboardImg, HaayLogo, ExamLearnLogo, GradeAcademyLogo, PocketPaperLogo } from '../../assets/images'

import './style.scss'
import ContentLayout from '../Layout/Content'

const Home = props => {
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
        <ContentLayout>
            <div className="container mx-auto py-16">
                <div className="md:flex block">
                    <div className="flex-1 flex flex-col justify-center md:mb-0 mb-4">
                        <h1 className="text-brand-darkblue md:text-6xl text-4xl font-bold mb-2">Improve your <br />exam grades with <br />less hassle</h1>
                        <p className="text-gray-70 text-xl">We provide the best material from best <br />resources and have more friendly platform to <br />achieve your study goals.</p>
                        <div className="mt-10 flex items-center">
                            <button className="rounded px-6 py-4 bg-brand-orange text-xl text-white font-semibold focus:outline-none">Try for free</button>
                            <button className="flex items-center text-brand-darkblue font-semibold px-6 py-4 focus:outline-none">
                                Watch Video
                                <IconYellowPlay width={24} height={24} className="ml-2" />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 relative md:mx-0 -mx-5">
                        <img src={homeTopImg} className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 h-full w-full bg-brand-blue bg-opacity-50">
                            <div className="absolute bottom-0 -ml-20 pb-20 lg:block hidden">
                                <div className="ml-36 mb-8 w-28 h-11 bg-brand-darkblue rounded-full bg-opacity-95"></div>
                                <div className="mr-10 w-52 h-11 bg-brand-blue rounded-full bg-opacity-95"></div>
                            </div>
                            <div className="absolute top-0 right-0 -mr-20 pt-20 lg:block hidden">
                                <div className="mr-10 mb-8 w-44 h-11 bg-brand-darkblue rounded-full bg-opacity-95"></div>
                                <div className="ml-36 w-16 h-11 bg-brand-orange rounded-full bg-opacity-95"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pb-16 pt-10">
                <div className="">
                    <h1 className="md:text-5xl text-2xl text-brand-darkblue font-bold mb-3 text-center">How Exam Learn Helps</h1>
                    <p className="text-xl text-brand-darkblue text-center max-w-xl mx-auto">All Tool we provide to improvise you grades with hassale free full accesable content</p>
                    <div className="mt-8">
                        <div className="md:flex block justify-center">
                            <div className="w-76 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mr-10 mr-auto md:ml-0 ml-auto md:mb-10 mb-4">
                                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-brand-darkblue bg-opacity-5 p-1 mb-4">
                                    <IconRevisionGuides className="mt-1"/>
                                </div>
                                <p className="text-brand-darkblue text-xl font-bold mb-4">Revision Guides</p>
                                <p className="text-brand-text">
                                    Guides that condense content and help you revise for your exams time efficiently.
                                </p>
                            </div>
                            <div className="w-76 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mr-10 mr-auto md:ml-0 ml-auto md:mb-10 mb-4">
                                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-brand-darkblue bg-opacity-5 p-1 mb-4">
                                    <IconQuestionByTopic className="mt-1"/>
                                </div>
                                <p className="text-brand-darkblue text-xl font-bold mb-4">Questions by Topic</p>
                                <p className="text-brand-text">
                                    Each exam paper into topics which you can create your own test from.
                                </p>
                            </div>
                            <div className="w-76 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mb-10 mb-4 md:mx-0 mx-auto">
                                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-brand-darkblue bg-opacity-5 p-1 mb-4">
                                    <IconQuizzes className="mt-1"/>
                                </div>
                                <p className="text-brand-darkblue text-xl font-bold mb-4">Quizzes</p>
                                <p className="text-brand-text">
                                    Each exam need to be training so we have created quizzes to practice all questions.
                                </p>
                            </div>
                        </div>
                        <div className="md:flex block justify-center">
                            <div className="w-76 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mr-10 mr-auto md:ml-0 ml-auto md:mb-0 md:mb-10 mb-4">
                                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-brand-darkblue bg-opacity-5 p-1 mb-4">
                                    <IconExamPapers className="mt-1"/>
                                </div>
                                <p className="text-brand-darkblue text-xl font-bold mb-4">Exam Papers</p>
                                <p className="text-brand-text">
                                    Easily access exam papers and marking schemes in a few clicks. 
                                </p>
                            </div>
                            <div className="w-76 bg-white rounded-md flex flex-col items-center text-center px-5 py-10 md:mx-0 mx-auto md:mb-10 mb-4">
                                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-brand-darkblue bg-opacity-5 p-1 mb-4">
                                    <IconExamGenerator className="mt-1"/>
                                </div>
                                <p className="text-brand-darkblue text-xl font-bold mb-4">Exam Generator</p>
                                <p className="text-brand-text">
                                    Test yourself by making your own exams and check your answers .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 text-center">
                        <button className="rounded px-6 py-4 bg-brand-orange text-xl text-white font-semibold focus:outline-none">Try for free</button>
                    </div>
                </div>
            </div>
            <div className="bg-brand-darkblue py-16 relative z-10">
                <div className="container mx-auto mt-6">
                    <div className="md:flex block items-center">
                        <div className="flex-1 flex md:justify-end justify-center md:mr-8 mr-0 md:mb-0 mb-8">
                            <img src={dashboardImg}/>
                        </div>
                        <div className="flex-1 mb-4 md:ml-8 ml-0 md:text-left text-center">
                            <h1 className="text-white md:text-6xl text-4xl mb-2 font-bold">Improve yourself <br /> anytime any where.</h1>
                            <p className="text-white text-xl">Start acing your exams with ExamLearn.</p>
                            <div className="mt-10 flex items-center md:justify-start justify-center">
                                <button className="rounded px-6 py-4 bg-white text-xl text-brand-blue font-semibold focus:outline-none">Signup Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-5">
                <div className="slope-div bg-brand-blue absolute"></div>
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
            <div className="container mx-auto pt-16">
                <div className="mx-auto w-fit">
                    <h1 className="md:text-5xl text-4xl text-brand-darkblue font-bold mb-2 w-fit md:mx-0 mx-auto">Pricing</h1>
                    <p className="text-xl text-gray-70 w-fit md:text-left text-center">
                        Avoid costly grinds and revision book by signing up to this <br/>all in one package with everything any student needs. 
                    </p>
                    <div className="lg:flex block items-end w-fit mt-4 md:mx-0 mx-auto">
                        <div className="text-brand-text pb-6 max-w-xs md:mr-12 mr-0 md:text-left text-center md:mb-0 mb-8">
                            <h2 className="text-brand-darkblue text-2xl font-bold mb-4">Why to choose us?</h2>
                            <h3 className="font-semibold mb-2">Save your time</h3>
                            <p className="text-sm mb-3 pb-3 border-b">Don’t use chunky books. Our notes make it twice as quick to get the content covered without leaving anything out. </p>
                            <h3 className="font-semibold mb-2">Learn the Exam</h3>
                            <p className="text-sm mb-3 pb-3 border-b">The content is no use if you don’t know where and how to use it. We fix this!</p>
                            <h3 className="font-semibold mb-2">Written by Experts</h3>
                            <p className="text-sm mb-3 pb-3 border-b">All of our content is written by a group of students who received full marks in their own exams. </p>
                            <button className="flex items-center focus:outline-none font-semibold text-brand-blue md:mx-0 mx-auto">Learn more <IconBlueLeftArrow className="transform rotate-180 ml-2"/></button>
                        </div>
                        <div className="md:flex block items-end">
                            <div className="shadow-md w-68 md:w-72 md:mx-0 mx-auto md:mb-0 mb-4">
                                <div className="bg-white text-brand-darkblue text-2xl font-bold p-4 text-center">
                                    Free User
                                </div>
                                <div className="p-6 bg-gray-3">
                                    <p className="text-xs font-semibold text-gray-40 text-center mb-2">Limited Access</p>
                                    <p className="text-brand-blue font-bold text-4xl text-center mb-2">FREE</p>
                                    <button className="bg-brand-blue text-white rounded w-full py-2 font-semibold">Sign up now</button>
                                    <div className="text-brand-text font-semibold mt-6 pl-2">
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2"></div>
                                            Access All Exam Papers
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2"></div>
                                            Access All Topics
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2"></div>
                                            Limited Lessons
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 rounded-full border-2 border-brand-blue mr-2"></div>
                                            Another Bullet point
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md w-72 md:mx-0 mx-auto md:mb-0 mb-16">
                                <div className="bg-white text-brand-darkblue text-2xl font-bold p-4 text-center">
                                    ExamLearn Pro User
                                </div>
                                <div className="p-6 bg-gray-3">
                                    <p className="text-xs font-semibold text-gray-40 text-center mb-2">Unlimited Access</p>
                                    <p className="text-brand-orange font-bold text-4xl text-center mb-2">€59.99 <span className="text-sm">/year</span></p>
                                    <button className="bg-brand-orange text-white rounded w-full py-2 font-semibold">Get EdamLearn Pro now!</button>
                                    <p className="text-xs text-gray-40 mt-3 text-center">
                                        Membership auto-renews after 12 months.  Cancel subscription at any time.
                                    </p>
                                    <div className="text-brand-text font-semibold mt-3 pl-2">
                                        <div className="flex items-center mt-4">
                                            <IconYellowCheck className="mr-2"/>
                                            Access All Exam Papers
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <IconYellowCheck className="mr-2"/>
                                            Access All Topics
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <IconYellowCheck className="mr-2"/>
                                            Limited Lessons
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <IconYellowCheck className="mr-2"/>
                                            Another Bullet point
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SendEmailSection />
        </ContentLayout>
    )
}

export default Home;
