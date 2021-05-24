import { Link, useHistory } from 'react-router-dom'
import {
    IconArrowRight,
    IconPrinter,
    IconDownload
} from '../../../assets/icons'
import DashboardLayout from '../../Layout/Dashboard'
import './style.scss'

const NotePreview = props => {
    const routerHistory = useHistory()

    return (
        <DashboardLayout className="">
            <div className="flex items-center md:mb-4 mb-3">
                <div className="flex-1">
                    <button className="flex items-center py-2 rounded bg-brand-blue text-white font-semibold px-4" onClick={() => routerHistory.push('/subject/notes')}>
                        <IconArrowRight className="transform rotate-180 mr-2"/>
                        Back to Lessons
                    </button>
                </div>
                <div className="flex">
                    <button className="prev-button flex items-center py-2 border-2 font-semibold md:w-28 w-8 justify-center mr-3" disabled={true}>
                        <IconArrowRight className="transform rotate-180 md:mr-2 mr-0" />
                        <span className="md:block hidden">Previous</span>
                    </button>
                    <button className="next-button flex items-center py-2 border-2 font-semibold md:w-28 w-8 justify-center">
                        <span className="md:block hidden">Next</span>
                        <IconArrowRight className="md:ml-2 ml-0" />
                    </button>
                </div>
            </div>
            <div className="rounded bg-white md:p-10 p-4">
                <div className="flex pb-7 border-b-2">
                    <div className="flex-1">
                        <p className="uppercase text-xs text-brand-text">Applied Maths / Calculus differentiation</p>
                        <p className="text-2xl text-brand-darkblue font-bold">Double Differentiation</p>
                    </div>
                    <div className="flex text-white">
                        <div className="flex items-center justify-center rounded bg-brand-blue w-10 h-10 mr-3">
                            <IconPrinter />
                        </div>
                        <div className="flex items-center justify-center rounded bg-brand-orange w-10 h-10">
                            <IconDownload />
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="md:text-2xl text-base text-brand-text font-bold md:mb-4 mb-2">Energy sources for ATP formation</p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        ATP can be produced from light, oxidation of inorganic & organic compounds (above).
                    </p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        <span className="font-semibold">Light</span> – ATP is produced in the light stage of photosynthesis when light is absorbed by chlorophyll inchloroplasts and is used in the dark stage (anabolic reactions).
                    </p>
                    <p className="md:text-xl text-base text-brand-text mb-8">
                        <span className="font-semibold">Chemical</span> – some autotrophic bacteria produced ATP from the oxidation of inorganic compounds. The ATP isused to make carbohydrate from CO2in a process similar to the dark stage of p/s.
                    </p>

                    <p className="md:text-2xl text-base text-brand-text font-bold md:mb-4 mb-2">Biochemistry of respiration</p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        Glycolysis is the breakdown of glucose into two pyruvates in the cytosol (= complex liquid of cytoplasm inwhich the cell organelles are suspended).
                    </p>
                    <p className="md:text-xl text-base text-brand-text mb-8">
                        Glucose is ‘energised’ (phosphorylated) by adding 2 phosphates to it from 2 ATP molecules. This 6-Ccompound is unstable and is then converted, in a series of steps, into 2 pyruvates. 4 ATPs are formed in theprocess, but allowing for the 2 ATPs used initially there is a net gain of 2 ATPS
                    </p>

                    <p className="md:text-xl text-base text-brand-text md:mb-4 mb-2">Why not follow this lesson along using our video tutorial?</p>
                    <div className="bg-brand-orange bg-opacity-10 p-5 rounded mb-12">
                        <video width="320" height="240" controls style={{width: '100%'}}>
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="md:text-2xl text-base text-brand-text font-bold md:mb-4 mb-2">Energy sources for ATP formation</p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        ATP can be produced from light, oxidation of inorganic & organic compounds (above).
                    </p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        <span className="font-semibold">Light</span> – ATP is produced in the light stage of photosynthesis when light is absorbed by chlorophyll inchloroplasts and is used in the dark stage (anabolic reactions).
                    </p>
                    <p className="md:text-xl text-base text-brand-text mb-8">
                        <span className="font-semibold">Chemical</span> – some autotrophic bacteria produced ATP from the oxidation of inorganic compounds. The ATP isused to make carbohydrate from CO2in a process similar to the dark stage of p/s.
                    </p>

                    <div className="md:m-6 m-3 md:py-6 py-3 md:px-8 px-3 rounded-lg bg-brand-blue bg-opacity-10 md:text-xl text-base text-brand-darkblue">
                        <span className="font-bold">Tips :</span>   When light is absorbed by chlorophyll inchloroplasts and is used in the dark stage (anabolic reactions).
                    </div>

                    <p className="md:text-2xl text-base text-brand-text font-bold md:mb-4 mb-2">Biochemistry of respiration</p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        Glycolysis is the breakdown of glucose into two pyruvates in the cytosol (= complex liquid of cytoplasm inwhich the cell organelles are suspended).
                    </p>
                    <p className="md:text-xl text-base text-brand-text mb-8">
                        Glucose is ‘energised’ (phosphorylated) by adding 2 phosphates to it from 2 ATP molecules. This 6-Ccompound is unstable and is then converted, in a series of steps, into 2 pyruvates. 4 ATPs are formed in theprocess, but allowing for the 2 ATPs used initially there is a net gain of 2 ATPS
                    </p>

                    <p className="md:text-2xl text-base text-brand-text font-bold md:mb-4 mb-2">Energy sources for ATP formation</p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        ATP can be produced from light, oxidation of inorganic & organic compounds (above).
                    </p>
                    <div className="md:m-6 m-3 md:py-6 py-3 md:px-8 px-3 rounded-lg bg-brand-orange bg-opacity-10 md:text-xl text-base text-brand-darkorange">
                        <span className="font-bold">Note :</span> ATP is produced in the light stage of photosynthesis when light is absorbed by chlorophyll inchloroplasts and is used in the dark stage (anabolic reactions).
                    </div>
                    <p className="md:text-xl text-base text-brand-text mb-8">
                        <span className="font-semibold">Chemical</span> – some autotrophic bacteria produced ATP from the oxidation of inorganic compounds. The ATP isused to make carbohydrate from CO2in a process similar to the dark stage of p/s.
                    </p>

                    <p className="md:text-2xl text-base text-brand-text font-bold md:mb-4 mb-2">Biochemistry of respiration</p>
                    <p className="md:text-xl text-base text-brand-text md:mb-5 mb-3">
                        Glycolysis is the breakdown of glucose into two pyruvates in the cytosol (= complex liquid of cytoplasm inwhich the cell organelles are suspended).
                    </p>
                    <p className="md:text-xl text-base text-brand-text mb-8">
                        Glucose is ‘energised’ (phosphorylated) by adding 2 phosphates to it from 2 ATP molecules. This 6-Ccompound is unstable and is then converted, in a series of steps, into 2 pyruvates. 4 ATPs are formed in theprocess, but allowing for the 2 ATPs used initially there is a net gain of 2 ATPS
                    </p>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default NotePreview;
