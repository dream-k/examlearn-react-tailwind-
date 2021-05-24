const SendEmailSection = (props) => {
    return (
        <div className="bg-brand-text py-16">
            <div className="container mx-auto">
                <div className="md:flex block items-center">
                    <div className="flex-1 md:mb-0 mb-8">
                        <h1 className="text-white md:text-5xl text-4xl font-bold" style={{maxWidth: '405px'}}>
                            Join <span className="border-b-2 border-brand-orange">thousands</span> of best material from best resources.
                        </h1>
                    </div>
                    <div className="flex-1">
                        <div className="pr-4 max-w-full flex">
                            <div className="mr-4">
                                <input className="border-b border-white bg-transparent w-full py-2" placeholder="Your email"/>
                                <p className="text-white mt-8">Sure, send me news and occasional offers by email. <br /> I know i can unsubscribe at any time.</p>
                            </div>
                            <div>
                                <button className="bg-brand-orange text-white rounded w-32 py-2 font-semibold">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendEmailSection;