import { useRef } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const ContentLayout = props => {
    const { noFooter } = props
    
    return (
        <div className="bg-brand-bg min-h-screen">
            <Header />
            {props.children}
            {!noFooter && <Footer />}
        </div>
    )
}

ContentLayout.propTypes = {
    children: PropTypes.node,
    noFooter: PropTypes.bool,
    className: PropTypes.string
}

ContentLayout.defaultProps = {
    children: null,
    noFooter: false,
    className: ""
}

export default ContentLayout;
