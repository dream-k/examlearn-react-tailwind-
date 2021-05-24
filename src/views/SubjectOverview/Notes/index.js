import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    IconArrowRight,
    IconLock,
    IconAppliedMaths
} from '../../../assets/icons'
import './style.scss'

const Notes = props => {
    const guides = [
        {
            title: "Directions",
            lessonCount: 4,
            description: "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida.",
            lessons: [
                {
                    title: "Mollis vivamus",
                    isPremium: false
                },
                {
                    title: "Tincidunt nunc maximus ",
                    isPremium: true
                },
                {
                    title: "Amet neque ",
                    isPremium: false
                },
                {
                    title: "Porttitor enim vulputate ",
                    isPremium: false
                },
            ]
        },
        {
            title: "Calculus- Differentions ",
            lessonCount: 2,
            description: "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida.",
            lessons: [
                {
                    title: "Double Differentiation",
                    isPremium: false
                },
                {
                    title: "Porttitor enim vulputate ",
                    isPremium: false
                },
            ]
        },
        {
            title: "Thermochemistry and Hydrocarbons",
            lessonCount: 6,
            description: "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida.",
            lessons: [
                {
                    title: "Mollis vivamus",
                    isPremium: false
                },
                {
                    title: "Tincidunt nunc maximus ",
                    isPremium: true
                },
                {
                    title: "Amet neque ",
                    isPremium: true
                },
                {
                    title: "Porttitor enim vulputate ",
                    isPremium: false
                },
                {
                    title: "Lobster golustarian tombola co toma ",
                    isPremium: false
                },
                {
                    title: "Gastorima nobalu",
                    isPremium: true
                },
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-40 mb-3">Revision Guides</h2>
            {
                guides.map((guide, index) => (
                    <div className={"md:flex block py-6 md:px-8 px-4 rounded bg-white " + (index !== guides.length - 1 && "mb-4")} key={index}>
                        <div className="md:w-52 w-full mr-10 md:mb-0 mb-3 md:px-0 px-2">
                            <h2 className="md:text-2xl text-xl font-bold text-brand-darkblue">{guide.title}</h2>
                            <p className="uppercase text-xs font-semibold text-brand-orange md:mb-5 mb-3">{guide.lessonCount} Lessons</p>
                            <p className="text-sm text-gray-40">
                                {guide.description}
                            </p>
                        </div>
                        <div className="flex-1" key={index}>
                        {
                            guide.lessons.map((lesson, index) => (
                                <Link to="/subject/notes/preview" key={index}>
                                    <div className={`py-4 pl-8 pr-5 flex items-center 
                                                    lesson-item bg-gray-3 rounded cursor-pointer 
                                                    text-brand-darkblue hover:border-brand-blue 
                                                    hover:bg-brand-bg hover:text-brand-blue 
                                                    border-2 border-transparent
                                                    ${index !== guide.lessons.length - 1 && "mb-2"}`
                                                    }>
                                        <p className="flex-1 font-semibold">{lesson.title}</p>
                                        {lesson.isPremium && <div className="mr-7 flex items-center">
                                            <IconLock className="mr-2"/>
                                            <p className="text-gray-40 md:block hidden">Premium</p>
                                        </div>}
                                        <IconArrowRight />
                                    </div>
                                </Link>
                                
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Notes;
