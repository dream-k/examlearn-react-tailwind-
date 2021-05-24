import { useRef, useState, useEffect } from 'react'
import Header from './Header'
import SideNav from './SideNav'
import Footer from './Footer'

const DashboardLayout = props => {
    const [sidenavCollapse, setSidenavCollapse] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setSidenavCollapse(false)
        }

        if (window.innerWidth < 1024) {
            setSidenavCollapse(true)
        }
    }

    const handleSideNav = () => {
        setSidenavCollapse(!sidenavCollapse)
    }

    return (
        <div className="bg-brand-bg min-h-screen">
            <Header toggleSideNav={handleSideNav} isAuthenticated={true}/>
            <div className="container pt-4 mx-auto flex relative">
                {
                    !sidenavCollapse && (
                        <div className="md:mr-4 mr-0 lg:relative absolute top-0 left-0">
                            <SideNav />
                        </div>
                    )
                }
                <div className="flex-1 pb-16">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;
