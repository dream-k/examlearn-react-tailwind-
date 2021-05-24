import PropTypes from 'prop-types'
import './style.scss'

const StarRate = (props) => {
    const {
        progress
    } = props;

    return (
        <div className="relative inline">
            ★★★★★
            <div className="absolute top-0 left-0 text-brand-orange overflow-hidden flex items-center h-full" style={{width: progress + '%'}}>★★★★★</div>
        </div>
    )
}

StarRate.propTypes = {
    progress: PropTypes.number
}

StarRate.default = {
    progress: 0
}

export default StarRate
